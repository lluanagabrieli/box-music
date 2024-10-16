import { Environment } from "../environment.model";

export const environment: Environment = {
  production: true,
  nomeAba: 'SpotiRock',
  theme: 'spotify',
  estrutura: {
    interna: 'secondary',
    externa: 'secondary',
  },
  url: {
    web: 'http://localhost:4201',
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
    telefone: '(35) 0000-0000',
  },
  apiUrl: 'http://localhost:8080',
  clientId: 'ms-spotify',
  clientSecret: '00000',
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
