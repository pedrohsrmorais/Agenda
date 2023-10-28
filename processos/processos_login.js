import { conn } from '../database/database.js';


const pl_get = (req, res) => {
    res.render('page_login');
}

const pl_post = (req,res) =>{

    const email = req.body.email;
    const senha = req.body.senha;

    const sql = "SELECT * from users WHERE (email,senha) = (?,?)"
    const values = [email,senha]


    conn.query(sql,values,(error,results) =>{
        if (results.length == 1){
            
            const user = results[0];
            req.session.user = user;
            res.redirect('/home')
            

        }
        else{
            res.send('NAO achei o user');
            

        }


    })
  

}

export { pl_get , pl_post};
