import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const respberry_ip = "192.168.84.25";
export const respberry_port = "8000";
export const respberry_url = `http://${respberry_ip}:${respberry_port}`;
