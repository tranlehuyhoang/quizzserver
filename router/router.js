import { Router } from "express";
const router = Router();
import * as controller from '../controllers/Controller.js'

router.route('/question')
    .get(controller.layQuestions)
    .post(controller.chenQuestions)
    .delete(controller.xoaQuestions)
router.route('/result')
    .get(controller.layResult)
    .post(controller.khoResult)
    .delete(controller.xoaResult)


export default router