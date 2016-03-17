'use strict';

/**
 * Makes a request to Etsy's API and returns a promise with JSON Data
 * @param  String searchTerm
 * @return Promise
 */
function fetchEtsy(searchTerm) {
  const apiKey = `ki0carhy6hn0ldkouxbju1wq`;
  const url = `https://api.etsy.com/v2/listings/active.js?` +
    `api_key=${apiKey}&keywords=${searchTerm}&includes=Images,Shop&sort_on=score`;

  return fetch(url).then((res) => {
    return res.json;
  });
}
