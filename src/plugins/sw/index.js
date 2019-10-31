/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Bem vindo')
    },
    registered () {
      console.log('Catalogo instalado')
    },
    cached () {
      console.log('Catalogo pronto para uso offline')
    },
    updatefound () {
      console.log('Baixando nova versão')
    },
    updated () {
      console.log('Nova versão instalada, Reinicie o Catalogo')
    },
    offline () {
      console.log('Você está offline, algumas funcionalidades podem estar indisponíveis')
    },
    error (e) {
      console.error('Erro na instalação do Catalogo:')
      console.log(e)
    }
  })
}
