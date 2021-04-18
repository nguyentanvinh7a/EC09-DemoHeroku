const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>This is demo from group HCMUS-EC09</h1><img src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="Girl in a jacket" width="500" height="600">');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});