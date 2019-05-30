export interface Contacto{
    id_clie?: number;
    tip_id?: string;
    nom_clie?: string;
    ape_clie?: string;
    dir_clie?: string;
    bar_clie?: string;
    tel_clie?: number;
    naci_clie?: string;
    fec_clie?: Date;
    estC_clie?: string;
    email_clie?: string;
    loc_clie?: string;
    id_camp?: number;
}

// Esta interface es llamada en el componente contacto para tener acceso a estos datos, que son los que estan presentes en la base datos.