const Task = require("../model/tasks.model");

const createTask = async(req,res) => {
    try {
        const task = await Task.create(req.body); 
        res.status(201).json({
                    status: "success",
                   data:{
                    task
                   } 
                });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err
      }); 
    }
};

const getAllTask = async(req,res) => {
    try {
        const task = await Task.find({});
        res.status(200).json({
            status: "success",
            data: {
                task
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
          });
    }
};

const getTask = async(req,res) =>{
    try {
        const {id:taskID} = req.params;

        const task = await Task.findById({_id: taskID});

        if(!task) {
            return res.status(400).json({
                status: "fail",
                message: "Cannot find task"
            })};
            res.status(200).json({
                status: "success",
                data: {
                    task
                }
            })  
        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err
              });
    }
}; 

const updateTask = async(req,res) =>{
  try {
    const {id:taskID} = req.params;
    
    const task= await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true,
        overwrite:true,
    });

    if(!task) {
        return res.status(400).json({
            status: "fail",
            message: "Cannot find task"
        })
    };

res.status(200).json({
    status: "success",
    data: {
        task
    }
});

  } catch (err) {
    res.status(400).json({
        status: "fail",
        message: err
      });
  }
};

const deleteTask = async(req,res) =>{
    try {
       
        const{id:taskID} = req.params;
       const task = await Task.findByIdAndDelete({_id:taskID});

       if(!task) {
        return res.status(400).json({
            status: "fail",
            message: "Cannot find task"
        })
    }
        res.status(200).json({task});
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
          });
    }
};

module.exports = {createTask,getAllTask,getTask,updateTask,deleteTask}