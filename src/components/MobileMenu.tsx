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

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link to="/" className="logo">
              <span className="logo-text pb-5">Yale Club Badminton Menu</span>
            </Link>
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
            >
              {item}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
