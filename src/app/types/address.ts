export type RegisterAdress = Partial<{
  zipCode: string;
  street: string;
  number: number | null;
  area: string;
  city: string;
  state: string;
  complement: string | null;
}>;
