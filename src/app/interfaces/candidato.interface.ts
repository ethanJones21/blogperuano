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
    vicepresidentes: string[];
    cambioConstitucion: string;
    reformaPolitica: string;
    biografia: string;
    sentenciados: number;
    procesoJNE: boolean;
}

export interface soloVotos {
    name: string;
    value: number;
}