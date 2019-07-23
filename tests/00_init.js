const { spawn } = require('child_process');
console.log('sls');
let child
before( async function(){

   child =  spawn('node',['node_modules/.bin/sls','offline'],{
    detached:true,
    });
    
    return new Promise((resolve) => {
        child.stdout.on('data', function(data) {         
            console.log('sls (' + child.pid + '): ' + data);
            if(data.includes('listening')) resolve()
           });
      });
});

after(function(done){
 child.kill('SIGINT');
 done()
})