import Baixo from '@/plugins/database/categoria/baixo/index.js'

export default {
  catalog: {
    home: [
      {
        nome: 'Piano Yamaha',
        preco: '18.800',
        categoria: 'piano',
        imagem: require('@/assets/img/catalog/home/piano-yamaha.png')
      },
      {
        nome: 'Órgão Hammond',
        preco: '20.000',
        categoria: 'órgão',
        imagem: require('@/assets/img/catalog/home/orgao-hammond.png')
      },
      {
        nome: 'Baixo Fender',
        preco: '2.099',
        categoria: 'baixo',
        imagem: require('@/assets/img/catalog/home/baixo-fender.png')
      },
      {
        nome: 'Guitarra Fender',
        preco: '1.500',
        categoria: 'guitarra',
        imagem: require('@/assets/img/catalog/home/guitarra-fender.png')
      },
      {
        nome: 'Bateria Yamaha',
        preco: '7.859',
        categoria: 'bateria',
        imagem: require('@/assets/img/catalog/home/bateria-yamaha.png')
      }
    ],

    categorias: {
      baixoFender: Baixo.Fender
    }
  }
}
