class MainApi {
  constructor(config) {
    this._url = config.url
    this._headers = config.headers
  }


  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }


  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      .then(this._handleResponse)
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(this._handleResponse)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token)
          return data
        }
      })
  }

  updateMe(data, token) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email
        })
      })
      .then(this._handleResponse)
  }

  getMe(token) {
    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(this._handleResponse)
  }

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(this._handleResponse)
  }

  setMovieUser(data, token) {
    return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          description: data.description,
          duration: data.duration,
          image: data.image,
          trailer: data.trailer,
          thumbnail: data.thumbnail,
          movieId: data.movieId,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          year: data.year,
        })
      })
      .then(this._handleResponse)
  }

  deleteMovieUser(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(this._handleResponse)
  }

}


export const mainApi = new MainApi({
  url: "https://api-explorer-diploma.nomoredomains.rocks",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})