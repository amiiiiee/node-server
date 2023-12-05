var http=require('http');
http.createServer((req,res)=>{
    res.write('ameen')
    res.end()
}
).listen(1001);