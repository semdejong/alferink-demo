import Image from "next/image";
import type { JobPhoto } from "@/lib/jobs";

export default function FrameImage({
  photo,
  sizes,
  preload = false,
  className = "h-auto w-full",
}: {
  photo: Pick<JobPhoto, "src" | "w" | "h" | "alt">;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  const small = photo.w <= 1200;
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      sizes={small ? `${photo.w}px` : sizes}
      unoptimized={small}
      preload={preload}
      className={className}
    />
  );
}
