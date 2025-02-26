import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

export function MediaLinks() {
  return (
    <div className="flex gap-6 mt-4 md:mt-0">
      <a
        href="https://www.instagram.com/yalebadminton/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="https://www.facebook.com/yalebadmintonclub/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="https://twitter.com/yalebc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterX className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="https://www.youtube.com/user/yalebadmintonclub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
