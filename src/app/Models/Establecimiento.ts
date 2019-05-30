export interface Establecimiento{
    id_est?: number;
    tip_clie?: string;
    nom_est?: string;
    cal_est?: number;
    dir_est?: string;
    auto_mail?: number;
    auto_tele?: number;
    id_clie?: number;
    act_est?: number;
    est_clie?: number;
}

// Esta interface es llamada en el componente establecimiento para tener acceso a estos datos, que son los que estan presentes en la base datos.