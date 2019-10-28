import baixo from '@/plugins/database/categoria/baixo/index'

const LinkCart = 'https://api.whatsapp.com/send?phone=5521964661433&text='

export default {
  link: {
    cart: LinkCart
  },

  catalog: {
    home: [
      {
        nome: 'Piano Yamaha',
        descricao: 'P155 stage 88 teclas',
        preco: '18.800',
        categoria: 'piano/yamaha',
        imagem: require('@/assets/img/catalog/home/piano-yamaha.jpg')
      },
      {
        nome: 'Órgão Hammond',
        descricao: 'Tokai Tx5 Classic',
        preco: '20.000',
        categoria: 'orgao/hammond',
        imagem: require('@/assets/img/catalog/home/orgao-hammond.jpg')
      },
      {
        nome: 'Baixo Fender',
        descricao: 'Original American Bass',
        preco: '2.099',
        categoria: 'baixo/fender',
        imagem: require('@/assets/img/catalog/home/baixo-fender.jpg')
      },
      {
        nome: 'Guitarra Fender',
        descricao: 'Strato standard case',
        preco: '1.500',
        categoria: 'guitarra/fender',
        imagem: require('@/assets/img/catalog/home/guitarra-fender.jpg')
      },
      {
        nome: 'Bateria Yamaha',
        descricao: 'Recording Custom',
        preco: '7.859',
        categoria: 'bateria/yamaha',
        imagem: require('@/assets/img/catalog/home/bateria-yamaha.jpg')
      }
    ],

    categoria: {
      baixo
    }
  }
}
