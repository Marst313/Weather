import { TIMEOUT_SEC } from './config.js';

const timeout = function (second) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${second} second`));
    }, s * 1000);
  });
};

export const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(reject, function () {
      alert('Cannot get your position !');
      throw err;
    });
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);

    const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
  } catch (err) {
    throw err;
  }
};
