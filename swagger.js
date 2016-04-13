var execSync = require('exec-sync');

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace, pathToJar, done) {
  pathToJar = pathToJar || (__dirname + '/swagger-codegen-cli.jar');
  var child = execSync('/usr/bin/java -jar ' + pathToJar + ' generate -i '+swaggerYamlPath+'  -l typescript-meteor -o '+outputPath+' --model-package '+namespace+' --api-package '+namespace);
  done && done (error);
}

module.exports = swaggerToTypeScript