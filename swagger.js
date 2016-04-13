var exec = require('child_process').exec

function swaggerToTypeScript(swaggerYamlPath, outputPath, namespace, pathToJar, done) {
  pathToJar = pathToJar || (__dirname+'/swagger-codegen-cli-meteor.jar');
  var child = exec('/usr/bin/java -jar ' + pathToJar + ' generate -i '+swaggerYamlPath+'  -l typescript-meteor -o '+outputPath+' --model-package '+namespace+' --api-package '+namespace,
    function (error, stdout, stderr){
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if(error !== null){
        console.log('exec error: ' + error);
      }

      done && done (error);
    });

}

module.exports = swaggerToTypeScript
