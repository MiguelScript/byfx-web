"use client";

import { ProyectCarousel } from "@/components/carousel/ProyectCarousel";
import { proyect } from "@/types/service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: proyect[];
  serviceName: string;
}

export const ProjectModal = ({ isOpen, onClose, projects, serviceName }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-[#1A1A1A] border-gray-800">
        <DialogHeader className="p-6 border-b border-gray-800">
          <DialogTitle className="text-2xl font-bold text-white font-mono uppercase tracking-wider">
            {serviceName}
          </DialogTitle>
        </DialogHeader>
        
        {/* Carousel Container */}
        <div className="flex-1 flex items-center justify-center p-4">
          {projects && projects.length > 0 ? (
            <ProyectCarousel proyects={projects} />
          ) : (
            <div className="text-white text-center">
              <p className="text-lg">No hay proyectos disponibles para este servicio</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
