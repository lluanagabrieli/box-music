import { Environment } from "../environment.model";

export const environment: Environment = {
  production: false,
  nomeAba: 'VagaRock',
  theme: 'vagalume',
  estrutura: {
    interna: 'secondary',
    externa: 'primary',
  },
  url: {
    web: 'http://localhost:4202',
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
    telefone: '(35)0000-0000',
  },
  apiUrl: 'http://localhost:8080',
  clientId: 'ms-vagalume',
  clientSecret: '00000000',
  realmName: 'ms-spotify-realm',
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
