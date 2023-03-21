import cauhoi from "../models/cauhoi.js"
import ketqua from "../models/ketqua.js"
import { dapandung, answers } from '../database/data.js'
export async function layQuestions(req, res) {
    try {
        const q = await cauhoi.find()
        res.json(q)
    } catch (error) {

    }
}
export async function chenQuestions(req, res) {
    try {
        cauhoi.insertMany({ questions: answers, answers: dapandung })
    } catch (error) {
        res.json({ error })
    }
}
export async function xoaQuestions(req, res) {
    res.json('xóa câu hỏi')
}
export async function layResult(req, res) {
    try {
        const r = await ketqua.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export async function khoResult(req, res) {
    try {
        const { username, result } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        ketqua.create({ username, result})

    } catch (error) {
        res.json({ error })
    }
}
export async function xoaResult(req, res) {
    res.json('chèn dap an')
}