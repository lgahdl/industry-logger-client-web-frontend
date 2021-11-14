class Utils {
  convertExpressionToSlug = expression => {
    let words = expression.split(' ')
    if (!words || words.length === 0) {
      return ''
    }
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const normalizedWords = words.join('').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return normalizedWords && normalizedWords.length > 0 ? normalizedWords.join('-')
      .toLowerCase() : ''
  }
}

const utils = () => {
  let instance

  function createInstance() {
    const newInstance = new Utils()
    return newInstance
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    },
  }
}

export default utils().getInstance()
