import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceRequest(name: string) {
  const message = encodeURIComponent(`Hello Woods Decor, I would like to inquire about pricing, custom dimensions, and lead times for the ${name}.`);
  return `https://wa.me/919815420668?text=${message}`;
}

export function formatBespokeEnquiry(details?: string) {
  const message = encodeURIComponent(`Hello Woods Decor, I would like to discuss a custom bespoke furniture commission. ${details || ''}`);
  return `https://wa.me/919815420668?text=${message}`;
}
