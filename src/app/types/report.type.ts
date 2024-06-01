export type Report = {
  encarregado: string;
  refeicoes: {
    dataRefeicao: string;
    cafe: number;
    almoco: number;
    jantar: number;
  }[];
  setor: string;
};
