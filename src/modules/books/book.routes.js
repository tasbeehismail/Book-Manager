import { Router } from "express";
const router = Router();
import * as bookController from "./controller/book.js";

router.route('/')
    .post(bookController.addBook)
    .get(bookController.getBooks);

router.route('/:book_id')
    .get(bookController.getBook)
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);

 
export default router;
