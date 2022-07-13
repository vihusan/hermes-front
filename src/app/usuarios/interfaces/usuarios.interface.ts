export interface GetUsuariosResponses {
    data: String[];
    total: Number;
    meta: Number;
}

export interface PostUsuariosResponses {
    ok: Boolean,
    usuario: String [],
    errors: Object[],
    token : String
}

export interface GetLoginResponses {
    data: String[],
    token: String
}