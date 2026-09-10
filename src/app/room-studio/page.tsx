"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Trash2,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Layers,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Download,
  Share2,
  X,
  Compass,
  CheckCircle2,
  Sliders,
  ChevronDown,
  ChevronUp,
  Box
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ThreeRoomStudio from "@/components/3d/ThreeRoomStudio";
import {
  useRoomStudioStore,
  ROOM_PRESETS,
  CATALOG_ADDABLES,
  RoomItem
} from "@/stores/useRoomStudioStore";
import { formatPriceRequest } from "@/lib/utils";

export default function RoomStudioPage() {
  const [viewMode, setViewMode] = useState<"3d" | "2d">("3d");
  const {
    activePresetId,
    placedItems,
    selectedItemId,
    isSaveModalOpen,
    isAddDrawerOpen,
    filterCategory,
    loadPreset,
    addItem,
    selectItem,
    updateItemPosition,
    updateItemScale,
    updateItemRotation,
    updateItemMaterial,
    bringForward,
    sendBackward,
    removeItem,
    clearRoom,
    setSaveModalOpen,
    setAddDrawerOpen,
    setFilterCategory,
    getSerializedRoomDossier
  } = useRoomStudioStore();

  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

  const selectedItem = placedItems.find((i) => i.instanceId === selectedItemId) || null;
  const currentPreset = ROOM_PRESETS.find((p) => p.id === activePresetId) || ROOM_PRESETS[0];

  // Save Modal Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    notes: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (instanceId: string, e: React.PointerEvent) => {
    e.stopPropagation();
    selectItem(instanceId);
    setIsDragging(true);
    setDraggedItemId(instanceId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !draggedItemId || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    const xPercent = ((clientX - rect.left) / rect.width) * 100;
    const yPercent = ((clientY - rect.top) / rect.height) * 100;

    updateItemPosition(draggedItemId, xPercent, yPercent);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDraggedItemId(null);
  };

  const filteredCatalog =
    filterCategory === "all"
      ? CATALOG_ADDABLES
      : CATALOG_ADDABLES.filter((c) => c.category === filterCategory);

  const serializedDossier = getSerializedRoomDossier();

  const handleDownloadDossier = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(serializedDossier, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `Woods_Decor_Room_Studio_${activePresetId}_dossier.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleDownloadSnapshot = () => {
    if (!canvasRef.current) return;
    const canvas = document.createElement("canvas");
    const rect = canvasRef.current.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(2, 2);
    // Draw background wall
    ctx.fillStyle = activePresetId === "penthouse" ? "#1A1918" : "#242220";
    ctx.fillRect(0, 0, rect.width, rect.height);
    // Draw floor
    ctx.fillStyle = activePresetId === "penthouse" ? "#121110" : "#181716";
    ctx.fillRect(0, rect.height * 0.6, rect.width, rect.height * 0.4);

    // Draw floor dividing line
    ctx.strokeStyle = "#3D332B";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, rect.height * 0.6);
    ctx.lineTo(rect.width, rect.height * 0.6);
    ctx.stroke();

    // Draw watermark
    ctx.fillStyle = "#BFA16F";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`WOODS DECOR ATELIER · ${currentPreset.name.toUpperCase()}`, 24, 34);

    if (placedItems.length === 0) {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `Woods_Decor_${currentPreset.name.replace(/\s+/g, "_")}_Render.png`;
      link.href = dataUrl;
      link.click();
      return;
    }

    let loaded = 0;
    placedItems.forEach((item) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = item.image;
      img.onload = () => {
        const itemWidth = 180 * item.scale;
        const itemHeight = 135 * item.scale;
        const itemX = (item.x / 100) * rect.width - itemWidth / 2;
        const itemY = (item.y / 100) * rect.height - itemHeight / 2;
        ctx.save();
        ctx.translate(itemX + itemWidth / 2, itemY + itemHeight / 2);
        ctx.rotate((item.rotation * Math.PI) / 180);
        // Contact Shadow
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.beginPath();
        ctx.ellipse(0, itemHeight / 2 - 4, itemWidth * 0.45, 8, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.drawImage(img, -itemWidth / 2, -itemHeight / 2, itemWidth, itemHeight);
        ctx.restore();
        loaded++;
        if (loaded === placedItems.length) {
          const dataUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.download = `Woods_Decor_${currentPreset.name.replace(/\s+/g, "_")}_Render.png`;
          link.href = dataUrl;
          link.click();
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === placedItems.length) {
          const dataUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.download = `Woods_Decor_${currentPreset.name.replace(/\s+/g, "_")}_Render.png`;
          link.href = dataUrl;
          link.click();
        }
      };
    });
  };

  const waDossierUrl = formatPriceRequest(
    `Room Studio Dossier (${serializedDossier.presetName}): Includes ${serializedDossier.items
      .map((i) => `${i.name} [${i.fabric} / ${i.finish}]`)
      .join(", ")}`
  );

  return (
    <div className="pt-32 pb-24 bg-[#141312] text-[#FBF9F5] min-h-screen select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <SectionHeading
              number="05"
              eyebrow="Spatial Composition Studio"
              title="Design Your Room."
              subtitle="Curate, position, and customize Woods Decor furniture in a full architectural living room canvas."
              theme="dark"
            />
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            {viewMode === "2d" ? (
              <>
                <button
                  onClick={() => setAddDrawerOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#BFA16F] text-[#141312] px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Furniture</span>
                </button>

                <button
                  onClick={handleDownloadSnapshot}
                  className="inline-flex items-center gap-2 bg-[#1F1D1B] text-white border border-[#2E2C2A] px-4 py-2.5 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:border-[#BFA16F] hover:text-[#BFA16F] transition-all cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Image (PNG)</span>
                </button>
              </>
            ) : null}

            <button
              onClick={() => setSaveModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-[#141312] px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-[#BFA16F] transition-all cursor-pointer shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              <span>Save &amp; Send Dossier</span>
            </button>
          </div>
        </div>

        {/* Studio View Mode Switcher: 3D 360° Walkover vs 2D Spatial Plan */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#2E2C2A]">
          <div className="inline-flex p-1 bg-[#1F1D1B] border border-[#2E2C2A] rounded-none">
            <button
              onClick={() => setViewMode("3d")}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] transition-all cursor-pointer ${
                viewMode === "3d"
                  ? "bg-[#BFA16F] text-[#141312] font-bold shadow-md"
                  : "text-[#8C8780] hover:text-white"
              }`}
            >
              <Box className="w-4 h-4" />
              <span>3D 360° Walkover Studio</span>
              <span className={`text-[9px] px-1.5 py-0.5 font-mono ${
                viewMode === "3d" ? "bg-[#141312] text-[#BFA16F]" : "bg-white/10 text-white"
              }`}>
                WEBGL
              </span>
            </button>

            <button
              onClick={() => setViewMode("2d")}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] transition-all cursor-pointer ${
                viewMode === "2d"
                  ? "bg-[#BFA16F] text-[#141312] font-bold shadow-md"
                  : "text-[#8C8780] hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2D Spatial Plan</span>
            </button>
          </div>

          {viewMode === "2d" && (
            /* Preset Tabs */
            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C8780] mr-2 shrink-0">
                Presets:
              </span>
              {ROOM_PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => loadPreset(p.id)}
                  className={`px-3 py-1.5 text-xs font-sans uppercase tracking-[0.18em] whitespace-nowrap transition-all cursor-pointer ${
                    activePresetId === p.id
                      ? "bg-[#BFA16F] text-[#141312] font-semibold shadow-md"
                      : "bg-[#1F1D1B] text-[#8C8780] hover:text-white border border-[#2E2C2A]"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3D WebGL Walkover Studio View */}
        {viewMode === "3d" ? (
          <div className="mb-14">
            <ThreeRoomStudio />
          </div>
        ) : (
          /* Main 2D Room Canvas Workspace */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left / Center: Interactive Drag-and-Drop Room Stage */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div
              ref={canvasRef}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onClick={() => selectItem(null)}
              className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-none border-2 border-[#2E2C2A] overflow-hidden shadow-2xl cursor-crosshair touch-none"
              style={{
                background: currentPreset.wallAtmosphere
              }}
            >
              {/* Floor Horizon Line & Perspective Shading */}
              <div
                className="absolute inset-x-0 bottom-0 h-[40%] border-t border-black/20"
                style={{ background: currentPreset.floorStyle }}
              />

              {/* Architectural Baseboard / Skirting Line */}
              <div className="absolute inset-x-0 bottom-[40%] h-[3px] bg-gradient-to-r from-[#2A241F] via-[#3D332B] to-[#2A241F] border-b border-black/40 shadow-sm pointer-events-none" />

              {/* Architectural Ambient Shadow Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Room Watermark Info */}
              <div className="absolute top-4 left-4 bg-[#141312]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-[10px] font-sans text-white uppercase tracking-widest pointer-events-none">
                <span className="text-[#D4BC8B] font-semibold">{currentPreset.name}</span>
                <span className="text-white/40 mx-2">|</span>
                <span>{placedItems.length} Pieces In Scene</span>
              </div>

              {/* Placed Furniture Items Layer */}
              {placedItems.map((item) => {
                const isSelected = selectedItemId === item.instanceId;
                return (
                  <div
                    key={item.instanceId}
                    onPointerDown={(e) => handlePointerDown(item.instanceId, e)}
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: `translate(-50%, -50%) scale(${item.scale}) rotate(${item.rotation}deg)`,
                      zIndex: item.zIndex
                    }}
                    className={`absolute cursor-grab active:cursor-grabbing transition-shadow group ${
                      isSelected
                        ? "ring-2 ring-[#BFA16F] ring-offset-2 ring-offset-[#141312]"
                        : "hover:ring-1 hover:ring-white/40"
                    }`}
                  >
                    {/* Perspective Floor Contact Shadow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[88%] h-4 bg-black/60 rounded-full blur-md -z-10 transform scale-y-50 pointer-events-none" />

                    {/* Furniture Item Graphic */}
                    <div className="relative w-44 sm:w-56 md:w-64 aspect-[4/3] drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain pointer-events-none select-none"
                        draggable={false}
                      />
                    </div>

                    {/* Selection HUD Tag */}
                    {isSelected && (
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#141312] text-white text-[9px] font-sans uppercase tracking-widest px-2.5 py-0.5 whitespace-nowrap border border-[#BFA16F] shadow-lg pointer-events-none">
                        {item.name}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stage Footer Instructions */}
            <div className="flex items-center justify-between text-xs font-sans text-[#8C8780] px-2">
              <div>
                💡 <strong>Click and drag</strong> any piece to reposition in the room.
              </div>
              <div>
                Scale: {selectedItem ? `${Math.round(selectedItem.scale * 100)}%` : "N/A"}
              </div>
            </div>
          </div>

          {/* Right: Selected Piece Inspector & Material Swapper */}
          <div className="lg:col-span-4 bg-[#1F1D1B] border border-[#2E2C2A] p-6 sm:p-7 shadow-2xl space-y-6">
            {selectedItem ? (
              <div className="space-y-6">
                <div className="flex items-start justify-between border-b border-[#2E2C2A] pb-4">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D4BC8B] font-semibold">
                      Selected Piece Inspector
                    </span>
                    <h3 className="font-serif text-2xl text-white font-normal mt-0.5">
                      {selectedItem.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8C8780] mt-0.5">
                      {selectedItem.dimensions}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(selectedItem.instanceId)}
                    title="Remove from room"
                    className="p-2 text-[#8C8780] hover:text-red-400 transition-colors border border-[#2E2C2A] bg-[#141312] cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Transform & Layout Controls */}
                <div className="space-y-3">
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-semibold">
                    Spatial Transforms
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    {/* Scale Controls */}
                    <div className="flex items-center justify-between bg-[#141312] border border-[#2E2C2A] p-2">
                      <span className="text-[#8C8780] text-[10px]">Scale</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateItemScale(selectedItem.instanceId, -0.1)}
                          className="p-1 hover:bg-[#2E2C2A] text-white cursor-pointer"
                        >
                          <ZoomOut className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => updateItemScale(selectedItem.instanceId, 0.1)}
                          className="p-1 hover:bg-[#2E2C2A] text-white cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Rotation Controls */}
                    <div className="flex items-center justify-between bg-[#141312] border border-[#2E2C2A] p-2">
                      <span className="text-[#8C8780] text-[10px]">Rotate</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateItemRotation(selectedItem.instanceId, -5)}
                          className="p-1 hover:bg-[#2E2C2A] text-white cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => updateItemRotation(selectedItem.instanceId, 5)}
                          className="p-1 hover:bg-[#2E2C2A] text-white cursor-pointer"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Layer Z-Index Order */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans pt-1">
                    <button
                      onClick={() => bringForward(selectedItem.instanceId)}
                      className="p-2 bg-[#141312] border border-[#2E2C2A] hover:border-white text-[#D8CEBE] text-[10px] uppercase tracking-wider text-center cursor-pointer"
                    >
                      Bring Forward ↑
                    </button>
                    <button
                      onClick={() => sendBackward(selectedItem.instanceId)}
                      className="p-2 bg-[#141312] border border-[#2E2C2A] hover:border-white text-[#D8CEBE] text-[10px] uppercase tracking-wider text-center cursor-pointer"
                    >
                      Send Backward ↓
                    </button>
                  </div>
                </div>

                {/* Fabric / Material Customizer for Selected Piece */}
                <div className="space-y-3 pt-2">
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-semibold">
                    Upholstery &amp; Finish Customization
                  </div>

                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-3 bg-[#141312] border border-[#2E2C2A] space-y-1">
                      <div className="text-[10px] text-[#8C8780] uppercase">Selected Weave</div>
                      <select
                        value={selectedItem.selectedFabric}
                        onChange={(e) =>
                          updateItemMaterial(
                            selectedItem.instanceId,
                            e.target.value,
                            selectedItem.selectedFinish
                          )
                        }
                        className="w-full bg-[#1F1D1B] border border-[#2E2C2A] text-white p-2 text-xs outline-none cursor-pointer"
                      >
                        <option>Flemish Oatmeal Bouclé</option>
                        <option>Natural Washed Belgian Linen</option>
                        <option>Charcoal Textured Wool</option>
                        <option>Olive Drape Chenille</option>
                        <option>Saddle Full-Grain Leather</option>
                      </select>
                    </div>

                    <div className="p-3 bg-[#141312] border border-[#2E2C2A] space-y-1">
                      <div className="text-[10px] text-[#8C8780] uppercase">Timber Finish</div>
                      <select
                        value={selectedItem.selectedFinish}
                        onChange={(e) =>
                          updateItemMaterial(
                            selectedItem.instanceId,
                            selectedItem.selectedFabric,
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1F1D1B] border border-[#2E2C2A] text-white p-2 text-xs outline-none cursor-pointer"
                      >
                        <option>Seasoned Smoked Walnut</option>
                        <option>Aged Golden Indian Teak</option>
                        <option>Charcoal Ebonized Ash</option>
                        <option>Bleached Natural Teak</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* View Product Details Link */}
                <div className="pt-2 border-t border-[#2E2C2A] flex items-center justify-between text-xs font-sans">
                  <Link
                    href={`/product/${selectedItem.slug}`}
                    className="text-[#D4BC8B] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View Product Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/configurator?product=${selectedItem.productId}`}
                    className="text-white hover:text-[#BFA16F] text-[11px] uppercase tracking-wider"
                  >
                    Open In Configurator →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center space-y-3 text-xs font-sans text-[#8C8780]">
                <Compass className="w-8 h-8 text-[#BFA16F] mx-auto opacity-60" />
                <p>Click any piece on the room canvas to inspect dimensions, scale, rotation, and finishes.</p>
                <button
                  onClick={() => setAddDrawerOpen(true)}
                  className="inline-flex items-center gap-1.5 text-white uppercase tracking-wider text-[11px] font-semibold underline pt-2"
                >
                  <Plus className="w-3.5 h-3.5 text-[#BFA16F]" />
                  <span>Add A Piece Now</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

        {/* Curation Item Schedule Summary Table */}
        <div className="bg-[#1F1D1B] border border-[#2E2C2A] p-6 sm:p-8 mb-16">
          <div className="flex items-center justify-between border-b border-[#2E2C2A] pb-4 mb-6">
            <h3 className="font-serif text-2xl text-white font-normal">
              Active Room Furniture Schedule ({placedItems.length} Items)
            </h3>
            <button
              onClick={() => setSaveModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#BFA16F] hover:underline font-semibold"
            >
              <span>Export Design Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placedItems.map((item, idx) => (
              <div
                key={item.instanceId}
                onClick={() => selectItem(item.instanceId)}
                className={`p-4 bg-[#141312] border transition-all cursor-pointer ${
                  selectedItemId === item.instanceId
                    ? "border-[#BFA16F] ring-1 ring-[#BFA16F]"
                    : "border-[#2E2C2A] hover:border-white/40"
                }`}
              >
                <div className="flex items-baseline justify-between text-[10px] font-mono text-[#D4BC8B] mb-1">
                  <span>0{idx + 1} / {item.category.toUpperCase()}</span>
                  <span>{item.dimensions.split("·")[0]}</span>
                </div>
                <div className="font-serif text-lg text-white font-medium">{item.name}</div>
                <div className="text-xs font-sans text-[#8C8780] mt-1">
                  {item.selectedFabric} · {item.selectedFinish}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Furniture Drawer Modal */}
      {isAddDrawerOpen && (
        <div className="fixed inset-0 z-[110] bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#1F1D1B] border border-[#2E2C2A] max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#2E2C2A] pb-4">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D4BC8B] font-semibold block">
                  Woods Decor Catalog
                </span>
                <h3 className="font-serif text-2xl text-white font-normal">
                  Add Piece To Room Stage
                </h3>
              </div>
              <button
                onClick={() => setAddDrawerOpen(false)}
                className="p-2 text-[#8C8780] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#2E2C2A] no-scrollbar">
              {["all", "sofas", "chairs", "consoles", "tables"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                    filterCategory === cat
                      ? "bg-[#BFA16F] text-[#141312] font-semibold"
                      : "bg-[#141312] text-[#8C8780] hover:text-white border border-[#2E2C2A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCatalog.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addItem(item)}
                  className="bg-[#141312] border border-[#2E2C2A] hover:border-[#BFA16F] p-4 flex flex-col justify-between group cursor-pointer transition-all shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-[#1F1D1B] mb-3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-[#D4BC8B] font-medium">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-mono text-[#8C8780] mt-0.5">
                      {item.dimensions}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#2E2C2A] flex items-center justify-between text-[11px] font-sans text-[#D4BC8B] font-semibold">
                    <span>+ Add To Canvas</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Save & Export Room Dossier Modal */}
      {isSaveModalOpen && (
        <div className="fixed inset-0 z-[110] bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#FBF9F5] text-[#141312] border border-[#E8E2D5] max-w-xl w-full p-8 sm:p-10 shadow-2xl space-y-6 relative my-auto animate-fadeIn">
            <button
              onClick={() => setSaveModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#8C8780] hover:text-[#141312] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#141312] text-[#BFA16F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#141312]">
                  Room Design Dossier Serialized
                </h3>
                <p className="text-sm font-sans text-[#66625D] leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your room ensemble containing {serializedDossier.itemCount} pieces has been prepared for dispatch to our Mohali atelier directors.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={waDossierUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#141312] text-white hover:bg-[#9E7E47] px-6 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send Dossier via WhatsApp</span>
                  </a>
                  <button
                    onClick={handleDownloadDossier}
                    className="border border-[#E8E2D5] px-6 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    Download JSON
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#9E7E47] font-bold block mb-1">
                    Atelier Room Dossier
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141312] font-normal">
                    Save &amp; Send {serializedDossier.presetName}
                  </h3>
                </div>

                {/* Items Summary */}
                <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-3.5 text-xs font-sans space-y-1.5 text-[#2E2C2A]">
                  <div className="font-semibold text-[#141312]">
                    Included Pieces ({serializedDossier.itemCount}):
                  </div>
                  <ul className="space-y-1 text-[#66625D]">
                    {serializedDossier.items.map((i, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#9E7E47]">•</span>
                        <span>{i.name} ({i.fabric} · {i.finish})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aryan Sehgal"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98154 00000"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aryan@residence.in"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      City / Delivery State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Chandigarh / New Delhi"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                    Room Dimensions &amp; Specific Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide floorplan width/length, ceiling height, or delivery timeline..."
                    className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141312] text-white hover:bg-[#9E7E47] py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all shadow-xl cursor-pointer"
                >
                  Serialize &amp; Send Room Dossier →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
