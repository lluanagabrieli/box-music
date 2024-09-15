export interface Environment {
  production: boolean;
  nomeAba: string;
  theme: string;
  estrutura: {
    interna: 'primary' | 'secondary';
    externa: 'primary' | 'secondary';
  };
  politicasDePrivacidade?: string,
  termosDeAcesso?: string,
  url: {
    web: string;
    site: string;
    backend: string;
  };
  suporte: {
    email: string;
    telefone: string;
  };
  images: {
    logo: string;
    logobranco: string;
  };
  apiUrl: string;
  clientId: string;
  clientSecret: string;
  realmName: string;
  color: {
    primary_color: string;
    primary_color_2: string;
    primary_color_3: string;
    secondary_color: string;
    secondary_color_2: string;
    secondary_color_3: string;
  };
  favIcon?: string;
}

export const defaultEnvironment: Environment = {
production: false,
  nomeAba: 'SpotiRock',
  theme: 'spotirock',
  estrutura: {
    interna: 'secondary',
    externa: 'primary',
  },
  termosDeAcesso: 'https://spotirock.com.br/termos-contratos-e-politicas/',
  suporte: {
    email: 'suporte@spotirock.com.br',
    telefone: '(35)0000-0000',
  },
  url: {
    web: 'http://localhost:8080',
    site: 'https://spotirock.com.br/',
    backend: 'http://localhost:8080',
  },
  images: {
    logo: 'assets/wl-image/spotirock/logo.svg',
    logobranco: 'assets/wl-image/spotirock/logo.svg',
  },
  apiUrl: 'http://192.192.1.192:8080',
  clientId: 'ms-spotirock',
  clientSecret: 'aaabbbccc',
  realmName: 'ms-spotirock-realm',
  color: {
    primary_color: '#000',
    primary_color_2: '#000',
    primary_color_3: '#000',
    secondary_color: '#000',
    secondary_color_2: '#000',
    secondary_color_3: '#000',
  },
}
