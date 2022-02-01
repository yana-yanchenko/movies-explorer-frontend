class LocalServices {
  static setItem(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }

  static getItem(name) {
    const item = localStorage.getItem(name)
    return JSON.parse(item)
  }
}

export default LocalServices;