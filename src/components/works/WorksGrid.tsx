"use client";

import { useState } from "react";
import trabajo from "@/types/trabajo";
import Image from "next/image";
// import { RecursosModal } from "../modals/RecursosModal";
import { RecursosDrawer } from "../modals/RecursosDrawer";

interface WorksGridProps {
  trabajos: trabajo[];
}

export function WorksGrid({ trabajos }: WorksGridProps) {
  const [selectedTrabajo, setSelectedTrabajo] = useState<trabajo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrabajoClick = (trabajo: trabajo) => {
    if (trabajo.recursos && trabajo.recursos.length > 0) {
      setSelectedTrabajo(trabajo);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrabajo(null);
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((trabajo) => (
            <div
              key={trabajo._id}
              className={`group ${trabajo.recursos && trabajo.recursos.length > 0 ? "cursor-pointer" : ""}`}
              onClick={() => handleTrabajoClick(trabajo)}
            >
              <div className="relative overflow-hidden bg-[#1A1A1A] transition-all duration-300 aspect-[4/3] 2xl:h-[360px] 2xl:aspect-auto">
                {trabajo.imagen && (
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:grayscale"
                  />
                )}
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />

                {/* Info overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trabajo.servicio && (
                    <p className=" font-mono text-2xl xl:text-3xl font-normal uppercase tracking-wide text-white">
                      {trabajo.servicio.name}
                    </p>
                  )}
                  <div className="flex text-[#FFFFFF99] text-lg tracking-tight">
                    {trabajo.cliente && <p className="">{trabajo.cliente} -</p>}
                    <h3 className="">{trabajo.titulo}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recursos Modal */}
      <RecursosDrawer
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        recursos={selectedTrabajo?.recursos || []}
        titulo={selectedTrabajo?.titulo || ""}
        cliente={selectedTrabajo?.cliente || ""}
      />
    </>
  );
}
