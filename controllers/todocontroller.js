const mongoose = require("mongoose")



const Todos = require("../models/todoModel")

// function declaration
const getTodos= async(req, res)=>{
    try{
        const todos = await Todos.find();
        res.status(200).json(todos)
    }catch(error){

    }
}

// 
const createTodos = async(req, res)=>{
    try{
        const {todo,status} = req.body;
        const todos = await Todos.create({
            todo,
            status
        })
        res.status(200).json(todos)
   
    }catch(e){
        console.log(e)
    }
}
const getTodo= async(req, res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const todos = await Todos.findById({_id:id});
        res.status(200).json(todos)
    }catch(error){
        res.status(400).json({"message":"couldnot get todo"})
    }
}

const deleteTodo= async(req, res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const todos = await Todos.findByIdAndDelete({_id:id});
        res.status(200).json(todos)
    }catch(error){
        res.status(400).json({"message":"couldnot find todo"})
    }
}

const updateTodo = async(req, res)=>{
    const {id} = req.params;

    try{
        const todos = await Todos.findByIdAndUpdate({_id:id},{...req.body});
        res.status(200).json(todos)
   
    }catch(error){
        console.log("error")
    }
}





module.exports={
    getTodos,
    createTodos,
    getTodo,
    deleteTodo,
    updateTodo

}