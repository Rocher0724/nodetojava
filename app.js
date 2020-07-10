const app = require('express')();
const http = require('http').createServer(app);
const java = require('java');
const jarFilePath = 'demo.jar';
// java.classpath.push(jarFilePath);
// java.classpath.push('com.example.demo');


// var DemoApplication = java.import('com.example.demo.DemoApplication')();
// var result = DemoApplication.mainSync(param1,...);


var exec = require('child_process').exec, child;
child = exec('/usr/bin/java -jar demo.jar',
  function (error, stdout, stderr){
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(error !== null){
      console.log('exec error: ' + error);
    }
  });

// const io = require('socket.io')(http);
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.get('/a', (req, res) => {
  console.log(child);
  // var javaLangSystem = java.import('com.example.demo');
  // var javaLangSystem = java.import('com.example.demo.DemoApplication');

  // var list = java.newInstanceSync("java.util.ArrayList");
  // var result = java.callMethodSync(list, "add", "test");
  // console.log(result);

  // java.callMethodSync(list, "add", "test", "test", function(err, results) {
  //   if(err) { console.error(err); return; }
    // console.log(results);
  // });
  // var instance = java.newInstanceSync("com.example.demo.DemoApplication");
  // java.callMethodSync(instance, "aaa", "test", function(err, results) {
  //   if(err) { console.error(err); return; }
  // });

  // java.newInstance("com.example.demo.DemoApplication", function(err, demo) {
  //   demo.aaaSync("asd");
  //  // console.log(list2.toStringSync()); // [item1, item2]
  // });

  // var DemoApplication = java.import('com.example.demo.DemoApplication')();
  // var result = DemoApplication.mainSync();

  // java.callStaticMethod("com.example.demo.DemoApplication", "doSomething", function(err, results) {
  //   if(err) { console.error(err); return; }
  //   console.log('javacv_method complete')
  // });
})
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
http.listen(3000, () => {
  console.log('Connected at 3000 3');
});
