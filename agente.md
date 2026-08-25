# Skin Scam — Contexto del Agente

## Identidad
- **Proyecto:** Prototipo UI/UX de app de análisis de skincare
- **Cliente:** Estudiante de diseño gráfico
- **Estado:** Prototipo navegable completo (solo diseño, sin backend)
- **Origen:** Conversación [c2bcf3f3](conversation://c2bcf3f3-ed77-42e9-81e1-e200ef867db7)
- **Deploy:** GitHub Pages

## Stack
- **HTML** — estructura de 11 pantallas en un solo archivo
- **CSS** — Vanilla CSS (diseño único, no genérico), Google Fonts
- **JS** — Navegación entre pantallas, toggles, animaciones, tabs
- **Iconos:** Bootstrap Icons (CDN)
- **Fonts:** Poppins (display) + DM Sans (body) via Google Fonts
- **Sin framework CSS** — decidido por context-aware-design (dominio beauty)

## Pantallas (11)
1. **Onboarding** — Logo, tagline, botón "Comenzar" → lleva al Quiz
2. **Skin Quiz** — Diagnóstico de piel tipo cuestionario (5 opciones, barra de progreso)
3. **Home** — Perfil de piel, Quick Scan CTA, rutina del día, trending + campana de notificaciones
4. **Scanner** — Cámara simulada, viewfinder, semáforo de ingredientes, Match %
5. **Search/Explorar** — Barra de búsqueda, 6 categorías, grid de productos populares, escaneados recientes
6. **Product Detail** — Análisis de producto con 3 tabs (Ingredientes/Reseñas/Similares), match circle, bottom CTA
7. **Community** — Skin Twins, filtros por tipo de piel, cards con Match Badge
8. **Routine** — AM/PM toggle, pasos arrastrables, tips de compatibilidad
9. **Profile** — Avatar, stats, menú de opciones
10. **Notifications** — Centro de alertas con tabs (Todas/Rutina/Comunidad/Alertas), 6 tipos de notificación
11. **Write Review** — Stars interactivas, chips de impacto en piel, tiempo de uso, textarea, fotos, ¿recomprar?

## Diseño
- **Paleta:** Rosa pastel (#FADADD, #F5C6C6, #E8909A) — suaviza "Scam"
- **Semáforo:** Verde (#059669) / Ámbar (#D97706) / Rojo (#DC2626)
- **Tipografía:** Poppins 700 (títulos) + DM Sans 400 (cuerpo)
- **Border radius:** 8-16px según componente
- **Estética:** K-beauty / Aesop — delicada, mucho whitespace
- **Phone frame:** 390x844px con sombra y borde oscuro (simula iPhone)

## Interacciones implementadas
- Navegación entre pantallas (JS show/hide con fade)
- Bottom nav con botón central flotante (5 tabs: Inicio, Explorar, Cámara, Comunidad, Perfil)
- Filter chips toggleables (Community, Write Review)
- AM/PM toggle (Routine)
- Like toggle en reseñas (corazón se llena)
- Animación de línea de escaneo (Scanner)
- Bottom sheet slide-up (Scanner)
- Visual drag feedback en cards de rutina
- Quiz option selection (single-select con highlight)
- Product Detail tabs (Ingredientes/Reseñas/Similares)
- Star rating interactivo (Write Review)
- Repurchase toggle (3 opciones single-select)
- Notification tab filter
- Campana con badge rojo (Home)
- Favorite toggle (Product Detail, corazón)
- Category grid touchable (Search)

## Feedback del cliente
- Logo v1 rechazado: "más aesthetic, símbolo más chiqui"
- Logo v2 aprobado: estilo K-beauty, lupa delicada, serif+sans-serif mix
- **Más pantallas y más botones solicitados** → 5 nuevas pantallas añadidas

## Assets generados
- Logo app icon v2 (aesthetic, lupa thin-line)
- Logo lockup v2 (horizontal, serif "Skin" + sans "Scam")
- 5 mockups de pantalla (onboarding, home, scanner, community, routine)
- Design system completo (skin_scam_design_system.md en artifacts)

## Archivos
```
skinscam/
├── index.html      ← 6 pantallas en SPA
├── css/app.css     ← Design system completo (~800 líneas)
└── js/app.js       ← Navegación e interacciones (~90 líneas)
```
