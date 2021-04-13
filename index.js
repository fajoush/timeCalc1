let resultContainer = document.getElementById('resultContainer');
let resultTime = document.getElementById('resultTime');
// Start Input
let startInputHour = document.querySelector('.startInput-hour');
let startInputMin = document.querySelector('.startInput-min');
// End Input
let endInputHour = document.querySelector('.endInput-hour');
let endInputMin = document.querySelector('.endInput-min');
//  Add Button
const addBtn = document.querySelector('.addBtn');
let sectionEntries = document.getElementById("entries");


let HOUR = 0;
let MIN = 0;

// here goes the Method for calculating Time

function timeRemain(SHour, SMin, EHour = 0, EMin = 0) {
    let myResults = new Array();

    if(isNaN(SHour) || isNaN(SMin) || isNaN(EHour) || isNaN(EMin)){
        
    myResults[0] = 0;
    myResults[1] = 0;

    }
    else
    {
    let resultOfHour = EHour - SHour;
    if (EMin < SMin) {
        resultOfHour--;
        EMin += 60;
    }
    let resultOfMin = parseInt(EMin) - parseInt(SMin);

    myResults = new Array();
    myResults[0] = parseInt(resultOfHour);
    myResults[1] = parseInt(resultOfMin);
}
return myResults;
}


addBtn.addEventListener('click', () => {
    let SH = parseInt(startInputHour.value);
    let SMH = parseInt(startInputMin.value);
    
    let EH = parseInt(endInputHour.value);
    let EMH = parseInt(endInputMin.value);

    let myResult = timeRemain(SH, SMH, EH, EMH)
    RESULTADD(myResult[0], myResult[1]);


// we are here to append in section 
    let entrieChild = document.createElement("p");
    // const BR = document.createElement("br");
    if (isNaN(SH)) {
        entrieChild.textContent = "00:00-------X";
        sectionEntries.appendChild(entrieChild);
    } 
    else {
        console.log("defined");
        entrieChild.textContent = `${myResult[0]}:${myResult[1]}-------X`;
        sectionEntries.appendChild(entrieChild);
    }
    resultTime.textContent = `${HOUR}:${MIN}`;
    
    // we need to disapear die P tags after touching or clicking on them!

    
    resetInputs();

})

function resetInputs() {
    startInputHour.value = "";
    startInputMin.value = "";
    endInputHour.value = "";
    endInputMin.value = "";
}

function RESULTADD(hour, min) {
    HOUR += hour;
    MIN += min;
    if (MIN >= 60) {
        MIN = 0;
        HOUR++
    }


}