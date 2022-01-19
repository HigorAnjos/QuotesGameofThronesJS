const fetchQuote = () => {
  return fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
    .then(response => response.json())
    .catch(err => console.log(err));
};


if (typeof module !== 'undefined') {
  module.exports = {
    fetchQuote,
  };
}