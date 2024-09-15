import { Environment } from "../environment.model";

export const environment: Environment = {
  production: false,
  nomeAba: 'SpotiRock',
  theme: 'spotirock',
  estrutura: {
    interna: 'secondary',
    externa: 'primary',
  },
  url: {
    web: 'http://localhost:4202',
    site: '',
    backend: 'http://localhost:8080',
  },
  politicasDePrivacidade:'https://spotirock.com/pt/politicas-privacidade/',
  termosDeAcesso: 'https://spotirock.com/pt/termos-uso/',
  images: {
    logo: 'assets/wl-image/spotirock/logo.png',
    logobranco: 'assets/wl-image/spotirock/logo.png',
  },
  suporte: {
    email: 'contato@spotirock.com',
    telefone: '(35)0000-0000',
  },
  apiUrl: 'http://localhost:8080',
  clientId: 'ms-spotirock',
  clientSecret: '00000000',
  realmName: 'ms-spotirock-realm',
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
