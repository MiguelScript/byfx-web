"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
  SheetPortal,
} from "@/components/ui/sheet";
import { ContactForm } from "@/components/forms/ContactForm";
import { useState } from "react";

interface ContactDrawerProps {
  children: React.ReactNode;
  countries: string;
}

export const ContactDrawer = ({ children, countries }: ContactDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetPortal>
        <SheetOverlay className="fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" style={{ backgroundColor: '#00000080' }} />
        <SheetContent
          side="right"
          className="w-full sm:max-w-md p-0 bg-[#000000] border-l border-gray-800"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Contacto</SheetTitle>
          </SheetHeader>
          <ContactForm countries={countries} />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
