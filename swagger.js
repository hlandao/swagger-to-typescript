var execSync = require('sync-exec');

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace, pathToJar, done) {
  pathToJar = pathToJar || (__dirname + '/swagger-codegen-cli.jar');
  var command = '/usr/bin/java -jar ' + pathToJar + ' generate -i ' + swaggerYamlPath + '  -l typescript-meteor -o ' + outputPath + ' --model-package ' + namespace + ' --api-package ' + namespace;
  var child = execSync(command);

  if (child.status.toString() == '0') {
    done && done();
  }
  else if (child.status.toString() == '1') {
    console.log(child.stderr);
    throw new Error("Unable to compile Swagger YAML file: " + swaggerYamlPath + " due to generator errors.");
  }
  else if (child.status.toString() == '130') {
    throw new Error("Unable to compile Swagger YAML file due user interrupt command, please run again!");
  }
  else {
    console.log(child.stderr);
    throw new Error("Unable to compile Swagger YAML file due to error!");
  }

}

module.exports = swaggerToTypeScript;
