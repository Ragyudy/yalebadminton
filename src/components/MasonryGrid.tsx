import { LazyImage } from "./LazyImage";

interface ImageDetails {
  path: string; // path to the image
  title?: string; // optional title for the image
}

interface MasonryGridProps {
  title: string; // title for the page (ex. Fall 2024 Tournament)
  date?: string; // event dates
  images: ImageDetails[]; // array of image details
}

export function MasonryGrid({ title, date, images }: MasonryGridProps) {
  return (
    <>
      <div className="masonry-grid-container">
        <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
        {date && <p className="text-center text-gray-500">{date}</p>}
        <div className="columns-1 sm:columns-2 lg:columns-3 py-8 md:py-8 gap-4">
          {images.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <LazyImage
                key={index}
                src={image.path}
                alt={image.title || `Image ${index + 1}`}
              />
              {image.title && (
                <p className="mt-2 text-center text-gray-700">{image.title}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
