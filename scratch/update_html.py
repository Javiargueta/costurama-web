import os
import glob

html_files = glob.glob('*.html')

old_fonts = r'<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" media="print" onload="this.media=\'all\'" />'
new_fonts = r'<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" media="print" onload="this.media=\'all\'" />'

old_fonts_noscript = r'<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />'
new_fonts_noscript = r'<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = content.replace(old_fonts, new_fonts)
    content = content.replace(old_fonts_noscript, new_fonts_noscript)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("HTML files updated.")

