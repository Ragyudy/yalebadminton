import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
}

export function LazyImage({ src, alt }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        loading="lazy"
        alt={alt}
        className={`w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
}
