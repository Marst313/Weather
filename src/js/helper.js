import { TIMEOUT_SEC } from './config.js';

const timeout = function (second) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${second} second`));
    }, second * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);

    const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status}) ${response.statusText}`);

    return data;
  } catch (err) {
    throw err;
  }
};

export const getPosition = function () {
  const pos = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, ({ message }) => {
      reject(new Error(message));
      alert('Cannot get your current Position !');
    });
  });
  return pos;
};

export const slider = function () {
  setTimeout(function (second) {
    console.log(`Data coming ${second} second`);
  }),
    second * 1000;
};
