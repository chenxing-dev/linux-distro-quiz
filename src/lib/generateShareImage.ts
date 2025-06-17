import { toPng } from "html-to-image";
import { type RefObject } from "react";

export const generateShareImage = async (elementRef: RefObject<HTMLElement>): Promise<string> => {
  if (!elementRef.current) return "";

  try {
    const dataUrl = await toPng(elementRef.current, {
      quality: 0.95,
      backgroundColor: "#18181b",
      canvasWidth: 1200,
      canvasHeight: 630,
      pixelRatio: 2
    });

    return dataUrl;
  } catch (error) {
    console.error("Error generating share image:", error);
    return "";
  }
};
