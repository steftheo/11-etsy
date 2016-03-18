'use strict';

function jsonp(url) {
  return new Promise((resolve) => {
    const callbackName = `jsonp_callback_${Math.round(100000 * Math.random())}`;
    const script = document.createElement(`script`);
    window[callbackName] = function (data) {
      delete window[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    const urlBreaker = url.indexOf(`?`) >= 0 ? `&` : `?`;
    const src = `${url}${urlBreaker}callback=${callbackName}`;

    script.src = src;
    document.body.appendChild(script);
  });
}


/**
 * Makes a request to Etsy's API and returns a promise with JSON Data
 * @param  String searchTerm
 * @return Promise
 */
function fetchEtsy(searchTerm) {
  const apiKey = `ki0carhy6hn0ldkouxbju1wq`;
  const url = `https://openapi.etsy.com/v2/listings/active.js?` +
    `api_key=${apiKey}&keywords=${searchTerm}&includes=Images,Shop&sort_on=score`;

  return jsonp(url);
}
