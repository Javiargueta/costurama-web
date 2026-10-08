import re

with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add footer logo scaling to the mobile media query
footer_css = """
  /* Footer */
  .footer {
    padding: 2.5rem 1.2rem;
  }
  .footer__logo {
    height: 48px;
  }
"""

css = css.replace("  /* Secciones y tarjetas más delicadas */", footer_css + "\n  /* Secciones y tarjetas más delicadas */")

with open('css/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Footer logo responsive adjustment applied.")

