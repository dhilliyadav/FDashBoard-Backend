const Project = require('../models/Project');
exports.createProject = async (req,res)=>{
    const project = await Project.create({
        ...req.body,
        user: req.user.id,
    });
    res.status(201).json(project);
};
exports.getProjects= async (req,res)=>{
    const projects = await Project.find({user:req.user.id});
    res.json(projects);
};