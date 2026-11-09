import Image from "next/image";
import type { JobPhoto } from "@/lib/jobs";

export default function FrameImage({
  photo,
  sizes,
  preload = false,
  className = "h-auto w-full",
  fit = "natural",
}: {
  photo: Pick<JobPhoto, "src" | "w" | "h" | "alt">;
  sizes: string;
  preload?: boolean;
  className?: string;
  fit?: "natural" | "cover" | "fill";
}) {
  const small = photo.w <= 1200;
  const image = (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      sizes={small && fit === "natural" ? `${photo.w}px` : sizes}
      unoptimized={small}
      preload={preload}
      className={
        fit === "natural"
          ? className
          : `absolute inset-0 h-full w-full object-cover ${className.includes("object-") ? className : ""}`
      }
    />
  );

  if (fit === "cover") {
    return <span className={`relative block aspect-[4/3] overflow-hidden bg-papier ${className}`}>{image}</span>;
  }

  if (fit === "fill") {
    return image;
  }

  return image;
}
