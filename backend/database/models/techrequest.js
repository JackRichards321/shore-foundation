const mongoose = require('mongoose');

const TechReqSchema = new mongoose.Schema({
    sentence: {
        type: String,
    },
    
});

const TechReq = mongoose.model('TechReq', TechReqSchema);

module.exports = TechReq;