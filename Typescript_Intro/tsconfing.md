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
```

# Real World Folder Structure
```bash
my-typescript-project/
│
├── src/               # All your TypeScript files
│   ├── app.ts
│   ├── routes/
│   │   └── users.ts
│   └── utils/
│       └── helpers.ts
│
├── dist/              # Compiled JS files go here
│   ├── app.js
│   ├── routes/
│   │   └── users.js
│   └── utils/
│       └── helpers.js
│
├── tsconfig.json
└── package.json
```


>![NOTE] Intro to the TSConfig Reference
>
>A TSConfig file in a directory indicates that the directory is the root of a TypeScript or JavaScript project. The TSConfig file can be either a tsconfig.json or jsconfig.json, both have the same set of config variables.
>
>This page covers all of the different options available inside a TSConfig file. There are over 100 options, and this page is not built to be read from top to bottom. Instead it has five main sections:
>
>A categorized overview of all compiler flags
The root fields for letting TypeScript know what files are available
The compilerOptions fields, this is the majority of the document
The watchOptions fields, for tweaking the watch mode
The typeAcquisition fields, for tweaking how types are added to JavaScript projects


### <span style="color:blue">If you are starting a TSConfig from scratch, you may want to consider using ```bash tsc --init ``` to bootstrap or use a TSConfig base.</span>

### To compile, run in project root:
```
npx tsc -p .
# or, if typescript is installed globally:
tsc -p .
```

### see: https://www.typescriptlang.org/tsconfig/


