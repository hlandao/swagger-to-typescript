var execSync = require('sync-exec');

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace, pathToJar, done) {
  pathToJar = pathToJar || (__dirname + '/swagger-codegen-cli.jar');
  var command = '/usr/bin/java -jar ' + pathToJar + ' generate -i ' + swaggerYamlPath + '  -l typescript-meteor -o ' + outputPath + ' --model-package ' + namespace + ' --api-package ' + namespace;

  var child = execSync(command);

  if (child && child.status && child.status === 0) {
    done && done();
  }
  else if (child && child.status && child.status === 1) {
    throw "Unable to compile Swagger YAML file: " + swaggerYamlPath + " due to generator errors: \n " + child.stderr;
  }
  else if (child && child.status && child.status === 130) {
    throw "Unable to compile Swagger YAML file due user interaption command, please run again!";
  }
  else {
    console.log(child.stderr);
    throw "Unable to compile Swagger YAML file due to error: ";
  }

}

module.exports = swaggerToTypeScript;
