const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.end('Hello, World!');
});

app.get('/about',(req,res)=>{
    res.end(`Welcome ${req.query.name || 'Guest'} to the about page!`);
});

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});
