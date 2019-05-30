import {Request, Response} from 'express';
import pool from '../database';

class ContactoController {

  public async list (req :Request, res :Response) {
       const contacto = await pool.query('SELECT * FROM persona');
        res.json(contacto);
    }

    public async create (req :Request, res :Response) {
       await pool.query('INSERT INTO persona set ?', [req.body]);
        console.log(req.body);
        res.json( {text:"persona añadido"});
    } 

    public async getone (req :Request, res :Response) {
        const {id} = req.params;
       const contacto = await pool.query('SELECT * FROM persona WHERE id_clie = ?', [id]);
       
        if(contacto.length > 0){
            return res.json(contacto[0]);
        }
        else{
        res.status(404).json({text: 'la persona no existe'});
        }
        
    }

    public async delete (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('DELETE FROM persona WHERE id_clie = ?', [id]);
        res.json({message: 'contacto eliminada'});
    }

    public async update (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('UPDATE persona set ? WHERE id_clie = ?', [req.body,id]);
        res.json({text: 'persona actualizada'});
    }
}


export const contactoController = new ContactoController();