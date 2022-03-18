const textArea = document.querySelector("textarea");
const btnUpper = document.getElementById("upper-case");
const btnLower = document.getElementById("lower-case");
const btnProper = document.getElementById("proper-case");
const btnSentence = document.getElementById("sentence-case");
const btnDownload = document.getElementById("save-text-file");

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

btnUpper.addEventListener("click", function() {
    textArea.value = textArea.value.toUpperCase();
});

btnLower.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});

btnProper.addEventListener("click", function () {
    let textArr = textArea.value.toLowerCase().split(" ");
    let newText = [];
    let letterUpper = [];
    let textUpper = [];

    for (let i = 0; i < textArr.length; i++) {
        let letter = textArr[i].split("");
        newText.push(letter);
        letterUpper.push(letter[0].toUpperCase());
    }

    letterUpper.forEach((value, index) => {
        newText[index][0] = value;
        textUpper.push(newText[index].join(''));
    });

    textArea.value = textUpper.join(' ');
});

btnSentence.addEventListener("click", function () {
    let textArr = textArea.value.toLowerCase().split(". ");
    let newText = [];
    let letterUpper = [];
    let textUpper = [];

    for (let i = 0; i < textArr.length; i++) {
        let letter = textArr[i].split("");
        newText.push(letter);
        letterUpper.push(letter[0].toUpperCase());
    }

    letterUpper.forEach((value, index) => {
        newText[index][0] = value;
        textUpper.push(newText[index].join(''));
    });

    textArea.value = textUpper.join('. ');
});

btnDownload.addEventListener("click", function() {
    download("text.txt",textArea.value);
});