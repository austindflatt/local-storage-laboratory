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
