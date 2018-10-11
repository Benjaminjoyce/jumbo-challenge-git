import axios from 'axios';
import md5 from 'md5';

export const FETCH_CHARACTERS = 'fetch_characters';
export const FETCH_CHARACTER = 'fetch_character';

const MARVEL_URL = 'https://gateway.marvel.com:443/v1/public/characters';
const PUBLIC_KEY = 'f4a98ab558f3985f917fbc86ab5bf8a5';
const PRIV_KEY = '037048bbc0323698281e29bb0f596cfc365018c2';

const ts = Date.now;
const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);

export function fetchCharacters() {
  const URL = `${MARVEL_URL}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const request = axios.get(URL);
  return { type: FETCH_CHARACTERS, payload: request };
}

export function fetchCharacter(id) {
  const ts = Date.now;
  const hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  const URL = `${MARVEL_URL}/${id}?apikey=${PUBLIC_KEY}&hash=${hash}`;
  const request = axios.get(URL);
  return {
    type: FETCH_CHARACTER,
    payload: request
  };
}
