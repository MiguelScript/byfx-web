# Guía de Optimización SEO - BYFX

## 📍 Estrategia SEO Local: Barquisimeto, Venezuela

Este documento describe las optimizaciones SEO implementadas para mejorar el posicionamiento de BYFX en búsquedas locales de Barquisimeto y Venezuela.

---

## ✅ Implementaciones Completadas

### 1. **Metadata Optimizada**

#### Layout Principal (`src/app/layout.tsx`)
- ✅ Título optimizado con ubicación: "BYFX - Producción de Video Profesional en Barquisimeto, Venezuela"
- ✅ Descripción rica en keywords locales
- ✅ Keywords enfocadas en servicios + ubicación
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards configuradas
- ✅ Idioma cambiado a español (`lang="es"`)
- ✅ Configuración de robots para indexación óptima

#### Páginas Individuales
- ✅ **Página Principal** (`/`): Metadata con enfoque en servicios y ubicación
- ✅ **About Us** (`/about-us`): Metadata del equipo y ubicación
- ✅ **Servicios Dinámicos** (`/services/[id]`): Metadata generada dinámicamente por servicio

### 2. **Schema.org Structured Data**

#### LocalBusiness Schema (`src/components/seo/LocalBusinessSchema.tsx`)
```typescript
- Tipo: LocalBusiness
- Ubicación: Barquisimeto, Lara, Venezuela
- Coordenadas geográficas incluidas
- Catálogo de servicios dinámico
- Información de contacto
- Horarios de atención
- Redes sociales
```

#### Service Schema (Páginas de Servicios)
- Schema específico para cada servicio
- Vinculado con LocalBusiness
- Área de servicio: Barquisimeto

#### Breadcrumb Schema
- Navegación estructurada para Google
- Implementado en páginas de servicios

### 3. **SEO Técnico**

#### Robots.txt (`src/app/robots.ts`)
```typescript
- Permite indexación de páginas públicas
- Bloquea /admin/ y /api/
- Referencia al sitemap
```

#### Sitemap Dinámico (`src/app/sitemap.ts`)
```typescript
- Generado automáticamente desde Sanity
- Incluye todas las páginas principales
- Incluye todos los servicios dinámicamente
- Incluye todos los trabajos/portafolio
- Prioridades y frecuencias de cambio optimizadas
```

---

## 🎯 Keywords Principales Implementadas

### Keywords de Alta Prioridad
1. **producción de video Barquisimeto**
2. **video profesional Venezuela**
3. **drones Barquisimeto**
4. **fotografía aérea Venezuela**
5. **edición de video Barquisimeto**
6. **contenido audiovisual Barquisimeto**
7. **producción audiovisual Venezuela**

### Keywords de Servicios Específicos
- video corporativo Barquisimeto
- video eventos Venezuela
- post-producción Venezuela
- videografía profesional
- servicios multimedia Barquisimeto

---

## 🔧 Configuración Requerida

### Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# URL del sitio (REQUERIDO para SEO)
NEXT_PUBLIC_SITE_URL=https://byfx.pro

# APIs de Google (opcional)
GOOGLE_PLACES_API_KEY=tu_api_key
GOOGLE_PLACE_ID=tu_place_id
```

### Actualizar LocalBusinessSchema

Edita `src/components/seo/LocalBusinessSchema.tsx` con información real:

```typescript
// Línea 23-24: Actualizar contacto
"telephone": "+58-424-XXXXXXX",  // ← Número real
"email": "contacto@byfx.com",     // ← Email real

// Línea 27: Actualizar dirección
"streetAddress": "Tu dirección completa",  // ← Dirección real

// Línea 37-38: Actualizar coordenadas exactas
"latitude": "10.0647",   // ← Coordenadas exactas de tu oficina
"longitude": "-69.3301",

// Línea 60-64: Actualizar redes sociales
"sameAs": [
  "https://www.instagram.com/tu_usuario",
  "https://www.facebook.com/tu_pagina",
  "https://www.youtube.com/@tu_canal"
]
```

---

## 📊 Próximos Pasos Recomendados

### 1. **Imágenes para SEO**
Crear y agregar en la carpeta `public/`:
- [ ] `og-image.jpg` (1200x630px) - Para Open Graph
- [ ] `twitter-image.jpg` (1200x600px) - Para Twitter Cards
- [ ] `logo.png` (600x60px) - Logo de la empresa

### 2. **Google Business Profile**
- [ ] Crear/optimizar perfil de Google Business
- [ ] Usar las mismas coordenadas del schema
- [ ] Agregar fotos de trabajos realizados
- [ ] Solicitar reseñas de clientes

### 3. **Contenido Adicional**
- [ ] Crear página de blog para contenido local
- [ ] Artículos sobre "Producción de video en Barquisimeto"
- [ ] Casos de estudio de clientes locales
- [ ] Guías y tutoriales relacionados

### 4. **Optimización de Imágenes**
- [ ] Agregar alt text descriptivo a todas las imágenes
- [ ] Incluir ubicación en alt text cuando sea relevante
- [ ] Ejemplo: "Video corporativo producido en Barquisimeto por BYFX"

### 5. **Enlaces Locales**
- [ ] Conseguir backlinks de directorios venezolanos
- [ ] Colaboraciones con empresas de Barquisimeto
- [ ] Menciones en medios locales

### 6. **Performance**
- [ ] Implementar lazy loading de imágenes
- [ ] Optimizar Core Web Vitals
- [ ] Configurar caché de Next.js

### 7. **Analytics y Monitoreo**
- [x] Configurar Google Analytics 4 ✅ (Ver `GOOGLE-ANALYTICS-GUIDE.md`)
- [ ] Obtener Measurement ID de Google Analytics
- [ ] Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` en `.env.local`
- [ ] Configurar Google Search Console
- [ ] Verificar propiedad del sitio
- [ ] Enviar sitemap manualmente
- [ ] Monitorear keywords locales

---

## 🔍 Verificación SEO

### Herramientas para Verificar

1. **Google Search Console**
   - Verificar indexación
   - Revisar errores de rastreo
   - Monitorear posiciones

2. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Verificar que los schemas se detecten correctamente

3. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Optimizar Core Web Vitals

4. **Lighthouse (Chrome DevTools)**
   - Ejecutar auditoría SEO
   - Objetivo: Score > 90

### Comandos de Verificación Local

```bash
# Verificar build sin errores
npm run build

# Iniciar en producción
npm run start

# Verificar sitemap
# Visitar: http://localhost:3000/sitemap.xml

# Verificar robots.txt
# Visitar: http://localhost:3000/robots.txt
```

---

## 📈 Métricas de Éxito

### KPIs a Monitorear

1. **Posicionamiento**
   - "producción de video Barquisimeto" - Top 3
   - "drones Barquisimeto" - Top 5
   - "video profesional Venezuela" - Top 10

2. **Tráfico Orgánico**
   - Incremento mensual del tráfico local
   - Tasa de conversión de búsquedas locales

3. **Engagement**
   - Tiempo en página
   - Tasa de rebote
   - Páginas por sesión

---

## 🌐 Estructura de URLs Optimizada

```
https://byfx.pro/                          (Página principal)
https://byfx.pro/about-us                  (Acerca de)
https://byfx.pro/services/[servicio-id]    (Servicios dinámicos)
https://byfx.pro/works                     (Portafolio)
https://byfx.pro/works/[trabajo-id]        (Trabajo individual)
https://byfx.pro/contact                   (Contacto)
```

Todas las URLs incluyen:
- ✅ Canonical tags
- ✅ Open Graph tags
- ✅ Schema.org markup
- ✅ Metadata optimizada

---

## 📝 Notas Importantes

### Ubicación en Todo el Sitio
La ubicación "Barquisimeto, Venezuela" está integrada en:
- Títulos de página
- Meta descriptions
- Schema.org LocalBusiness
- Keywords
- Breadcrumbs
- URLs canónicas

### Servicios Destacados
Los servicios se obtienen dinámicamente de Sanity y se integran en:
- Schema.org Service markup
- Metadata de páginas
- Sitemap automático
- Catálogo de ofertas en LocalBusiness

---

## 🆘 Soporte y Mantenimiento

### Actualizar Servicios
Los servicios se actualizan automáticamente desde Sanity CMS. No requiere cambios en el código.

### Agregar Nuevas Páginas
1. Crear página en `src/app/(web)/nueva-pagina/page.tsx`
2. Agregar metadata con ubicación
3. Actualizar `sitemap.ts` si es necesario
4. Agregar breadcrumb schema si aplica

### Problemas Comunes

**Sitemap no se genera:**
- Verificar que `NEXT_PUBLIC_SITE_URL` esté configurado
- Verificar conexión con Sanity

**Schema no aparece en Google:**
- Usar Rich Results Test
- Verificar sintaxis JSON-LD
- Esperar 1-2 semanas para indexación

---

## 📞 Contacto

Para dudas sobre la implementación SEO, revisar:
- Este documento
- Código en `src/components/seo/`
- Metadata en cada página

**Última actualización:** Marzo 2026
