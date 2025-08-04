// Auto-genera imports de todos los specs para test.ts
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const srcDir = path.resolve(__dirname, '../'); // apunta a projects/ui-kit/src
const outFile = path.join(srcDir, 'tests.generated.ts');

// Busca todos los .spec.ts bajo src
const specs = glob.sync('**/*.spec.ts', {
  cwd: srcDir,
  nodir: true,
});

if (specs.length === 0) {
  console.warn('No se encontraron archivos *.spec.ts para generar imports.');
}

const imports = specs
  .map((specPath) => {
    const importPath = `./${specPath.replace(/\\/g, '/')}`;
    return `import '${importPath}';`;
  })
  .join('\n');

const content = `// Auto-generado por scripts/generate-test-index.js\n${imports}\n`;

fs.writeFileSync(outFile, content, 'utf-8');
console.log(`Generado ${specs.length} imports en ${outFile}`);