import { MediaLinks } from "./MediaLinks";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-2 px-4 border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-5">
        <div className="flex items-center gap-2">
          <img
            src="/favicon-light.svg"
            alt="Yale Badminton Club"
            className="h-8"
          />
          <span className="sm:text-sm text-xs text-gray-500">
            &copy; 2025 Yale Club Badminton – All rights reserved.
          </span>
        </div>
        <MediaLinks />
      </div>
    </footer>
  );
}
