export default {
  api: {
    // urlBase: 'http://localhost:4000/v1',
    urlBase: 'https://api.maismilhas.com.br/v1',
    endpoints: {
      airlines: {
        url: '/airline',
      },
      bank: {
        url: '/bank',
      },
      postairline: {
        url: '/postairline',
      },
      quotationverify: {
        url: '/quotation/verify',
      },
      quotations: {
        url: '/quotation',
      },
      quotationadmin: {
        url: '/quotation/admin',
      },
      done: {
        url: '/quotation/done',
      },
      users: {
        url: '/user',
      },
      usersview: {
        url: '/user/view',
      },
      editor: {
        url: '/editor',
      },
      news: {
        url: '/news',
      },
      posts: {
        url: '/posts',
      },
      tag: {
        url: '/tag',
      },
      comment: {
        url: '/comment',
      },
      commentlike: {
        url: '/comment/like',
      },
      comentadmin: {
        url: '/comment/admin',
      },
      userquotation: {
        url: '/user/quotation',
      },
      usersearch: {
        url: '/user/search',
      },
      signup: {
        url: '/user/signup',
      },
      managers: {
        url: '/manager',
      },
      testimony: {
        url: '/testimony',
      },
      newsletter: {
        url: '/newsletter',
      },
      newsletterSubscribe: {
        url: '/newsletter/subscribe',
      },
      login: {
        url: '/login',
      },
      loginPassword: {
        url: '/login/password',
      },
      cep: {
        external: true,
        url: 'https://viacep.com.br/ws',
      },
      country: {
        external: true,
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      },
    },
  },
  routes: {
    publics: ['/login', '/login/'],
  },
  UserSession: 'UYEDCTuI%#@cgG6654@$%',
  TokenSession: 'emY}q#{*m6N<B<~eQ^@J',
  ObjectSession: 'Ad@dZ}%g]M?@A+(;$=4F',
  AirlineSession: 'AIL$CTrT%$#3fvDE%¨%#',
  Location: 'https://maismilhas.com.br',
  user: {
    lang: 'pt-BR',
  },
}
