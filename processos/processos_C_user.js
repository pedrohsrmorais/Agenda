import { conn } from '../database/database.js';

const pcc_get = (req, res) => {
    res.render('page_C_account');

}

const pcc_post = (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const c_senha = req.body.confirmarsenha;



    const sql = `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`;
    const values = [nome, email, senha];

    conn.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('User added successfully!');

        }
    });


    res.redirect('/')
}






export { pcc_get, pcc_post }
