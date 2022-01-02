import transactionModel from "../models/transactionModel.js";


export const getDataTransaction = async (req, res) => {
    try {
        const dataTransaction = await transactionModel.find();
        res.status(200).json(dataTransaction);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getDataTransactionById = async (req, res) => {
    try {
        const dataTransaction = await transactionModel.findById(req.params.id);
        res.status(200).json(dataTransaction);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getDataTransactionByUserID = async (req, res) => {
    try {
        const id = req.params.id
        const dataTransaction = await transactionModel.find({
            UserID: id
        });
        res.status(200).json(dataTransaction);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


export const storeDataTransaction = async (req, res) => {
    const data = new transactionModel(req.body)
    try {
        const dataTransactionCreate = await data.save();
        res.status(201).json(dataTransactionCreate);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


export const updateTransaction = async (req, res) => {
    var getDataTransaction = await transactionModel.findById(req.params.id);
    if (!getDataTransaction) return res.status(404).json({
        message: "data tidak ditemukan "
    });
    try {

        const dataTransactionUpdate = await transactionModel.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(201).json(dataTransactionUpdate);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}





export const deleteTransaction = async (req, res) => {
    var getDataTransaction = await transactionModel.findById(req.params.id);
    if (!getDataTransaction) return res.status(404).json({
        message: "data tidak ditemukan "
    });
    try {
        const dataTransactionDelete = await transactionModel.deleteOne({
            _id: req.params.id
        });
        res.status(201).json(dataTransactionDelete);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}