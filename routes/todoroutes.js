// importing librabies
const express =  require("express")

const {getTodos, createTodos, getTodo, deleteTodo, updateTodo} = require("../controllers/todocontroller")

// instantiating router for router controller
const router = express.Router();

// router assignments
router.get("/test", (req, res)=>{
    res.status(200).json({"message":"Hello world!"}) //basic testing function
})
router.get("/", getTodos); //get Todos and return array of todos from controllers

router.post("/", createTodos);

router.get("/:id",getTodo);

router.delete("/:id",deleteTodo);

router.put("/:id", updateTodo);
// router exporting
module.exports = router