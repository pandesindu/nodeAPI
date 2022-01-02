import express from "express";
import {

    deleteTransaction,
    getDataTransaction,
    getDataTransactionById,
    getDataTransactionByUserID,
    storeDataTransaction,
    updateTransaction

} from "../controllers/transactionControllers.js";

const router = express.Router();

// get data transaction 
router.get('/', getDataTransaction);
router.get('/:id', getDataTransactionById);
router.get('/user/:id', getDataTransactionByUserID);
router.post('/', storeDataTransaction);
router.patch('/:id', updateTransaction);

router.delete('/:id', deleteTransaction);


export default router;