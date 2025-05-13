import express from 'express'
import { createFilm, deleteFilm, getAllFilms, getOneFilm, updateFilm } from '../filmcontrollers';

const router = express.Router();

router.get('/ ',getAllFilms);
router.post('/', createFilm);
router.delete('/',deleteFilm);
router.put('/',updateFilm);
router.get('/', getOneFilm)