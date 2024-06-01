export const environment: {
  apiUrl: string;
  administrators: { email: string; password: string }[];
} = {
  // apiUrl: 'https://localhost:7156/api/',
  apiUrl: 'https://fotes-alimentacao-api.onrender.com/api/',
  administrators: [
    {
      email: 'admin@admin.com',
      password: '*123456*',
    },
  ],
};
