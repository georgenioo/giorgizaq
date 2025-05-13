import {Film} from '../routes/models/filmodel.js'

export const  getAllFilms = async(req, res) => {
    const films = await Film.find();
    res.status(200).json(films)
}

export const  getOneFilm = async(req, res) => {
    try{
        const OneFilm = req.params.id;
        const one= await Film.findById(OneFilm);
        if(!one){
            res.status(404).json('film not found')
        }
        res.status(200).json(one)
    } catch{
        res.status(400).json('error');
    }
 
}

export const createFilm = async (req, res) => {
    const newFilm = await Film.create(req.body);
    res.status(201).json(newFilm)
}

export const deleteFilm = async(req,res) => {
      try{
        
          const filmid = req.params.id;
          const films = await Film.findByIdAndDelete(filmid);
          
          if(!films){
            res.status(404).json('film not found')
          }
          res.status(200).json(films);
      } catch{
         res.status(400).json('error' );
      }
}

export const updateFilm = async(req, res) => {
    try{
        const updateid =  req.params.id;
        const updatefilm =  await Film.findByIdAndUpdate(udpateid);

        if(!updatefilm){
            res.status(404).json("film not found")
        }
         res.status(200).json(updatefilm);
    } catch{
        res.status(400).json('error');
    }
}