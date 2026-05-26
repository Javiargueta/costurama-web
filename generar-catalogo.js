/**
 * COSTURAMA — generar-catalogo.js
 * 
 * Lee las carpetas de img/catalogo/ y actualiza automáticamente
 * el array CATALOGO en js/main.js
 * 
 * Uso: node generar-catalogo.js
 */

const fs   = require('fs');
const path = require('path');

// Carpetas del catálogo y su configuración
const CATEGORIAS = {
  'uniform-escolar':     { titulo: 'Uniformes Escolares',      carpeta: 'uniformes/escolares'     },
  'uniform-empresarial': { titulo: 'Uniformes Empresariales',  carpeta: 'uniformes/empresariales' },
  medical:               { titulo: 'Ropa médica y hospitalaria', carpeta: 'medico'                },
  scissors:              { titulo: 'Reparación de ropa',        carpeta: 'reparacion'             },
  shop:                  { titulo: 'Máquinas de coser',         carpeta: 'maquinas'               }
};

// Categorías que son solo submenú (no tienen fotos propias)
const SOLO_SUBMENU = ['uniform'];

const EXTENSIONES_VALIDAS = ['.jpg', '.jpeg', '.png', '.webp'];
const BASE_PATH = path.join(__dirname, 'img', 'catalogo');

// Leer fotos de cada carpeta
function leerFotos(carpeta) {
  const rutaCarpeta = path.join(BASE_PATH, carpeta);

  if (!fs.existsSync(rutaCarpeta)) {
    console.warn(`  ⚠️  Carpeta no encontrada: img/catalogo/${carpeta}`);
    return [];
  }

  return fs.readdirSync(rutaCarpeta)
    .filter(archivo => EXTENSIONES_VALIDAS.includes(path.extname(archivo).toLowerCase()))
    .sort() // orden alfabético
    .map(archivo => `img/catalogo/${carpeta}/${archivo}`);
}

// Generar el bloque CATALOGO
function generarCatalogo() {
  const lineas = ['const CATALOGO = {'];

  // Primero el submenú de uniformes (fijo)
  lineas.push(`  uniform: {`);
  lineas.push(`    titulo: 'Uniformes',`);
  lineas.push(`    subcategorias: [`);
  lineas.push(`      { key: 'uniform-escolar',     label: 'Escolares',     carpeta: 'img/catalogo/uniformes/escolares/' },`);
  lineas.push(`      { key: 'uniform-empresarial', label: 'Empresariales', carpeta: 'img/catalogo/uniformes/empresariales/' }`);
  lineas.push(`    ]`);
  lineas.push(`  },`);

  const claves = Object.keys(CATEGORIAS);

  claves.forEach((clave, i) => {
    const { titulo, carpeta } = CATEGORIAS[clave];
    const fotos = leerFotos(carpeta);
    const esUltimo = i === claves.length - 1;

    console.log(`  ✓ ${titulo}: ${fotos.length} foto(s)`);

    lineas.push(`  '${clave}': {`);
    lineas.push(`    titulo: '${titulo}',`);
    lineas.push(`    fotos: [`);

    fotos.forEach(foto => {
      lineas.push(`      '${foto}',`);
    });

    lineas.push(`    ]`);
    lineas.push(`  }${esUltimo ? '' : ','}`);
  });

  lineas.push('};');
  return lineas.join('\n');
}

// Reemplazar el bloque CATALOGO en main.js
function actualizarMainJs(nuevoCatalogo) {
  const mainPath = path.join(__dirname, 'js', 'main.js');
  let contenido = fs.readFileSync(mainPath, 'utf8');

  // Regex que encuentra el bloque CATALOGO completo
  const regex = /const CATALOGO = \{[\s\S]*?\};/;

  if (!regex.test(contenido)) {
    console.error('❌ No se encontró el bloque CATALOGO en main.js');
    process.exit(1);
  }

  contenido = contenido.replace(regex, nuevoCatalogo);
  fs.writeFileSync(mainPath, contenido, 'utf8');
}

// Ejecutar
console.log('\n🧵 Costurama — Generando catálogo...\n');

const catalogo = generarCatalogo();
actualizarMainJs(catalogo);

console.log('\n✅ main.js actualizado correctamente.');
console.log('   Ya podés subir la carpeta a Netlify.\n');
