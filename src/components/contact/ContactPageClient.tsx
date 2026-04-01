"use client";

import { useEffect, useState } from "react";
import { ContactDrawer } from "@/components/drawers/ContactDrawer";
import { useRouter } from "next/navigation";

interface ContactPageClientProps {
  countries: string;
}

export function ContactPageClient({ countries }: ContactPageClientProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Open drawer on mount
    setOpen(true);
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    // Redirect to home when drawer closes
    if (!isOpen) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen">
      <ContactDrawer 
        countries={countries} 
        open={open} 
        onOpenChange={handleOpenChange}
      >
        <button className="hidden" />
      </ContactDrawer>
    </div>
  );
}
