# Skin Scam — Contexto del Agente

## Identidad
- **Proyecto:** Prototipo UI/UX de app de análisis de skincare
- **Cliente:** Estudiante de diseño gráfico
- **Estado:** Prototipo navegable completo (solo diseño, sin backend)
- **Origen:** Conversación [c2bcf3f3](conversation://c2bcf3f3-ed77-42e9-81e1-e200ef867db7)
- **Deploy:** GitHub Pages

## Stack
- **HTML** — estructura de 6 pantallas en un solo archivo
- **CSS** — Vanilla CSS (diseño único, no genérico), Google Fonts
- **JS** — Navegación entre pantallas, toggles, animaciones
- **Iconos:** Bootstrap Icons (CDN)
- **Fonts:** Poppins (display) + DM Sans (body) via Google Fonts
- **Sin framework CSS** — decidido por context-aware-design (dominio beauty)

## Pantallas (6)
1. **Onboarding** — Logo, tagline, botón "Comenzar"
2. **Home** — Perfil de piel, Quick Scan CTA, rutina del día, trending
3. **Scanner** — Cámara simulada, viewfinder, semáforo de ingredientes, Match %
4. **Community** — Skin Twins, filtros por tipo de piel, cards con Match Badge
5. **Routine** — AM/PM toggle, pasos arrastrables, tips de compatibilidad
6. **Profile** — Avatar, stats, menú de opciones

## Diseño
- **Paleta:** Rosa pastel (#FADADD, #F5C6C6, #E8909A) — suaviza "Scam"
- **Semáforo:** Verde (#059669) / Ámbar (#D97706) / Rojo (#DC2626)
- **Tipografía:** Poppins 700 (títulos) + DM Sans 400 (cuerpo)
- **Border radius:** 8-16px según componente
- **Estética:** K-beauty / Aesop — delicada, mucho whitespace
- **Phone frame:** 390x844px con sombra y borde oscuro (simula iPhone)

## Interacciones implementadas
- Navegación entre pantallas (JS show/hide con fade)
- Bottom nav con botón central flotante
- Filter chips toggleables (Community)
- AM/PM toggle (Routine)
- Like toggle en reseñas (corazón se llena)
- Animación de línea de escaneo (Scanner)
- Bottom sheet slide-up (Scanner)
- Visual drag feedback en cards de rutina

## Feedback del cliente
- Logo v1 rechazado: "más aesthetic, símbolo más chiqui"
- Logo v2 aprobado: estilo K-beauty, lupa delicada, serif+sans-serif mix

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
