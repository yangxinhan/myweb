"use client";
import Image from "next/image";

export function TechBackground() {
  const basePath = process.env.NODE_ENV === 'production' ? '/myweb' : '';

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <Image
        src={`${basePath}/background.png`}
        alt="Background"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
