const {Router} = require("express");

const studentRouter = Router();

studentRouter.post("/",async(req, res)=>{
    const {firstName, lastName, gender, age, email} = req.body;
    try {
        const newStudent = await createStudent(firstName, lastName, gender, age, email)
        res.status(200).json(newStudent)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
})