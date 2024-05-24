import { Usuario } from './usuario.type';

export type Gestor = {
  id: string;
  gestor: Usuario;
};

export type SelectGestor = {
  id: string;
  encarregado: {
    gestor: {
      nome: string;
    };
  };
  obra: {
    identificacao: string;
  };
  setor: string;
};
