const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.mp4':'video/mp4'};
http.createServer((req,res) => {
  const file = path.resolve(__dirname, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url,'http://localhost').pathname));
  if (!file.startsWith(__dirname + path.sep)) {res.writeHead(403).end();return;}
  fs.stat(file,(err,stat) => {
    if(err || !stat.isFile()){res.writeHead(404).end();return;}
    const headers = {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Accept-Ranges':'bytes'};
    const range = req.headers.range && /^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
    if(range){const start=Number(range[1]),end=range[2]?Math.min(Number(range[2]),stat.size-1):stat.size-1;if(start>end){res.writeHead(416).end();return;}res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1});fs.createReadStream(file,{start,end}).pipe(res);}
    else{res.writeHead(200,{...headers,'Content-Length':stat.size});fs.createReadStream(file).pipe(res);}
  });
}).listen(4173,'127.0.0.1',()=>process.stdout.write('http://127.0.0.1:4173\n'));
