const express = require('express');
const fs = require('fs');
const users= require('./MOCK_DATA.json');
const app = express();
const port = 3000;

app.use(express.urlencoded
({extended : false})
);

// app.get('/users',(req,res)=>{
//     const html = `
//         <ul>
//             ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
//         </ul>
//     `
//     res.send(html);
// })

// Routes

app.get('/api/users', (req, res) => {
  return res.json(users);
});

app.route('/api/users/:id')
.get((req,res)=>{
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.put((req,res)=>{
    const id=parseInt(req.params.id);
    const user = users.find((user)=> user.id === id);
    if (!user) {
        return res.status(404).json({ status: "User not found" });
    }
    user.first_name = req.query.first_name || user.first_name;
    user.last_name = req.query.last_name || user.last_name;
    user.gender = req.query.gender || user.gender;
    user.job_title = req.query.job_title || user.job_title;
    user.email = req.query.email || user.email;
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({
            status : "User updated successfully",
            userInfo : user,
        });
    });


})
.delete((req,res)=>{
    const id=parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if(index==-1){
        return res.json({
            message : "User not Found"
        })
    }
    const deletedUser = users.splice(index, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({
            status: "User deleted successfully",
            deletedUser: deletedUser[0]
        });
    });
})


app.post('/api/users',(req,res)=>{
    const newUser={
        id : users.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender,
        job_title : req.body.job_title,
    }
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({
            status : "User added successfully",
            newUser : users.length,
            userInfo : newUser,
        });
    });
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});