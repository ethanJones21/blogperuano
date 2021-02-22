export interface Candidato {
    id: string;
    nombre: string;
    postula: string;
    plan: string[];
    partido: string;
    imgCandidato: string;
    imgPartido: string;
    url: string;
    votos: number;
    biografia?: string;
}