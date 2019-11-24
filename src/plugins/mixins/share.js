export default {
  methods: {
    socialShare (
      title,
      text,
      url
    ) {
      if (navigator.share) {
        navigator.share({
          title: title,
          text: text,
          url: url
        })
      }
    }
  }
}
