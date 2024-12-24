import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> HI </SheetTitle>
          <SheetDescription>This is my first sheet everrr</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
