//Yonatan Hameleh

let count = 0;
let shotsCountElement = document.getElementById("shots-count");
const savedShotsArray = [];
let savesParagraphElement = document.getElementById("saves");
function increment(){
    count++;
    shotsCountElement.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        shotsCountElement.textContent = count;
    }
}

function reset() {
    shotsCountElement.textContent = 0;
    count = 0;
}

function save() {
    savedShotsArray.push(count);
    count = 0;
    shotsCountElement.textContent = 0;
    if (savedShotsArray.length < 2) {
        savesParagraphElement.textContent += savedShotsArray[savedShotsArray.length-1];
    }
    else {
        savesParagraphElement.textContent += " | " + savedShotsArray[savedShotsArray.length-1];
    }
}

function resetSaves() {
    savesParagraphElement.textContent = "Saves: ";
    while (savedShotsArray.length > 0) {
        savedShotsArray.pop();
    }
}