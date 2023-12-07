export interface Cliente {
    id: number,
    nomeCompleto: string,
    cpfOuCnpj: string,
    dataNascimento: Date,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: number,
    pais: string,
    telefone: string,
    email: string,
    complemento: string,
    status: string,
    usuarioId: number,
    // Para a paginação
    totalPages: number,
    totalElements: number,
    pageNumber: number,
    size: number

}