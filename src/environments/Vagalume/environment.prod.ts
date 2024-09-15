import { Environment } from "../environment.model";

export const environment: Environment = {
  production: true,
  nomeAba: 'VagaRock',
  theme: 'vagarock',
  estrutura: {
    interna: 'secondary',
    externa: 'secondary',
  },
  url: {
    web: 'http://localhost:4201',
    site: '',
    backend: 'http://localhost:8080',
  },
  politicasDePrivacidade:'https://vagarock.com/pt/politicas-privacidade/',
  termosDeAcesso: 'https://vagarock.com/pt/termos-uso/',
  images: {
    logo: 'assets/wl-image/vagarock/logo.png',
    logobranco: 'assets/wl-image/vagarock/logo.png',
  },
  suporte: {
    email: 'contato@vagarock.com',
    telefone: '(35) 0000-0000',
  },
  apiUrl: 'http://localhost:8080',
  clientId: 'ms-vagarock',
  clientSecret: '00000',
  realmName: 'ms-vagarock-realm',
  color: {
    primary_color: '#000',
    primary_color_2: '#000',
    primary_color_3: '#000',
    secondary_color: '#000',
    secondary_color_2: '#000',
    secondary_color_3: '#000',
  },
  favIcon:
    'https://.png',
};
