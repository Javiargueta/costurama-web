import os
import re

css_path = 'css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update root variables
root_vars_new = """:root {
  --black:  #FFFFFF;            
  --dark:   #F9F9F9;            
  --card:   #FFFFFF;            
  --border: #E5E5E5; 
  --cream:  #111111;            
  --muted:  #666666;            
  --accent: #000000;            
  --gold:   #000000;            
  --white:  #000000;            
  --green:  #25D366;

  --footer-bg:     #000000;
  --footer-border: #333333;
  --footer-text:   #FFFFFF;
  --footer-muted:  #999999;

  --font-display: 'Playfair Display', serif;
  --font-body:    'Inter', sans-serif;

  --transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}"""
content = re.sub(r':root\s*\{[^}]+\}', root_vars_new, content)

# 2. Buttons styling
btn_primary_old = r'\.btn--primary\s*\{[^}]+\}'
btn_primary_new = """.btn--primary {
  background: var(--gold);
  color: #FFFFFF;
  box-shadow: none;
  border-radius: 0;
}"""
content = re.sub(btn_primary_old, btn_primary_new, content)

btn_primary_hover_old = r'\.btn--primary:hover\s*\{[^}]+\}'
btn_primary_hover_new = """.btn--primary:hover { background: #333333; transform: translateY(-2px); box-shadow: none; }"""
content = re.sub(btn_primary_hover_old, btn_primary_hover_new, content)

btn_ghost_old = r'\.btn--ghost\s*\{[^}]+\}'
btn_ghost_new = """.btn--ghost {
  background: transparent;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 0;
}"""
content = re.sub(btn_ghost_old, btn_ghost_new, content)

btn_ghost_hover_old = r'\.btn--ghost:hover\s*\{[^}]+\}'
btn_ghost_hover_new = """.btn--ghost:hover { border-color: #000000; color: #FFFFFF; background: #000000; }"""
content = re.sub(btn_ghost_hover_old, btn_ghost_hover_new, content)

btn_lg_old = r'\.btn--lg\s*\{[^}]+\}'
btn_lg_new = """.btn--lg {
  padding: 1rem 2.4rem;
  font-size: 0.95rem;
  box-shadow: none;
  border-radius: 0;
}"""
content = re.sub(btn_lg_old, btn_lg_new, content)

btn_lg_hover_old = r'\.btn--lg:hover\s*\{[^}]+\}'
btn_lg_hover_new = """.btn--lg:hover { transform: translateY(-3px); box-shadow: none; }"""
content = re.sub(btn_lg_hover_old, btn_lg_hover_new, content)

# 3. Base button border-radius
content = re.sub(r'border-radius:\s*100px;', 'border-radius: 0px;', content)
content = re.sub(r'border-radius:\s*999px;', 'border-radius: 0px;', content)
content = re.sub(r'border-radius:\s*8px;', 'border-radius: 0px;', content)
content = re.sub(r'border-radius:\s*0\.8rem;', 'border-radius: 0px;', content)
content = re.sub(r'border-radius:\s*1rem;', 'border-radius: 0px;', content)

# 4. Remove box-shadows everywhere
content = re.sub(r'box-shadow:\s*[^;]+;', 'box-shadow: none;', content)

# 5. Announcement bar gradient to solid black
content = re.sub(r'background:\s*linear-gradient[^;]+;', 'background: #000000;', content)
# Fix for divider
content = re.sub(r'\.divider\s*\{\s*height:\s*1px;\s*background:\s*[^}]+\}', '.divider {\n  height: 1px;\n  background: var(--border);\n}', content)

# 6. Service cards and Why section gradients
content = re.sub(r'\.why::before\s*\{[^}]+\}', '.why::before { display: none; }', content)
content = re.sub(r'background-image:\s*repeating-linear-gradient[^;]+;', '', content)

# 7. Hero Visual gradient
content = re.sub(r'\.hero__visual::after\s*\{[^}]+\}', '.hero__visual::after { display: none; }', content)

# 8. Service card hover line
content = re.sub(r'\.service-card::after\s*\{[^}]+\}', '.service-card::after { display: none; }', content)
content = re.sub(r'\.service-card:hover::after\s*\{[^}]+\}', '', content)

# 9. Update grain
content = re.sub(r'\.grain\s*\{[^}]+\}', '.grain { display: none; }', content)

# 10. Update text transformations to make it more elegant (optional)
content = re.sub(r'font-weight:\s*300;', 'font-weight: 400;', content) # Inter looks better at 400 for light
content = re.sub(r'letter-spacing:\s*0\.25em;', 'letter-spacing: 0.15em;', content)
content = re.sub(r'letter-spacing:\s*0\.35em;', 'letter-spacing: 0.15em;', content)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS updated.")

