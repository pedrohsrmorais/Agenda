import { conn } from '../database/database.js';

const h_get = (req, res) => {
  const user = req.session.user

  const sql = "SELECT * from contatos WHERE user = ?"
  const values = [user.email]

  conn.query(sql, values, (error, results) => {
    if (error) {
      console.error(error)
      res.status(500).send('Internal server error')
      return
    }

    const contatos = results
    
    res.render('page_home', { user, contatos })
  })
}


export {  h_get};