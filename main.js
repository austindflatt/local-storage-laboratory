// Challenge 1:
const saveLocalStorageForm = document.querySelector('#saveLocalStorageForm');
const inputSave = document.querySelector('#inputSave');
const savedInput = document.querySelector('#savedInput');

const savedValue = localStorage.getItem('savedValue');
if (savedValue === null) {
    savedInput.innerText = 'Nothing stored in local storage.';
} else {
    savedInput.innerText = savedValue;
}

saveLocalStorageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('savedValue', inputSave.value);
});

// Challenge 2:
const numberValue = document.querySelector('#counter');
let counter = parseInt(localStorage.getItem('value')) || 0;
counter++;
localStorage.setItem('value', JSON.stringify(counter));
if (counter === null) {
    numberValue.innerText = 'No page loads yet';
} else {
    numberValue.innerText = `This page has been loaded ${counter} times`
};

// Challenge 3:
const saveListForm = document.querySelector('#saveListForm');
const inputList = document.querySelector('#inputList');
const savedList = document.querySelector('#savedList');
const unsavedList = document.querySelector('#unsaved');

const savedOl = localStorage.getItem('savedOl');
if (savedOl === null) {
    unsavedList.innerHTML = 'Nothing saved to your list.';
} else {
    savedList.innerHTML = `<li>${savedOl}</li>`;
}

saveListForm.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('savedOl', inputList.value);
});