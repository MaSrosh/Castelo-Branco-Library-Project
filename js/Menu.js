document.addEventListener("DOMContentLoaded", function() {
    for(elemIndex = 1; elemIndex <= 4; elemIndex++){
        showSubText(elemIndex);
    }
});

function showSubText(elemIndex){
    const fiftyCharacter = document.getElementById(`fiftyCharacter${elemIndex}`);
    const detail = document.getElementById(`detail${elemIndex}`);
    let subCharacter = detail.textContent.substring(0, 50) + "...";
    fiftyCharacter.textContent = subCharacter;
}

function toggleMoreLessBtn(elemIndex){
    // avoid referesh the page
    event.preventDefault();
    const detail = document.getElementById(`detail${elemIndex}`);
    const toggleButton = document.getElementById(`toggleButton${elemIndex}`);
    const fiftyCharacter = document.getElementById(`fiftyCharacter${elemIndex}`);
    
    if (detail.style.display === "none") {
        detail.style.display = "inline";
        fiftyCharacter.style.display  = "none";
        toggleButton.textContent = "Read Less";

    } else {
        detail.style.display = "none";
        fiftyCharacter.style.display = "inline";
        toggleButton.textContent = "Read More";
    }
}