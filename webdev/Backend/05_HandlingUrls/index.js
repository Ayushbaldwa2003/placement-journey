const http=require('http');
const fs=require('fs');
const url=require('url');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/favicon.ico'){
        console.log("favicon requested");
        return res.end();
    }
    const log =`${new Date().getDate().toLocaleString()}: ${req.url}\n`
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case '/':
                res.end('Welcome to the homepage');
                break;
            case '/about':
                const name=myurl.query.myname || 'Guest';
                res.end(`Welcome ${name} to the about page`);
                break;
            default:
                res.end('404 Not Found');
        }
    })
});
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});