export interface Pcs {
    id: number;
    nom: string;
    marque: string;
    type: string;
    ecran: string;
    clavier: string;
    system: {
        ram: number;
        cpu: {
            marque: string;
            nom: string;
            score: number;
            core: number;
            frequenceMax: number;
            tdp: number;
        };
        hdd: {
            capacite: number;
            type: string;
            rpm: number;
            vitesseTransfert: number;
        };
        cg: {
            marque: string;
            modele: string;
            score: number;
        };
    };
    batterie: string;
    prix: number;

}
