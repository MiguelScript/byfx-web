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
    answer: "answer1",
  },
  {
    question: "¿Cuáles son los servicios que ofrecemos?",
    answer: "answer2",
  },
  {
    question: "¿Cuánto cuesta un video?",
    answer: "answer3",
  },
  {
    question: "¿En cuanto tiempo entregan el material final?",
    answer: "answer4",
  },
  {
    question: "¿Necesito experiencia para tomar las clases de edición?",
    answer: "answer5",
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
