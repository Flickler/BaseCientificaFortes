import { RegisterAdress } from './address';

export type RegisterUser = Partial<{
  matricula: string;
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  tipoRegistro: string;
  address: RegisterAdress;
}>;
