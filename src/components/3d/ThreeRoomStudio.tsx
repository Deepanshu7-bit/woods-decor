"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import {
  RotateCw,
  RotateCcw,
  Move,
  Camera,
  Sun,
  Moon,
  Footprints,
  Eye,
  Download,
  Trash2,
  Plus,
  Compass,
  Layers,
  Sparkles,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Maximize2
} from "lucide-react";

export interface Furniture3DItem {
  id: string;
  name: string;
  type: "sofa" | "chair" | "table" | "lamp" | "console";
  x: number;
  z: number;
  rotationY: number;
  fabricColor: string;
  woodType: "teak" | "walnut" | "oak";
  scale: number;
}

export default function ThreeRoomStudio() {
  const mountRef = useRef<HTMLDivElement>(null);

  // Studio Mode State
  const [navMode, setNavMode] = useState<"orbit" | "walk">("orbit");
  const [lightingMode, setLightingMode] = useState<"day" | "night">("day");
  const [selectedItemId, setSelectedItemId] = useState<string | null>("sofa-1");

  // 3D Scene Items State
  const [items, setItems] = useState<Furniture3DItem[]>([
    {
      id: "sofa-1",
      name: "Milano 3-Seater Sofa",
      type: "sofa",
      x: 0,
      z: 0.5,
      rotationY: 0,
      fabricColor: "#F4F0E8", // Flemish Ivory Boucle
      woodType: "walnut",
      scale: 1,
    },
    {
      id: "chair-1",
      name: "Aurelia Lounge Chair",
      type: "chair",
      x: 2.2,
      z: 0.8,
      rotationY: -Math.PI / 4,
      fabricColor: "#BFA16F", // Brass Velvet
      woodType: "walnut",
      scale: 1,
    },
    {
      id: "table-1",
      name: "Architectural Coffee Table",
      type: "table",
      x: 0,
      z: 1.8,
      rotationY: 0,
      fabricColor: "#E8E2D5", // Travertine
      woodType: "teak",
      scale: 1,
    },
    {
      id: "lamp-1",
      name: "Atelier Arc Floor Lamp",
      type: "lamp",
      x: -2.4,
      z: -0.8,
      rotationY: Math.PI / 6,
      fabricColor: "#D4BC8B", // Brass
      woodType: "oak",
      scale: 1,
    },
  ]);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesGroupRef = useRef<THREE.Group | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const spotLightRef = useRef<THREE.SpotLight | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Camera Orbit State
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });
  const sphericalRef = useRef({ radius: 7.5, theta: Math.PI / 4, phi: Math.PI / 3.2 });
  const walkPosRef = useRef({ x: 0, y: 1.65, z: 4.2, yaw: 0 });

  // Camera Presets
  const applyCameraPreset = (preset: "vista" | "sofa" | "walk" | "top") => {
    if (preset === "vista") {
      setNavMode("orbit");
      sphericalRef.current = { radius: 7.5, theta: Math.PI / 4, phi: Math.PI / 3.2 };
    } else if (preset === "sofa") {
      setNavMode("orbit");
      sphericalRef.current = { radius: 4.2, theta: 0.1, phi: Math.PI / 2.6 };
    } else if (preset === "top") {
      setNavMode("orbit");
      sphericalRef.current = { radius: 8.5, theta: 0, phi: 0.05 };
    } else if (preset === "walk") {
      setNavMode("walk");
      walkPosRef.current = { x: 0, y: 1.65, z: 3.8, yaw: 0 };
    }
  };

  // Walk Movement Handler
  const moveWalkCamera = useCallback((dx: number, dz: number, dyaw: number = 0) => {
    const yaw = walkPosRef.current.yaw + dyaw;
    walkPosRef.current.yaw = yaw;

    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);

    walkPosRef.current.x += (dx * cos - dz * sin) * 0.25;
    walkPosRef.current.z += (dx * sin + dz * cos) * 0.25;

    // Constrain inside room boundaries (-4.5 to 4.5m)
    walkPosRef.current.x = Math.max(-4.2, Math.min(4.2, walkPosRef.current.x));
    walkPosRef.current.z = Math.max(-4.2, Math.min(4.2, walkPosRef.current.z));
  }, []);

  // Keyboard navigation for first person walk
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (navMode !== "walk") return;
      if (e.key === "w" || e.key === "ArrowUp") moveWalkCamera(0, -1);
      if (e.key === "s" || e.key === "ArrowDown") moveWalkCamera(0, 1);
      if (e.key === "a" || e.key === "ArrowLeft") moveWalkCamera(-1, 0, -0.05);
      if (e.key === "d" || e.key === "ArrowRight") moveWalkCamera(1, 0, 0.05);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navMode, moveWalkCamera]);

  // Three.js Scene Setup & Mount
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color("#0E1117");
    scene.fog = new THREE.FogExp2("#0E1117", 0.025);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.replaceChildren(renderer.domElement);

    // 4. Room Architectural Shell
    const roomGroup = new THREE.Group();
    scene.add(roomGroup);

    // Floor (Wood Plank Travertine Herringbone)
    const floorGeo = new THREE.PlaneGeometry(12, 12, 32, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      color: "#241D17",
      roughness: 0.35,
      metalness: 0.1,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Woven Area Rug
    const rugGeo = new THREE.PlaneGeometry(5.5, 4);
    const rugMat = new THREE.MeshStandardMaterial({
      color: "#E2DDD3",
      roughness: 0.95,
      metalness: 0.0,
    });
    const rug = new THREE.Mesh(rugGeo, rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 1.0);
    rug.receiveShadow = true;
    roomGroup.add(rug);

    // Back Wall
    const backWallGeo = new THREE.PlaneGeometry(12, 5);
    const wallMat = new THREE.MeshStandardMaterial({
      color: "#1A1B20",
      roughness: 0.85,
      metalness: 0.05,
    });
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, 2.5, -6);
    backWall.receiveShadow = true;
    roomGroup.add(backWall);

    // Large Panoramic Floor-to-Ceiling Glass Window Frame
    const windowFrameMat = new THREE.MeshStandardMaterial({ color: "#0B0C0E", metalness: 0.8, roughness: 0.2 });
    const windowFrame = new THREE.Mesh(new THREE.BoxGeometry(6.5, 3.8, 0.1), windowFrameMat);
    windowFrame.position.set(0, 2.4, -5.92);
    roomGroup.add(windowFrame);

    // Window Glass Pane
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: "#C6DCFF",
      transparent: true,
      opacity: 0.3,
      roughness: 0.05,
      transmission: 0.9,
      ior: 1.5,
    });
    const glassPane = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 3.5), glassMat);
    glassPane.position.set(0, 2.4, -5.9);
    roomGroup.add(glassPane);

    // Exterior Architectural Courtyard Backing
    const backdropGeo = new THREE.PlaneGeometry(16, 9);
    const backdropMat = new THREE.MeshBasicMaterial({ color: "#3B4D3C" });
    const backdrop = new THREE.Mesh(backdropGeo, backdropMat);
    backdrop.position.set(0, 3.5, -8.5);
    roomGroup.add(backdrop);

    // Left Wall
    const leftWall = new THREE.Mesh(backWallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-6, 2.5, 0);
    leftWall.receiveShadow = true;
    roomGroup.add(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(backWallGeo, wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(6, 2.5, 0);
    rightWall.receiveShadow = true;
    roomGroup.add(rightWall);

    // Baseboard Skirting
    const skirtingMat = new THREE.MeshStandardMaterial({ color: "#14100C", roughness: 0.4 });
    const skirtingBack = new THREE.Mesh(new THREE.BoxGeometry(12, 0.15, 0.05), skirtingMat);
    skirtingBack.position.set(0, 0.075, -5.97);
    roomGroup.add(skirtingBack);

    // 5. Lighting Architecture
    const ambientLight = new THREE.AmbientLight("#FFFFFF", 0.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight("#EBF2FF", "#2E241E", 0.35);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight("#FFF8E7", 1.8);
    sunLight.position.set(4, 7, -3);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0002;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const spotLight = new THREE.SpotLight("#FFE8C4", 1.2, 10, Math.PI / 5, 0.4);
    spotLight.position.set(0, 4.5, 1.2);
    spotLight.target.position.set(0, 0, 1.0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(spotLight.target);
    spotLightRef.current = spotLight;

    // 6. Dynamic Furniture Group
    const meshesGroup = new THREE.Group();
    scene.add(meshesGroup);
    meshesGroupRef.current = meshesGroup;

    // 7. Animation & Render Loop
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      if (cameraRef.current) {
        if (navMode === "orbit") {
          const { radius, theta, phi } = sphericalRef.current;
          cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
          cameraRef.current.position.y = radius * Math.cos(phi);
          cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
          cameraRef.current.lookAt(0, 0.8, 0.8);
        } else {
          // Walk mode
          const { x, y, z, yaw } = walkPosRef.current;
          cameraRef.current.position.set(x, y, z);
          cameraRef.current.lookAt(x - Math.sin(yaw), y, z - Math.cos(yaw));
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      renderer.dispose();
    };
  }, [navMode]);

  // Build Procedural 3D Furniture Meshes
  useEffect(() => {
    if (!meshesGroupRef.current) return;
    const group = meshesGroupRef.current;

    // Clear old furniture
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
    }

    const woodColors = {
      walnut: "#3A281E",
      teak: "#8C5832",
      oak: "#1B1714",
    };

    items.forEach((item) => {
      const itemGroup = new THREE.Group();
      itemGroup.position.set(item.x, 0, item.z);
      itemGroup.rotation.y = item.rotationY;
      itemGroup.scale.set(item.scale, item.scale, item.scale);
      itemGroup.name = item.id;

      const isSelected = selectedItemId === item.id;

      // Selection ground ring
      if (isSelected) {
        const ringGeo = new THREE.RingGeometry(1.3, 1.35, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: "#BFA16F", side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.02;
        itemGroup.add(ring);
      }

      const fabricMat = new THREE.MeshStandardMaterial({
        color: item.fabricColor,
        roughness: 0.75,
        metalness: 0.05,
      });

      const woodMat = new THREE.MeshStandardMaterial({
        color: woodColors[item.woodType],
        roughness: 0.35,
        metalness: 0.15,
      });

      const brassMat = new THREE.MeshStandardMaterial({
        color: "#BFA16F",
        roughness: 0.25,
        metalness: 0.85,
      });

      if (item.type === "sofa") {
        // Milano 3-Seater Sofa 3D Mesh
        // Timber Base Plinth
        const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.95), woodMat);
        base.position.y = 0.06;
        base.castShadow = true;
        base.receiveShadow = true;
        itemGroup.add(base);

        // Sofa Seat Deck
        const deck = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.25, 0.92), fabricMat);
        deck.position.y = 0.245;
        deck.castShadow = true;
        itemGroup.add(deck);

        // 3 Plump Seat Cushions
        for (let i = 0; i < 3; i++) {
          const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.18, 0.75), fabricMat);
          cushion.position.set(-0.76 + i * 0.76, 0.44, 0.06);
          cushion.castShadow = true;
          itemGroup.add(cushion);
        }

        // Backrest
        const back = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.55, 0.22), fabricMat);
        back.position.set(0, 0.62, -0.36);
        back.castShadow = true;
        itemGroup.add(back);

        // Left Armrest
        const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.48, 0.95), fabricMat);
        leftArm.position.set(-1.18, 0.44, 0);
        leftArm.castShadow = true;
        itemGroup.add(leftArm);

        // Right Armrest
        const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.48, 0.95), fabricMat);
        rightArm.position.set(1.18, 0.44, 0);
        rightArm.castShadow = true;
        itemGroup.add(rightArm);
      } else if (item.type === "chair") {
        // Aurelia Lounge Chair 3D Mesh
        // Curved Shell / Backrest
        const backShell = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.55, 24, 1, true, 0, Math.PI), fabricMat);
        backShell.rotation.y = Math.PI;
        backShell.position.set(0, 0.58, 0);
        backShell.castShadow = true;
        itemGroup.add(backShell);

        // Circular Seat Cushion
        const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.18, 24), fabricMat);
        seat.position.set(0, 0.38, 0);
        seat.castShadow = true;
        itemGroup.add(seat);

        // 4 Splayed Timber Legs with Brass Ferrules
        const legPositions = [
          [-0.32, -0.32],
          [0.32, -0.32],
          [-0.32, 0.32],
          [0.32, 0.32],
        ];
        legPositions.forEach(([lx, lz]) => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.018, 0.32), woodMat);
          leg.position.set(lx, 0.16, lz);
          leg.rotation.z = lx > 0 ? -0.15 : 0.15;
          leg.rotation.x = lz > 0 ? 0.15 : -0.15;
          leg.castShadow = true;
          itemGroup.add(leg);

          const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.018, 0.06), brassMat);
          ferrule.position.set(lx * 1.05, 0.03, lz * 1.05);
          itemGroup.add(ferrule);
        });
      } else if (item.type === "table") {
        // Architectural Coffee Table 3D Mesh
        const top = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.05, 0.8), fabricMat);
        top.position.y = 0.42;
        top.castShadow = true;
        top.receiveShadow = true;
        itemGroup.add(top);

        // Solid Timber Pedestal Legs
        const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.7), woodMat);
        leg1.position.set(-0.5, 0.2, 0);
        leg1.castShadow = true;
        itemGroup.add(leg1);

        const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.7), woodMat);
        leg2.position.set(0.5, 0.2, 0);
        leg2.castShadow = true;
        itemGroup.add(leg2);
      } else if (item.type === "lamp") {
        // Atelier Arc Floor Lamp 3D Mesh
        // Base Weight
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.26, 0.05, 24), brassMat);
        base.position.y = 0.025;
        base.castShadow = true;
        itemGroup.add(base);

        // Curved Stem
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 2.1), brassMat);
        stem.position.set(0, 1.05, 0);
        stem.castShadow = true;
        itemGroup.add(stem);

        // Glowing Shade
        const shadeMat = new THREE.MeshStandardMaterial({
          color: "#FFF9E6",
          emissive: lightingMode === "night" ? "#FFC870" : "#FFF9E6",
          emissiveIntensity: lightingMode === "night" ? 0.9 : 0.2,
          roughness: 0.3,
        });
        const shade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.25, 20), shadeMat);
        shade.rotation.x = Math.PI;
        shade.position.set(0, 2.15, 0);
        itemGroup.add(shade);
      }

      group.add(itemGroup);
    });
  }, [items, selectedItemId, lightingMode]);

  // Adjust Lighting (Day vs Night)
  useEffect(() => {
    if (!sunLightRef.current || !spotLightRef.current || !sceneRef.current) return;
    if (lightingMode === "day") {
      sceneRef.current.background = new THREE.Color("#0E1117");
      sunLightRef.current.intensity = 1.8;
      sunLightRef.current.color = new THREE.Color("#FFF8E7");
      spotLightRef.current.intensity = 0.6;
    } else {
      sceneRef.current.background = new THREE.Color("#060709");
      sunLightRef.current.intensity = 0.15;
      sunLightRef.current.color = new THREE.Color("#6882A7");
      spotLightRef.current.intensity = 2.4;
      spotLightRef.current.color = new THREE.Color("#FFD99B");
    }
  }, [lightingMode]);

  // Pointer Orbit Drag Handling
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - prevPointerRef.current.x;
    const dy = e.clientY - prevPointerRef.current.y;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };

    if (navMode === "orbit") {
      sphericalRef.current.theta -= dx * 0.006;
      sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.05, sphericalRef.current.phi - dy * 0.006));
    } else {
      // Look around in walk mode
      walkPosRef.current.yaw -= dx * 0.005;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (navMode === "orbit") {
      sphericalRef.current.radius = Math.max(2.5, Math.min(11, sphericalRef.current.radius + e.deltaY * 0.004));
    }
  };

  // 3D Item Manipulations
  const updateSelectedItem = (updater: (prev: Furniture3DItem) => Furniture3DItem) => {
    if (!selectedItemId) return;
    setItems((prev) =>
      prev.map((i) => (i.id === selectedItemId ? updater(i) : i))
    );
  };

  const activeItem = items.find((i) => i.id === selectedItemId) || null;

  // 4K PNG Render Capture
  const handleCaptureRender = () => {
    if (!rendererRef.current) return;
    const dataUrl = rendererRef.current.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `Woods_Decor_3D_Studio_Render_${lightingMode}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#07080A] rounded-none border border-[#2E2C2A] overflow-hidden shadow-2xl select-none group">
      {/* 3D WebGL Canvas Mount Container */}
      <div
        ref={mountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Top HUD Toolbar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-[#121110]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-white font-sans text-xs shadow-xl pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#BFA16F] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4BC8B]">
            3D WebGL Studio // 360° {navMode === "orbit" ? "Orbit Camera" : "First-Person Walk"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Day / Night Mood Switcher */}
          <button
            onClick={() => setLightingMode((prev) => (prev === "day" ? "night" : "day"))}
            title="Toggle Daylight / Nocturnal Ambient Studio"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121110]/90 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-wider text-white hover:border-[#BFA16F] cursor-pointer transition-colors shadow-lg"
          >
            {lightingMode === "day" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[10px]">Daylight</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-[10px]">Nocturnal</span>
              </>
            )}
          </button>

          {/* Mode Switch: 360 Orbit vs Walkthrough */}
          <div className="flex items-center bg-[#121110]/90 backdrop-blur-md border border-white/10 p-0.5 text-xs font-mono">
            <button
              onClick={() => applyCameraPreset("vista")}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                navMode === "orbit" ? "bg-[#BFA16F] text-[#121110] font-bold" : "text-[#8C8780] hover:text-white"
              }`}
            >
              360° Orbit
            </button>
            <button
              onClick={() => applyCameraPreset("walk")}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                navMode === "walk" ? "bg-[#BFA16F] text-[#121110] font-bold" : "text-[#8C8780] hover:text-white"
              }`}
            >
              Walkover 3D
            </button>
          </div>

          {/* 4K Render Capture Button */}
          <button
            onClick={handleCaptureRender}
            title="Capture High-Resolution 3D Render"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#BFA16F] text-[#121110] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white cursor-pointer transition-colors shadow-lg"
          >
            <Camera className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Capture Render</span>
          </button>
        </div>
      </div>

      {/* Camera Presets Bar */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-auto">
        <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest text-[#8C8780] bg-[#121110]/80 px-2 py-1 border border-white/10">
          Angles:
        </span>
        <button
          onClick={() => applyCameraPreset("vista")}
          className="px-2.5 py-1 bg-[#121110]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D8CEBE] hover:text-white hover:border-[#BFA16F] cursor-pointer"
        >
          Vista
        </button>
        <button
          onClick={() => applyCameraPreset("sofa")}
          className="px-2.5 py-1 bg-[#121110]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D8CEBE] hover:text-white hover:border-[#BFA16F] cursor-pointer"
        >
          Lounge Detail
        </button>
        <button
          onClick={() => applyCameraPreset("top")}
          className="px-2.5 py-1 bg-[#121110]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D8CEBE] hover:text-white hover:border-[#BFA16F] cursor-pointer"
        >
          CAD Plan View
        </button>
      </div>

      {/* Walk Mode Virtual D-Pad (Mobile & Touch Friendly) */}
      {navMode === "walk" && (
        <div className="absolute bottom-4 right-4 bg-[#121110]/95 backdrop-blur-md border border-white/10 p-2 shadow-2xl flex flex-col items-center gap-1 pointer-events-auto">
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#D4BC8B] mb-0.5">
            Walk Controller
          </span>
          <button
            onClick={() => moveWalkCamera(0, -1)}
            className="p-2 border border-white/20 hover:border-[#BFA16F] text-white active:bg-[#BFA16F] active:text-[#121110] cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={() => moveWalkCamera(-1, 0, -0.1)}
              className="p-2 border border-white/20 hover:border-[#BFA16F] text-white active:bg-[#BFA16F] active:text-[#121110] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => moveWalkCamera(0, 1)}
              className="p-2 border border-white/20 hover:border-[#BFA16F] text-white active:bg-[#BFA16F] active:text-[#121110] cursor-pointer"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => moveWalkCamera(1, 0, 0.1)}
              className="p-2 border border-white/20 hover:border-[#BFA16F] text-white active:bg-[#BFA16F] active:text-[#121110] cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Selected Piece 3D Inspector Flyout */}
      {activeItem && navMode === "orbit" && (
        <div className="absolute top-16 right-4 w-64 sm:w-72 bg-[#121110]/95 backdrop-blur-xl border border-white/15 p-4 shadow-2xl space-y-4 pointer-events-auto">
          <div className="flex items-start justify-between border-b border-white/10 pb-2">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4BC8B]">
                Selected 3D Piece
              </span>
              <h4 className="font-serif text-base text-white font-normal mt-0.5">
                {activeItem.name}
              </h4>
            </div>
            <span className="font-mono text-[9px] text-amber-400 bg-amber-400/10 px-2 py-0.5 border border-amber-400/30">
              3D PBR
            </span>
          </div>

          {/* Spatial Floor Transforms */}
          <div className="space-y-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8C8780] block">
              Floor Positioning (X / Z)
            </span>
            <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, z: p.z - 0.3 }))}
                className="py-1 border border-white/10 text-white hover:border-[#BFA16F] bg-white/5 cursor-pointer"
              >
                Forward
              </button>
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, z: p.z + 0.3 }))}
                className="py-1 border border-white/10 text-white hover:border-[#BFA16F] bg-white/5 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, x: p.x - 0.3 }))}
                className="py-1 border border-white/10 text-white hover:border-[#BFA16F] bg-white/5 cursor-pointer"
              >
                Left
              </button>
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, x: p.x + 0.3 }))}
                className="py-1 border border-white/10 text-white hover:border-[#BFA16F] bg-white/5 cursor-pointer"
              >
                Right
              </button>
            </div>

            {/* Rotation Control */}
            <div className="flex items-center justify-between pt-1 text-xs font-mono">
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, rotationY: p.rotationY - Math.PI / 8 }))}
                className="inline-flex items-center gap-1 px-3 py-1 border border-white/10 text-white hover:border-[#BFA16F] cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>-22.5°</span>
              </button>
              <button
                onClick={() => updateSelectedItem((p) => ({ ...p, rotationY: p.rotationY + Math.PI / 8 }))}
                className="inline-flex items-center gap-1 px-3 py-1 border border-white/10 text-white hover:border-[#BFA16F] cursor-pointer"
              >
                <RotateCw className="w-3 h-3" />
                <span>+22.5°</span>
              </button>
            </div>
          </div>

          {/* 3D PBR Material Swatches */}
          <div className="space-y-2 border-t border-white/10 pt-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8C8780] block">
              3D Fabric Shader
            </span>
            <div className="flex items-center gap-2">
              {[
                { name: "Ivory Bouclé", color: "#F4F0E8" },
                { name: "Emerald Velvet", color: "#1F3B2E" },
                { name: "Cognac Leather", color: "#6A3B1E" },
                { name: "Noir Velvet", color: "#1E1E1E" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => updateSelectedItem((p) => ({ ...p, fabricColor: c.color }))}
                  title={c.name}
                  style={{ backgroundColor: c.color }}
                  className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                    activeItem.fabricColor === c.color ? "scale-110 border-[#BFA16F]" : "border-white/20"
                  }`}
                />
              ))}
            </div>

            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8C8780] block pt-1">
              Solid Hardwood Plinth
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
              {(["walnut", "teak", "oak"] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => updateSelectedItem((p) => ({ ...p, woodType: w }))}
                  className={`py-1 uppercase transition-colors cursor-pointer border ${
                    activeItem.woodType === w
                      ? "bg-[#BFA16F] text-[#121110] font-bold border-[#BFA16F]"
                      : "bg-white/5 text-white border-white/10 hover:border-white/40"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
