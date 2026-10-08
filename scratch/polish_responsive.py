import re

with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update global clamps to scale down more on mobile
css = re.sub(r'clamp\(2rem,\s*3\.5vw,\s*3rem\)', 'clamp(1.6rem, 6vw, 3rem)', css)
css = re.sub(r'clamp\(2\.6rem,\s*4vw,\s*4rem\)', 'clamp(2.1rem, 8vw, 4rem)', css)
css = re.sub(r'clamp\(2\.8rem,\s*5vw,\s*4\.8rem\)', 'clamp(2rem, 7vw, 4.8rem)', css)

# 2. Add fine-grained responsive overrides at the end
responsive_overrides = """
/* ============================================================
   EXTRA MOBILE POLISH (Elegance & Proportion)
   ============================================================ */
@media (max-width: 600px) {
  /* Hacemos los iconos más delicados en móvil */
  .nav__needle-icon {
    height: 36px; /* Icono más pequeño para no saturar el header */
  }
  .nav__wordmark {
    font-size: 1.2rem;
  }
  .announcement-bar {
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
  }
  .announcement-bar__badge {
    font-size: 0.65rem;
    padding: 0.15rem 0.5rem;
  }
  
  /* Botones más sutiles */
  .btn {
    padding: 0.7rem 1.4rem;
    font-size: 0.82rem;
  }
  .btn--lg {
    padding: 0.85rem 1.8rem;
    font-size: 0.88rem;
  }
  
  /* Hero ajustes */
  .hero__content {
    padding: 5.5rem 1.5rem 2rem;
  }
  .hero__badge {
    padding: 0.7rem 1rem;
    bottom: 0.8rem;
    left: 0.8rem;
    border-radius: 0; /* Keep it sharp */
  }
  .hero__badge strong {
    font-size: 0.85rem;
  }
  .hero__badge p {
    font-size: 0.55rem;
  }
  
  /* Secciones y tarjetas más delicadas */
  .services, .why, .cta, .about, .queEs, .pasos, .catalogo, .faq {
    padding: 3.5rem 1.2rem;
  }
  
  .service-card {
    padding: 1.6rem 1.2rem;
  }
  .service-card__icon {
    width: 1.6rem;
    height: 1.6rem;
    margin-bottom: 1rem;
  }
  .service-card__name {
    font-size: 1.05rem;
  }
  .service-card__desc {
    font-size: 0.78rem;
  }
  
  .why-item__icon {
    width: 1.8rem;
    height: 1.8rem;
    margin-bottom: 0.8rem;
  }
  .why-item__num {
    font-size: 2.2rem;
  }
  .why-item__desc {
    font-size: 0.78rem;
  }
  
  /* Modal y grids */
  .pasos__grid {
    gap: 1.2rem;
  }
  .paso-card {
    padding: 1.4rem 1.2rem;
  }
  .paso-card__num {
    font-size: 1.3rem;
  }
  .paso-card__title {
    font-size: 1rem;
  }
  .paso-card__desc {
    font-size: 0.82rem;
  }
  
  .catalogo__category-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
}

/* Micro-ajustes para pantallas muy pequeñas (iPhone SE, etc) */
@media (max-width: 380px) {
  .hero__title {
    font-size: 1.8rem;
  }
  .hero__desc {
    font-size: 0.8rem;
  }
  .btn {
    width: 100%;
    justify-content: center;
  }
  .hero__actions {
    width: 100%;
  }
}
"""

if "EXTRA MOBILE POLISH" not in css:
    css += responsive_overrides

with open('css/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Responsive polish applied to styles.css")

