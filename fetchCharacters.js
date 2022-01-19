const fetchCharacters = () => {
  return fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .catch(err => console.log(err));
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchCharacters,
  };
}