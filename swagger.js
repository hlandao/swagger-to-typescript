var exec = require('child_process').exec

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace, pathToJar) {
  pathToJar = pathToJar || (__dirname+'/swagger-codegen-cli.jar');
  var child = exec('/usr/bin/java -jar ' + pathToJar + ' generate -i '+swaggerYamlPath+'  -l typescript-angular -o '+outputPath+' --model-package '+namespace+' --api-package '+namespace,
    function (error, stdout, stderr){
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if(error !== null){
        console.log('exec error: ' + error);
      }
    });

}

module.exports = swaggerToTypeScript
