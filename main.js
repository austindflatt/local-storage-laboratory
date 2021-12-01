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
