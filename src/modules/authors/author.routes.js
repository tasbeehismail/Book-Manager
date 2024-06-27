import { Router } from "express";
const router = Router();
import * as authorController from "./controller/author.js";


router.route('/')
    .post(authorController.addAuthor)
    .get(authorController.getAuthors);

router.route('/:author_id')
    .get(authorController.getAuthor)
    .patch(authorController.updateAuthor)
    .delete(authorController.deleteAuthor);

export default router;
