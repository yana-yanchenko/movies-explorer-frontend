export const convertMovies = (data) => {
  return data.map(({
      country,
      director,
      description,
      duration,
      image: {
        url,
        formats: {
          thumbnail: {
            url: thumbnailUrl,
          }
        }
      },
      trailerLink: trailer,
      id: movieId,
      nameRU,
      nameEN,
      year,
    }) => ({
      country: country || 'Не известно',
      director: director || 'Не известно',
      description: description || 'Не известно',
      duration: duration || 'Не известно',
      image: 'https://api.nomoreparties.co' + url,
      trailer: trailer || 'Не известно',
      thumbnail: 'https://api.nomoreparties.co' + thumbnailUrl,
      movieId: movieId,
      nameRU: nameRU || nameEN || 'Не известно',
      nameEN: nameEN || 'Не известно',
      year: year || 'Не известно',
    })

  )
}