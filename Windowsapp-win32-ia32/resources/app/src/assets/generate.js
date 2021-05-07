function myCode(){
    //alert("invoke function");
    var exec = require('child_process').exec, child;
    console.log('calling java');
    //console.log(exec.caller);
    //const childPorcess = exec('java -jar C:\\Node_Trails\\hello-world\\invoke-jar.jar "Jar is invoked by Node js"', function(err, stdout, stderr) {
    child = exec('java -jar D:\\MFS_Replacement_Code\\build\\MFS_Sync_Service.jar',
    function(err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        console.log(stdout)
    });
}
function launchCode(){
  //alert("invoke function");
  var exec = require('child_process').exec, child;
  console.log('calling java');
  //console.log(exec.caller);
  //const childPorcess = exec('java -jar C:\\Node_Trails\\hello-world\\invoke-jar.jar "Jar is invoked by Node js"', function(err, stdout, stderr) {
  child = exec('java -jar  ../../../jarfiles/Sync_Service.jar',
  function(err, stdout, stderr) {
      if (err) {
          console.log(err)
      }
      console.log(stdout)
  });
}
