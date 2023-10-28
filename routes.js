import express from 'express';

const route = express.Router();


//process imports

import { pm_get } from './processos/processos_main.js';
import { pcc_get , pcc_post} from './processos/processos_C_user.js';
import { pl_get , pl_post } from './processos/processos_login.js';
import {  h_get } from './processos/processos_home.js';
import {  cc_get, cc_post, dc_get, uc_get, uc_post} from './processos/processos_CRUD_contato.js';


//rotas main
route.get('/', pm_get)


//rotas c_user
route.get('/create_account', pcc_get)
route.post('/create_account', pcc_post)


//rotas login
route.get('/login', pl_get)
route.post('/login', pl_post)


//rotas homepage
route.get('/home',h_get)


////////////////////////////////////////////CRUD contatos

//rota criar contato
route.get('/criar_contato',cc_get)
route.post('/criar_contato',cc_post)

//rota excluir contato
route.get('/excluir_contato/:id',dc_get)

//rota update de contato
route.get('/editar_contato/:id',uc_get)
route.post('/editar_contato/:id',uc_post)



/////////////////////sair da sessão:
route.get('/sair', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  });


//export
export default route;