# 🧩 Understanding `tsconfig.json` in TypeScript

When working with TypeScript, the file **`tsconfig.json`** tells the compiler (`tsc`) how to convert your `.ts` (TypeScript) files into `.js` (JavaScript) files.

Think of it as the “rules” and “map” for your project’s build process.

---

## 📁 Example: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",               // Version of JavaScript to output
    "module": "commonjs",          // Module system (used by Node.js)
    "outDir": "dist",              // Folder for compiled JS files
    "rootDir": "src",              // Folder containing TypeScript source files
    "strict": true,                // Enable strict type checking
    "esModuleInterop": true,       // Allow default imports from CommonJS modules
    "forceConsistentCasingInFileNames": true, // Avoid issues on case-sensitive systems
    "sourceMap": true              // Generate .map files to debug TS in browser or VS Code
  },
  "include": [
    "src/**/*.ts"                  // Compile all .ts files in /src and subfolders
  ],
  "exclude": [
    "node_modules"                 // Skip dependencies
  ]
}
