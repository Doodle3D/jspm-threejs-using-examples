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
  map: {
    "babel": "npm:babel-core@5.8.20",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "three": "github:mrdoob/three.js@master",
    //"three/loaders/STLLoader": "github:mrdoob/three.js@master/examples/js/loaders/STLLoader.js",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  },
  packages: {
    "three": {
      "map": {
        "./loaders/STLLoader": "./examples/js/loaders/STLLoader.js"
      },
      meta: {
        "./loaders/STLLoader": {
          "deps": [
            "three"
          ],
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.STLLoader",
          "format": "global"
        },
        "three/loaders/STLLoader": {
          "deps": [
            "three"
          ],
          "globals": {
            "THREE": "three"
          },
          "exports": "THREE.STLLoader",
          "format": "global"
        }
      }
    }
  },
  meta: {
    "three/loaders/STLLoader": {
      "deps": [
        "three"
      ],
      "globals": {
        "THREE": "three"
      },
      "exports": "THREE.STLLoader",
      "format": "global"
    }
  }
});
