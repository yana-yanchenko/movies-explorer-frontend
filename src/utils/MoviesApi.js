class MoviesApi {
  constructor(option) {
    this._url = option.url
  }

  _handleResponse(res){
    if(res.ok){
      return res.json()
    }
    return Promise.reject(new Error(res.status))
  }

  getMovies(){
    return fetch(`${this._url}`)
    .then(this._handleResponse)
  }
}

export const moviesApi = new MoviesApi({
  url:'https://api.nomoreparties.co/beatfilm-movies'
})