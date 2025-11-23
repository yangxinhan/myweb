"use client";
import Image from "next/image";

export function TechBackground() {

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
