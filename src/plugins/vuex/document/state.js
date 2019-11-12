const {
  Name,
  Prefix,
  Description,
  Subject
} = require('@/plugins/database/page')

export default {
  title: Prefix,

  page: {
    name: Name,
    description: Description,
    subject: Subject
  },

  toggle: {
    drawer: false,
    search: false
  },

  footer: {
    icon: [
      'fab fa-telegram'
    ],

    link: [
      'https://t.me/CodeWalkersDevs'
    ]
  }
}
