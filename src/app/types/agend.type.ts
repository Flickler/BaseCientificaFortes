export type Agend = {
  id: string;
  controleData: {
    atipico: boolean;
    dataRefeicao: string;
    descricao: string;
  };
  obra: {
    identificacao: string;
  };
};

export type UpdateAgend = {
  obras: { id: string }[] | null;
  controleData: {
    dataRefeicao: string;
    descricao: string;
    atipico: boolean;
  };
};
