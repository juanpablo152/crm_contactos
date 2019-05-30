import {Request, Response} from 'express';
import pool from '../database';

class EstablecimientoController {

  public async list (req :Request, res :Response) {
       const establecimiento = await pool.query('SELECT * FROM establecimiento');
        res.json(establecimiento);
    }

    public async create (req :Request, res :Response) {
       await pool.query('INSERT INTO establecimiento set ?', [req.body]);
        console.log(req.body);
        res.json( {text:"establecimiento añadido"});
    } 

    public async getone (req :Request, res :Response) {
        const {id} = req.params;
       const establecimiento = await pool.query('SELECT * FROM establecimiento WHERE id_est = ?', [id]);
       
        if(establecimiento.length > 0){
            return res.json(establecimiento[0]);
        }
        else{
        res.status(404).json({text: 'el establecimiento no existe'});
        }
        
    }

    public async delete (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('DELETE FROM establecimiento WHERE id_est = ?', [id]);
        res.json({message: 'establecimiento eliminada'});
    }

    public async update (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('UPDATE establecimiento set ? WHERE id_est = ?', [req.body,id]);
        res.json({text: 'establecimiento actualizada'});
    }
}


export const establecimientoController = new EstablecimientoController();