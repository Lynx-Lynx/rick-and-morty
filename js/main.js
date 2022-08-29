const NEXT = document.getElementsByClassName('characters__button-btn')[0];
const SEARCH = document.getElementsByClassName('searchbox__button-btn')[0];
const INPUT = document.getElementsByClassName('searchbox__input-field')[0];
const GENDER_SELECTOR = document.getElementsByClassName('select__options-gender')[0];
const SPECIES_SELECTOR = document.getElementsByClassName('select__options-species')[0];
const RESET = document.getElementsByClassName('searchbox__reset')[0];

import Loader from './modules/loader.js';
const creatures = new Loader();

function resetAllInputs() {
  INPUT.value = '';
  GENDER_SELECTOR.value = '';
  SPECIES_SELECTOR.value = '';
}

function onWindowLoad() {
  creatures.loadCharacters();
}

function onLoad() {
  creatures.loadNextPage();
}

function onGenderFilter() {
  SPECIES_SELECTOR.value = '';
  creatures.filterCharacterByGender(GENDER_SELECTOR.value);
}

function onSpeciesFilter() {
  GENDER_SELECTOR.value = '';
  creatures.filterCharacterBySpecies(SPECIES_SELECTOR.value);
}

function onSearch() {
  creatures.searchCharacter(INPUT.value);
  resetAllInputs();
}

function onReset() {
  creatures.resetData();
  resetAllInputs();
}

window.addEventListener('load', onWindowLoad)
NEXT.addEventListener('click', onLoad)
SEARCH.addEventListener('click', onSearch)
RESET.addEventListener('click', onReset)
GENDER_SELECTOR.addEventListener('input', onGenderFilter)
SPECIES_SELECTOR.addEventListener('input', onSpeciesFilter)