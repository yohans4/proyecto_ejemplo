import { Router } from "express";
const router = Router()



router.get('/', (req, res) =>  {res.render('index.ejs', {titulo: 'pagina principal' })});

router.get('/acerca', (req, res) => { res.render('abaut.ejs', {titulo: 'acerca de'})});

router.get('/contactos', (req, res) => { res.render('contact.ejs', {titulo: 'contactos'})});

export default router