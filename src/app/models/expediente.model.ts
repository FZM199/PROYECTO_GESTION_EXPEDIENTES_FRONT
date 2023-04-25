import { Administrado } from "./administrado.model"
import { Estad } from "./estad.model"
import { Usuario } from "./usuario.model"

export class Expediente {
    id_expediente?:number
    numero?:number
    año?:number
    partida?:string
    id_usuario?:Usuario
    id_administrado?:Administrado
    id_estado?:Estad
    fecha_modificacion?:Date
}
