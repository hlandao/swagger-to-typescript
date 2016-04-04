var exec = require('child_process').exec

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace) {
  console.log("Running swagger-to-type-script for " + swaggerYamlPath);
  var child = exec('/usr/bin/java -jar '+__dirname+'/swagger-codegen-cli.jar generate -i '+swaggerYamlPath+'  -l typescript-angular -o '+outputPath+' --model-package '+namespace+' --api-package '+namespace,
    function (error, stdout, stderr){
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if(error !== null){
        console.log('exec error: ' + error);
      }
    });

}

module.exports = swaggerToTypeScript
