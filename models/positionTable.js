const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    pos: {
        type: Number,
        required: true
    },
    equipo: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    pj: {
        type: Number,
        required: true
    },
    g: {
        type: Number,
        required: true
    },
    e: {
        type: Number,
        required: true
    },
    p: {
        type: Number,
        required: true
    },
    gf: {
        type: Number,
        required: true
    },
    gc: {
        type: Number,
        required: true
    },
    dg: {
        type: Number,
        required: true
    },
    pts: {
        type: Number,
        required: true
    }
});

const tableSchema = new mongoose.Schema({
    data: {
      type: [teamSchema],
      required: true
    }
  });

module.exports = mongoose.model('tablaDePosiciones', tableSchema);