const API_KEY = 'live_xJBVa7ataT2OivszAo479Y7YKh91impeQMUhuC2CyYtUr5X8nHxSxVi3WbopKTVI';
const catApiUrl = 'https://api.thecatapi.com/v1/breeds';
const catApiImageUrl = 'https://api.thecatapi.com/v1/images';

function fetchBreeds() {
  return fetch(`${catApiUrl}/?api_key=${API_KEY}`).then(r => r.json());
}

function fetchCatByBreed(catId) {
  return fetch(
    `${catApiImageUrl}/search?breed_ids=${catId}&api_key=${API_KEY}`
  ).then(response => response.json());
}

export { fetchBreeds, fetchCatByBreed };
