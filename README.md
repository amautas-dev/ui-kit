# @amautas/ui-kit

[![CI](https://github.com/amautas-dev/ui-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/amautas-dev/ui-kit/actions/workflows/ci.yml)  
[![codecov](https://codecov.io/gh/amautas-dev/ui-kit/branch/develop/graph/badge.svg)](https://codecov.io/gh/amautas-dev/ui-kit)

> Biblioteca de componentes y Design System de Amautas  
> Reusable en todos los micro-frontends de clientes (DistriAli, …)

---

## 📖 Descripción

`@amautas/ui-kit` es una librería de Angular 18 con **Standalone Components** y tema Angular Material, que incluye:

- Tokens de diseño (colores, tipografía, espaciados)
- Componentes base: botones, inputs, tablas, formularios de búsqueda (ABM)
- Pipes y directivas comunes
- Integración con Storybook para documentar y probar visualmente

---

## 🛠 Instalación

```bash
npm install @amautas/ui-kit
En tu código Angular basta importar el componente standalone o, si usas el módulo wrapper:

ts
Copy
Edit
import { UiKitModule } from '@amautas/ui-kit';  // si expones NgModule
O directamente:

ts
Copy
Edit
import { UiKitButtonComponent } from '@amautas/ui-kit';
🌳 Estrategia de branches (Gitflow Ligero)
Para asegurar versiones estables y fluido de desarrollo:

less
Copy
Edit
main       ←─ (producción, tags semánticos, npm publish)
↑   ↖
|    \─ hotfix/vX.Y.Z ──> main (tag) + develop
|
| develop   ←─ feature/JIRA-123-descripción ──> develop
↑   ↖
└── release/vX.Y.Z ──> main (tag) + develop
main

Siempre refleja lo que está publicado en npm (package @amautas/ui-kit@X.Y.Z).

Nunca se mergea directamente; se usa PR desde una rama release/* o hotfix/*.

develop

Integración continua de features aprobadas.

PRs de feature/* van a develop.

feature/<JIRA>-<desc>

Ramas cortas para cada historia/tarea JIRA.

Al acabar, PR → develop.

release/vX.Y.Z

Creada desde develop cuando estás listo para la próxima versión.

Aquí bump de versión (package.json), ajustes de documentación y pruebas finales.

Merge → main (dispara publicación) + develop (mantiene historial).

hotfix/vX.Y.Z

Creada desde main para corregir emergencias en producción.

Merge → main (tag + publicación) + develop.

✍️ Convenciones de commit (Conventional Commits)
feat(<scope>): breve descripción → nueva funcionalidad

fix(<scope>): breve descripción → corrección de bug

chore(<scope>): breve cambio de infraestructura/dependencies

docs(<scope>): cambios en la documentación

refactor(<scope>): refactor de código sin añadir features ni fixes

El plugin semantic-release leerá estos commits para decidir si hace major, minor o patch live.

⚙️ CI/CD
Usamos GitHub Actions con dos workflows:

ci.yml

Se dispara en:

pull_request → develop

push → develop, release/**, hotfix/**

Pasos:

Checkout, Node.js setup, npm ci

npm run lint

npm run test (Jest)

npm run build:ui-kit

release.yml

Se dispara en:

push → main

Pasos:

Checkout, Node.js setup con registry: https://npm.pkg.github.com/

npm ci

npm run build:ui-kit

npx semantic-release

Publica en GitHub Packages (crea tags vX.Y.Z y publica @amautas/ui-kit@X.Y.Z).

Secrets necesarios (Settings → Secrets → Actions):

GH_PACKAGES_TOKEN → token con permisos write:packages

(más adelante para apps) HOSTINGER_FTP_HOST, HOSTINGER_FTP_USER, HOSTINGER_FTP_PASS

📚 Documentación y Storybook
En carpeta storybook/ (o en raíz), configuramos Storybook:

bash
Copy
Edit
npm run storybook
Cada componente en src/lib/components/*.stories.ts

Permite revisar variantes y documentar API visualmente

En la próxima fase: npm run build:storybook para desplegar.

✅ Qué hemos definido
✔️ Nombre: @amautas/ui-kit

✔️ Org GitHub: amautas-dev

✔️ Repositorios: ui-kit, auth-mf, shell, admin-mf, public-mf

✔️ Branch strategy: Gitflow Ligero (main, develop, feature/*, release/*, hotfix/*)

✔️ Commit conventions: Conventional Commits

✔️ CI: GitHub Actions (ci.yml, release.yml)

✔️ Publicación: GitHub Packages via semantic-release

✔️ .gitignore: plantilla Angular

📝 Qué queda pendiente
 Implementar Storybook completo y añadir primeros stories

 Desarrollar los primeros Standalone Components (botón, input, tabla)

 Configurar Module Federation en auth-mf y shell

 Crear workflows de deploy de cada micro-frontend a Hostinger

 Integrar JIRA en commits y PRs (clave de ticket en el mensaje)

 Documentar guía de contribución (CONTRIBUTING.md)

 Añadir CODE_OF_CONDUCT.md y LICENSE si cambia a público
```
