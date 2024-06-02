export const environment: {
  apiUrl: string;
  administrators: { email: string; password: string }[];
} = {
  apiUrl: 'https://fotes-alimentacao-api.onrender.com/api/',
  administrators: [
    {
      email: 'administrador@fortes.com',
      password: '*12345678*',
    },
  ],
};
