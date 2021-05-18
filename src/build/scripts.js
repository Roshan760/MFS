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
    console.log("process",process.cwd())
    console.log("dir",__dirname)
    console.log(process.resourcesPath)
    //console.log(exec.caller);
    //const childPorcess = exec('java -jar C:\\Node_Trails\\hello-world\\invoke-jar.jar "Jar is invoked by Node js"', function(err, stdout, stderr) {
   // child = exec(`java -jar ${process.cwd()}\\resources\\app.asar\\src\\assets\\Sync_Service.jar`,
  var path=`${process.resourcesPath}\\app.asar.unpacked\\src\\assets\\Sync_Service.jar`
  console.log("path :",path)
   child = exec(`java -jar ${path}`,
    function(err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        console.log(stdout)
    });
  }

;
//# sourceMappingURL=scripts.js.map