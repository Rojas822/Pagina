const control = {};
const axios = require ('axios');

control.list=(req,res) =>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM hoteles',(err,hoteles)=>{
            if(err){
                res.json(err);
            }
            //https://drive.google.com/file/d/1jAg7eHVCgrkmmLPGcw5R46jjUmuOYl0n/view?usp=share_link
            const url = "https://drive.google.com/uc?export=download&id=1jAg7eHVCgrkmmLPGcw5R46jjUmuOYl0n";
            axios.get(url).then(response => {
                let drive = response.data;
                res.render('index', { data: hoteles, imp: drive });
            }).catch(error => {
                console.log(error);
            });
        });
    });
};

    module.exports=control;