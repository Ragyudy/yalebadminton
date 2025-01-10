import { Instagram, Facebook, TwitterX, Youtube } from "react-bootstrap-icons";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 px-4 border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-5">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-2">
          <img
            src="/favicon-light.svg"
            alt="Yale Badminton Club"
            className="h-8"
          />
          <span className="text-sm text-gray-500">
            &copy; 2025 Yale Club Badminton – All rights reserved.
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/yalebadminton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/yalebadmintonclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com/yalebc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterX size={24} />
          </a>
          <a
            href="https://www.youtube.com/user/yalebadmintonclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
