var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'apis',
  description: 'The nodejs.org apis.',
  script: 'C:\\inetpub\\wwwroot\\apis\\src\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();