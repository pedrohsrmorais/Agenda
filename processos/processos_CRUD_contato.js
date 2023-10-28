import { conn } from '../database/database.js';

/////////////////////////////////////////CREATE
const cc_get = (req, res) => {
    res.render('page_C_contact');

}

const cc_post = (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;

    const user = req.session.user.email;

    console.log("aqui é um pouco antes de criar o contato query, e o user é :" + user)

    const sql = `INSERT INTO contatos (user, nome, email, telefone) VALUES (?, ?, ?, ?)`;
    const values = [user, nome, email, telefone];


    conn.query(sql, values, (error, results) => {
        console.log(results);
        res.redirect('/home')
    });

}
/////////////////////////////////////////////////DELETE

const dc_get = (req, res) => {
    const id_c = req.params.id;

    const sql = "DELETE FROM contatos WHERE (id) = (?)";
    const values = [id_c];
    conn.query(sql, values, (error, results) => {

        res.redirect('/home')
    });
}

/////////////////////////////////////////////////////UPDATE

const uc_get = (req, res) => {
    const id_c = req.params.id;

    const sql = "SELECT * FROM contatos WHERE (id) = (?)";
    const values = [id_c];

    conn.query(sql, values, (error, results) => {
        const contato = results[0];


        res.render('page_U_contato', { contato })
    });

}

const uc_post = (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const id_c = req.params.id;

    const sql = 'UPDATE contatos SET nome = ?, telefone = ?, email = ? WHERE id = ?';
    const values = [nome, telefone, email, id_c];

    conn.query(sql, values, (error, results) => {

        res.redirect('/home')
        

    });

}


export { cc_get, cc_post, dc_get, uc_get, uc_post }
