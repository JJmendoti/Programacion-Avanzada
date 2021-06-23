// definir las rutas para el crud
const express = require('express');
const router = express.Router();
const Task = require('../model/task');// Hace referencia al esquema

router.get('/', async(req, res) =>{
    const tasks = await Task.find(); // retornar todos los documentos de la colección tasks
    res.render('index',{ // index.ejs (views/index.ejs)
        tasks
    });
});

router.post('/add', async(req, res, next)=>{
    const task = new Task(req.body) // los datos del formulario title y description
    await task.save();
    res.redirect('/');
});

router.get('/turn/:id', async(req, res, next)=>{
    let {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status; //Intercambia el valor del estado
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id',async(req, res, next)=>{
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.render('edit',{task}); //edit.ejs -- editar la tarea (task)
});

router.post('/edit/:id', async(req, res, next)=>{
    const { id } = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
});

router.get('/delete/:id',async(req, res, next)=>{
    let { id } = req.params;
    await Task.remove({_id:id});
    res.redirect('/');
});

module.exports = router;







