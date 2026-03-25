"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import "@/styles/components/accordion.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "¿Dónde está ubicada BYFX?",
    answer:
      "BYFX está ubicada en Barquisimeto, Venezuela, una de las principales ciudades del país y capital del estado Lara. Aunque hemos realizado producciones audiovisuales en diferentes ciudades, trabajando con marcas y empresas según las necesidades de cada proyecto. Esto nos permite movilizar nuestro equipo y producir tanto a nivel local como en otras regiones del país.",
  },
  {
    question: "¿Cuáles son los servicios que ofrecemos?",
    answer:
      "Sí. A través de nuestro servicio de Partner Production, BYFX funciona como el equipo audiovisual externo para agencias, freelancers y equipos de marketing que necesitan producción profesional sin crear un departamento interno. Nos integramos a tu flujo de trabajo y producimos bajo tus lineamientos y tu marca, mientras tú mantienes la relación con el cliente y la gestión del proyecto.",
  },
  {
    question: "¿Cuánto cuesta un video?",
    answer:
      "Cada proyecto es diferente, por lo que nuestros presupuestos se elaboran de forma personalizada según las necesidades de producción, el tipo de video, la complejidad del rodaje y los objetivos del proyecto. Nuestro enfoque es proponer la mejor solución audiovisual para cada marca o empresa, optimizando recursos sin comprometer la calidad. Si tienes una idea o proyecto en mente, contáctanos y con gusto evaluamos tu caso para prepararte una propuesta adecuada.",
  },
  {
    question: "¿En cuanto tiempo entregan el material final?",
    answer:
      "El tiempo de entrega depende del tipo de proyecto y de la complejidad de la producción. Antes de iniciar cualquier trabajo, definimos claramente los tiempos de entrega dentro del cronograma del proyecto. Para nosotros la puntualidad es fundamental, por lo que nos comprometemos a cumplir los plazos establecidos con cada cliente.",
  },
  {
    question: "¿Necesito experiencia para tomar las clases de edición?",
    answer:
      "No. Las clases están diseñadas especialmente para personas que no tienen experiencia previa en edición ni trabajando con programas en computadora. Empezamos desde lo básico y avanzamos paso a paso, para que cualquier persona pueda aprender a editar video con un enfoque práctico y aplicable.",
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const accordionContainer = accordionContainerRef.current;

      if (!section || !title || !accordionContainer) return;

      // Set initial states
      gsap.set(title, {
        opacity: 0,
        y: 30,
      });

      gsap.set(accordionContainer.children, {
        opacity: 0,
        y: 20,
      });

      // Create optimized timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          accordionContainer.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full lg:pb-32 pb-16 lg:px-0 relative app-container-desktop mx-auto"
    >
      <div className="flex justify-center">
        <div className="w-[60%] h-[3px] bg-gradient-to-r from-[#191919] via-[#D9D9D9] to-[#191919]"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:w-[400px] w-[220px] lg:h-[270px] h-[100px] bg-[#D9D9D9] bg-opacity-50 blur-[180px]"></div>
      <div className="app-section mx-auto mt-16">
        <div className="max-w-[630px] mx-auto mb-4 lg:mb-0">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-[40px] font-medium text-center  mb-2 font-mono uppercase"
          >
            preguntas frecuentes
          </h2>
          <p className="text-[#FFFFFFB2] text-center text-sm lg:text-base px-6 lg:px-0">
            ¿No ves tu duda aquí? Escríbenos por WhatsApp: serás atendido
            personalmente, podrás pedir cotizaciones sin compromiso y aclarar
            cualquier duda al instante.
          </p>
        </div>

        <div ref={accordionContainerRef}>
          <Accordion type="single" collapsible className="w-full mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#FFFFFF1A] lg:pt-3 lg:pb-2 pr-4"
                trigger={
                  <AccordionTrigger className="text-[#FFFFFFB2] text-base font-normal lg:py-2 px-6 lg:px-0">
                    {item.question}
                  </AccordionTrigger>
                }
              >
                <AccordionContent className="text-[#FFFFFFB2] text-base">
                  <div className="pt-1 pb-4">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
