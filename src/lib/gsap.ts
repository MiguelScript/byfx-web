import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Función para registrar plugins solo cuando se necesiten
const initGSAP = (() => {
  let initialized = false
  return () => {
    if (!initialized) {
      gsap.registerPlugin(ScrollTrigger, useGSAP)
      initialized = true
    }
  }
})()

// Auto-inicializar al importar
initGSAP()

// Exportar para uso en componentes
export { gsap, ScrollTrigger, useGSAP, initGSAP }
