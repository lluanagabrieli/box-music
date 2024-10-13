import { Environment } from "../environment.model";

export const environment: Environment = {
  production: false,
  nomeAba: 'SpotiRock',
  theme: 'spotify',
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
  clientId: 'ms-spotify',
  clientSecret: '00000000',
  realmName: 'ms-spotify-realm',
  color: {
    primary_color: '#1DB954',
    primary_color_2: '#000000',
    primary_color_3: '#181818',
    secondary_color: '#E0E0E0',
    secondary_color_2: '#FFFFFF',
    secondary_color_3: '#19A974',
  },
  favIcon:
    'https://.png',
};
