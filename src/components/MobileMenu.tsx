import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false); // Track if the menu is open

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="logo">
              <span className="logo-text pb-5">Yale Club Badminton Menu</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Links */}
        <nav className="menu-links flex flex-col mt-4 gap-4">
          {["Home", "Team", "Gallery", "FAQ"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-left text-lg pt-3 text-gray-800 hover:text-blue-600 ${
                idx < 3 ? "border-b border-gray-200" : ""
              }`}
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
