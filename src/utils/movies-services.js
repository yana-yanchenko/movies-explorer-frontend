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
    trailer: trailer || 'https://api.nomoreparties.co' + thumbnailUrl,
    thumbnail: 'https://api.nomoreparties.co' + thumbnailUrl,
    movieId: movieId,
    nameRU: nameRU || nameEN || 'Не известно',
    nameEN: nameEN || 'Не известно',
    year: year || 'Не известно',
  }))
}

export const filterMoviesShorts = (data) => data.filter(({
  duration
}) => duration <= 40)

export const filterKeywords = (collection, keyword) => collection.filter(({
  nameRU
}) => nameRU.toLowerCase().includes(keyword.toLowerCase()));

export const timeConventer = (data) => {
  const hour = Math.floor(data / 60);
  const minutes = data % 60;
  let time = ``;
  if (hour > 0) {
    time += hour + "ч ";
  }
  if (minutes > 0) {
    time += minutes + "м";
  }
  return time;
};