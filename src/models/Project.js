const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: String,
    clientName: String,
    budget: Number,
    status: { type: String, default: 'ongoing' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
},
    { timestamps: true }
);

module.exports = mongoose.model("Project",projectSchema);