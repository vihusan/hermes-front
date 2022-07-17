/**Respuesta de un Login */
export interface GetLoginResponses {
    data : HermesUser,
    token: string
}

/**Repuesta de un get  de usuario */
export interface GetUsuariosResponses{
    usuario: HermesUser,
    token: string
} 

/**Repuesta de un post de usuario */
export interface PostUsuariosResponses {
    ok: Boolean,
    usuario: string [],
    errors: Object[],
    token : string
}

/** Un usuario de hermes */
export interface HermesUser{
    nombre: string,
    email: string,
    role: string,
    estado: string,
    google: string,
    uid: string
}