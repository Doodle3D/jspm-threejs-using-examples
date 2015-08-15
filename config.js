System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "three": {
      "map": {
        "./loaders/STLLoader": "./examples/js/loaders/STLLoader.js"
      },
      "meta": {
        "examples/js/loaders/STLLoader.js": {
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.STLLoader",
          "format": "global"
        }
      }
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.0.1",
    "systemjs-debugger": "github:peteruithoven/systemjs-debugger@0.0.1",
    "three": "github:mrdoob/three.js@master",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
