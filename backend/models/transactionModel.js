import Mongoose from "mongoose";

const Transaction = Mongoose.Schema({
    UserID: {
        type: Number,
        require: true
    },
    KodeTransaksi: {
        type: Number,
        require: true
    },
    NisSiswa: {
        type: Number,
        require: true
    },
    NamaSiswa: {
        type: String,
        require: true
    },
    JumlahTransaksi: {
        type: Number,
        require: true
    },
    StatusTransaksi: {
        type: String,
        require: true,
        default: "belum dibayar"
    },
}, {
    timestamp: true
});

export default Mongoose.model("TransactionModel", Transaction);