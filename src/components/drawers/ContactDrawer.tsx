"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 bg-[#000000] border-l border-gray-800"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Contacto</SheetTitle>
        </SheetHeader>
        <ContactForm countries={countries} />
      </SheetContent>
    </Sheet>
  );
};
