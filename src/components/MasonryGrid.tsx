import { useState, useEffect } from "react";
import { LazyImage } from "./LazyImage";

interface ImageData {
  path: string;
  title?: string;
}

interface MasonryGridProps {
  title: string;
  date?: string;
  images: ImageData[];
}

export function MasonryGrid({ title, date, images }: MasonryGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openImage = (image: ImageData) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  // Keyboard navigation for modal
  // Only active when modal is open
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        const currentIndex = images.findIndex(
          (img) => img.path === selectedImage.path
        );
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = images.findIndex(
          (img) => img.path === selectedImage.path
        );
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
      } else if (e.key === "Escape") {
        closeImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, images]);

  return (
    <>
      <div className="masonry-grid-container">
        <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
        {date && <p className="text-center text-gray-500">{date}</p>}
        <div className="columns-1 sm:columns-2 lg:columns-3 py-8 md:py-8 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer"
              onClick={() => openImage(image)}
            >
              <LazyImage
                src={image.path}
                alt={image.title || `Image ${index + 1}`}
              />
              {/* {image.title && (
                <p className="mt-2 text-center text-gray-700">{image.title}</p>
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full-Screen View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeImage} // Close modal when clicking outside the image
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white text-4xl font-bold z-10"
          >
            &times;
          </button>

          {/* Left Arrow */}
          {/* add keyboard functionality (ex. clicking left and right arrows to prompt previous or next image) */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing modal when clicking the arrow
              const currentIndex = images.findIndex(
                (img) => img.path === selectedImage.path
              );
              const prevIndex =
                (currentIndex - 1 + images.length) % images.length; // Loop to the last image if at the first
              setSelectedImage(images[prevIndex]);
            }}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10"
          >
            &#8249;
          </button>

          {/* Image */}
          <div className="relative max-w-full max-h-screen mx-8">
            <img
              src={selectedImage.path}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking on the image
            />
            {/* figure out captions later */}
            {/* {selectedImage.title && (
              <p className="mt-2 text-white">{selectedImage.title}</p>
            )} */}
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing modal when clicking the arrow
              const currentIndex = images.findIndex(
                (img) => img.path === selectedImage.path
              );
              const nextIndex = (currentIndex + 1) % images.length; // Loop to the first image if at the last
              setSelectedImage(images[nextIndex]);
            }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
