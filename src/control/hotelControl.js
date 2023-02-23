const control = {};
const axios = require ('axios');
control.list=(req,res) =>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM hoteles',(err,hoteles)=>{
            if(err){
               res.json(err); 
            }
            
            res.render('index',{data:hoteles});
        });
    });
};

control.index=(req,res)=>{
    const url = "https://drive.google.com/uc?export=download&id=1XFzMDmR7R68b52G7LpXXfZVjIlyiI63r";
    axios.get(url)
        .then(response => {
            const drive = response.data;
            console.log(drive);
            res.render('index', { data:drive });
        })
        .catch(error => {
            console.log(error);
        });
};
    module.exports=control;