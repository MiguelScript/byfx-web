# Guía de Google Analytics 4 - BYFX

## 📊 Configuración de Google Analytics

Esta guía te ayudará a configurar y utilizar Google Analytics 4 (GA4) en tu sitio web de BYFX.

---

## ✅ Implementación Completada

### **Componentes Creados**

1. **GoogleAnalytics Component** (`src/components/analytics/GoogleAnalytics.tsx`)
   - Script de Google Analytics optimizado
   - Carga con estrategia `afterInteractive` para mejor performance
   - Se activa solo si existe `NEXT_PUBLIC_GA_MEASUREMENT_ID`

2. **Analytics Utilities** (`src/lib/analytics.ts`)
   - Funciones para tracking de eventos personalizados
   - Eventos específicos del negocio:
     - `trackServiceView()` - Vista de servicios
     - `trackWorkView()` - Vista de trabajos/portafolio
     - `trackContactFormSubmit()` - Envío de formulario de contacto
     - `trackWhatsAppClick()` - Click en botón de WhatsApp
     - `trackSocialClick()` - Click en redes sociales

3. **Integración en Layout** (`src/app/layout.tsx`)
   - Google Analytics integrado en el layout principal
   - Se carga en todas las páginas automáticamente

---

## 🚀 Configuración Paso a Paso

### **1. Crear Cuenta de Google Analytics**

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Haz clic en "Comenzar a medir"
3. Crea una cuenta con el nombre de tu empresa (ej: "BYFX")
4. Configura una propiedad:
   - **Nombre de la propiedad**: BYFX Website
   - **Zona horaria**: (GMT-04:00) Hora de Venezuela
   - **Moneda**: Bolívar venezolano (VES) o Dólar estadounidense (USD)

### **2. Crear un Flujo de Datos Web**

1. Selecciona "Web" como plataforma
2. Configura el flujo de datos:
   - **URL del sitio web**: `https://byfx.pro`
   - **Nombre del flujo**: BYFX Production
3. Haz clic en "Crear flujo"

### **3. Obtener el Measurement ID**

1. Después de crear el flujo, verás tu **ID de medición**
2. Tiene el formato: `G-XXXXXXXXXX`
3. Copia este ID

### **4. Configurar Variables de Entorno**

Crea o edita el archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SITE_URL=https://byfx.pro
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**⚠️ Importante**: Reemplaza `G-XXXXXXXXXX` con tu ID real de Google Analytics.

### **5. Reiniciar el Servidor de Desarrollo**

```bash
# Detener el servidor actual (Ctrl+C)
# Iniciar nuevamente
npm run dev
```

---

## 📈 Eventos Personalizados Disponibles

### **Uso en Componentes**

Importa las funciones de tracking donde las necesites:

```typescript
import { 
  trackServiceView, 
  trackWorkView, 
  trackContactFormSubmit,
  trackWhatsAppClick,
  trackSocialClick 
} from '@/lib/analytics';
```

### **Ejemplos de Implementación**

#### **1. Tracking de Vista de Servicio**

En la página de servicio individual:

```typescript
// src/app/(web)/services/[id]/page.tsx
import { trackServiceView } from '@/lib/analytics';

export default function ServicePage() {
  // En un useEffect o al cargar la página
  useEffect(() => {
    trackServiceView(serviceData.name);
  }, [serviceData.name]);
  
  // ... resto del componente
}
```

#### **2. Tracking de Click en WhatsApp**

En cualquier botón de WhatsApp:

```typescript
import { trackWhatsAppClick } from '@/lib/analytics';

<a 
  href={whatsappLink}
  onClick={() => trackWhatsAppClick()}
>
  Contactar por WhatsApp
</a>
```

#### **3. Tracking de Formulario de Contacto**

En el componente de formulario:

```typescript
import { trackContactFormSubmit } from '@/lib/analytics';

const handleSubmit = async (values) => {
  // ... lógica de envío
  
  trackContactFormSubmit();
  
  // ... resto de la lógica
};
```

#### **4. Tracking de Redes Sociales**

En los botones de redes sociales:

```typescript
import { trackSocialClick } from '@/lib/analytics';

<a 
  href={socialNetwork.url}
  onClick={() => trackSocialClick(socialNetwork.name)}
>
  {socialNetwork.name}
</a>
```

#### **5. Tracking de Vista de Trabajo/Portafolio**

En la página de trabajo individual:

```typescript
import { trackWorkView } from '@/lib/analytics';

useEffect(() => {
  trackWorkView(workData.titulo);
}, [workData.titulo]);
```

---

## 🎯 Eventos Personalizados Adicionales

Si necesitas trackear eventos adicionales, usa la función genérica `event()`:

```typescript
import { event } from '@/lib/analytics';

// Ejemplo: Tracking de reproducción de video
event({
  action: 'play_video',
  category: 'Video',
  label: 'Hero Section Video',
  value: 1
});

// Ejemplo: Tracking de descarga
event({
  action: 'download',
  category: 'Resources',
  label: 'Portfolio PDF',
});
```

---

## 📊 Configuración Recomendada en GA4

### **1. Conversiones Importantes**

En Google Analytics, marca estos eventos como conversiones:

1. `submit_form` - Envío de formulario de contacto
2. `click_whatsapp` - Click en WhatsApp (alta intención de contacto)
3. `view_service` - Vista de servicios (interés en servicios)

**Cómo marcar conversiones:**
1. Ve a **Admin** → **Eventos**
2. Encuentra el evento
3. Activa el switch "Marcar como conversión"

### **2. Audiencias Recomendadas**

Crea audiencias personalizadas:

1. **Usuarios Interesados en Servicios**
   - Condición: `view_service` en los últimos 7 días
   
2. **Usuarios con Alta Intención**
   - Condición: `click_whatsapp` OR `submit_form`
   
3. **Visitantes de Barquisimeto**
   - Condición: Ciudad = Barquisimeto

### **3. Informes Personalizados**

Crea informes para:
- Servicios más vistos
- Trabajos más populares del portafolio
- Tasa de conversión por fuente de tráfico
- Rendimiento por ubicación geográfica

---

## 🔍 Verificación de Instalación

### **Método 1: Google Analytics Real-Time**

1. Ve a tu propiedad en Google Analytics
2. Haz clic en **Informes** → **Tiempo real**
3. Abre tu sitio web en otra pestaña
4. Deberías ver tu visita en tiempo real

### **Método 2: Google Tag Assistant**

1. Instala [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visita tu sitio web
3. Haz clic en el icono de Tag Assistant
4. Verifica que Google Analytics aparezca en verde

### **Método 3: Consola del Navegador**

1. Abre tu sitio web
2. Abre DevTools (F12)
3. Ve a la pestaña **Console**
4. Escribe: `window.gtag`
5. Debería mostrar una función (no `undefined`)

---

## 🎨 Eventos Específicos para BYFX

### **Eventos de Video**

```typescript
// Cuando un usuario reproduce un video
event({
  action: 'play',
  category: 'Video',
  label: videoTitle,
});

// Cuando completa un video
event({
  action: 'complete',
  category: 'Video',
  label: videoTitle,
});
```

### **Eventos de Cotización**

```typescript
// Cuando abre el modal de cotización
event({
  action: 'open_quote_modal',
  category: 'Quote',
});

// Cuando selecciona un servicio para cotizar
event({
  action: 'select_service',
  category: 'Quote',
  label: serviceName,
});
```

### **Eventos de Navegación**

```typescript
// Cuando navega a una sección específica
event({
  action: 'navigate',
  category: 'Navigation',
  label: sectionName,
});
```

---

## 📱 Tracking de Conversiones Móviles

Google Analytics automáticamente detecta:
- Dispositivo (móvil, tablet, desktop)
- Sistema operativo
- Navegador
- Ubicación geográfica

Puedes crear informes específicos para:
- Conversiones en móvil vs desktop
- Servicios más vistos en móvil
- Comportamiento por dispositivo

---

## 🔒 Privacidad y GDPR

### **Configuración de Privacidad**

Google Analytics ya está configurado para:
- ✅ Anonimización de IP (por defecto en GA4)
- ✅ Respeto de señales "Do Not Track"
- ✅ Sin cookies de terceros

### **Política de Privacidad**

Considera agregar una página de política de privacidad que mencione:
- Uso de Google Analytics
- Datos recopilados
- Propósito del tracking
- Derechos del usuario

---

## 🚨 Solución de Problemas

### **No veo datos en Google Analytics**

1. ✅ Verifica que `NEXT_PUBLIC_GA_MEASUREMENT_ID` esté configurado
2. ✅ Reinicia el servidor de desarrollo
3. ✅ Verifica en la consola del navegador que no haya errores
4. ✅ Espera 24-48 horas para datos históricos (tiempo real es inmediato)

### **Los eventos personalizados no aparecen**

1. ✅ Verifica que estés llamando las funciones correctamente
2. ✅ Revisa la consola del navegador por errores
3. ✅ Los eventos nuevos pueden tardar hasta 24 horas en aparecer en informes

### **El Measurement ID no funciona**

1. ✅ Verifica que el formato sea correcto: `G-XXXXXXXXXX`
2. ✅ Asegúrate de usar `NEXT_PUBLIC_` como prefijo
3. ✅ Verifica que el archivo `.env.local` esté en la raíz del proyecto

---

## 📊 Métricas Clave a Monitorear

### **Tráfico**
- Usuarios totales
- Nuevos usuarios vs recurrentes
- Sesiones por fuente de tráfico
- Tasa de rebote

### **Engagement**
- Tiempo promedio en página
- Páginas por sesión
- Servicios más vistos
- Trabajos más populares

### **Conversiones**
- Tasa de conversión de formulario
- Clicks en WhatsApp
- Interacciones con redes sociales
- Solicitudes de cotización

### **Ubicación**
- Usuarios de Barquisimeto
- Usuarios de Venezuela
- Distribución geográfica

---

## 🎯 Objetivos Recomendados

### **Corto Plazo (1-3 meses)**
- [ ] Alcanzar 1,000 usuarios mensuales
- [ ] Tasa de conversión > 2%
- [ ] 50+ vistas de servicios por semana

### **Mediano Plazo (3-6 meses)**
- [ ] 5,000 usuarios mensuales
- [ ] Tasa de conversión > 3%
- [ ] 30% del tráfico de búsqueda orgánica

### **Largo Plazo (6-12 meses)**
- [ ] 10,000+ usuarios mensuales
- [ ] Tasa de conversión > 5%
- [ ] 50% del tráfico de búsqueda orgánica

---

## 📚 Recursos Adicionales

- [Documentación oficial de GA4](https://support.google.com/analytics/answer/10089681)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Guía de eventos de GA4](https://support.google.com/analytics/answer/9322688)

---

## 🔄 Mantenimiento

### **Revisión Mensual**
- Revisar métricas clave
- Analizar servicios más populares
- Identificar páginas con alta tasa de rebote
- Optimizar conversiones

### **Revisión Trimestral**
- Evaluar cumplimiento de objetivos
- Ajustar estrategia de contenido
- Actualizar eventos personalizados
- Crear nuevos informes personalizados

---

**Última actualización:** Marzo 2026
