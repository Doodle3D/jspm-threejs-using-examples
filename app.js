
System.normalize('three.js/loaders/STLLoader')
  .then(function (path) {
    console.log(path);
  });

// importing three.js is not really needed because
// three.js is a dependency of the STLLoader
// But to prevent confusion I would always import it anyway in the root js file
// import 'three.js';
// console.log('THREE: ', THREE);
//
// import 'three.js/loaders/STLLoader';
// console.log('THREE.STLLoader: ', THREE.STLLoader);
