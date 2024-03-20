const wholeNoteUrlRange = "images/david_website_images/whole-note.svg";
const fullLedgerRange = "images/david_website_images/800px-Grand_staff_new.png";

let staffLayerRange = document.getElementById("rangeStaff");
let staffCtxRange = staffLayerRange.getContext("2d");

let noteLayerRange = document.getElementById("rangeNote");
let noteCtxRange = noteLayerRange.getContext("2d");

const drawWholeNoteRange = (posX, posY) => {
  const image = new Image();
  image.src = wholeNoteUrlRange;
  image.onload = () => {
    noteCtxRange.drawImage(image, posX, posY, 20, 15);
  };
};

const drawLedgerLineRange = (posX, posY) => {
  noteCtxRange.beginPath();
  noteCtxRange.moveTo(posX - 15, posY);
  noteCtxRange.lineTo(posX + 30, posY);
  noteCtxRange.lineWidth = 2;
  noteCtxRange.stroke();
};

const drawTrebleNotesRange = (note, octave, needLedgerLine, posX) => {
  switch (note) {
    //middleC
    case 0:
      drawWholeNoteRange(posX, 105 - octave * 48.5);
      if (needLedgerLine) {
        drawLedgerLineRange(posX, 112.5);
      }
      break;
    //D
    case 1:
      drawWholeNoteRange(posX, 98 - octave * 48.5);
      if (needLedgerLine) {
        drawLedgerLineRange(posX, 276);
      }
      break;
    //E
    case 2:
      drawWholeNoteRange(posX, 91 - octave * 48.5);
      break;
    //F
    case 3:
      drawWholeNoteRange(posX, 84 - octave * 48.5);
      break;
    //G
    case 4:
      drawWholeNoteRange(posX, 77 - octave * 48.5);
      break;
    //A
    case 5:
      drawWholeNoteRange(posX, 70 - octave * 48.5);
      if (needLedgerLine) {
        drawLedgerLineRange(posX, 29);
      }
      break;
    //B
    case 6:
      drawWholeNoteRange(posX, 63 - octave * 64);
      break;
  }
};

const drawBassNotesRange = (note, octave, needLedgerLine, posX) => {
  switch (note) {
    //E
    case 0:
      drawWholeNoteRange(posX, 230 - octave * 48.5);
      if (needLedgerLine) {
        drawLedgerLineRange(posX, 237);
      }
      break;
    //F
    case 1:
      drawWholeNoteRange(posX, 222.5 - octave * 48.5);
      break;
    //G
    case 2:
      drawWholeNoteRange(posX, 216.5 - octave * 48.5);
      break;
    //A
    case 3:
      drawWholeNoteRange(posX, 209.5 - octave * 48.5);
      break;
    //B
    case 4:
      drawWholeNoteRange(posX, 202.5 - octave * 48.5);
      break;
    //C
    case 5:
      drawWholeNoteRange(posX, 195.5 - octave * 48.5);
      if (needLedgerLine) {
        drawLedgerLineRange(posX, 154.5);
      }
      break;
    //D
    case 6:
      drawWholeNoteRange(posX, 188.5 - octave * 64);
      break;
  }
};

const drawFullLedgerLineRange = () => {
  const image = new Image();
  image.src = fullLedgerRange;
  image.onload = () => {
    staffCtxRange.drawImage(image, 15, 25, 200, 200);
  };
};

drawFullLedgerLineRange();
drawBassNotesRange(0, 0, true, 115);
drawTrebleNotesRange(5, 1, true, 175);

const lowerBounderUp = (event, currentUpperBoundValue, lowerRange) => {
  const buttonValue = event.target.value;

  if (buttonValue === "25") {
    // console.log("move up", event.target.value);
    lowerBoundUpButton.disabled = true;
  } else if (buttonValue === currentUpperBoundValue) {
    // console.log("move up", event.target.value);
    lowerBoundUpButton.disabled = true;
  } else {
    const newButtonValue = parseInt(buttonValue) + 1;
    lowerBoundUpButton.value = newButtonValue;
    lowerBoundDownButton.value = newButtonValue;
    // console.log("move up", newButtonValue);

    moveNotesOnRange(newButtonValue, lowerRange);
  }

//   console.log("new button value", lowerBoundUpButton.value);

  return lowerBoundUpButton.value;
};

const lowerBoundDown = (event, lowerRange) => {
  const buttonValue = event.target.value;

  if (buttonValue === "0") {
    // console.log("move up", event.target.value);
    lowerBoundDownButton.disabled = true;
  } else {
    const newButtonValue = parseInt(buttonValue) - 1;
    lowerBoundUpButton.value = newButtonValue;
    lowerBoundDownButton.value = newButtonValue;
    // console.log("move up", newButtonValue);

    moveNotesOnRange(newButtonValue, lowerRange);
  }
//   console.log("new button value", lowerBoundUpButton.value);
  return lowerBoundDownButton.value;
};

const upperBoundUp = (event, lowerRange) => {
  const buttonValue = event.target.value;

  if (buttonValue === "25") {
    // console.log("move up", event.target.value);
    upperBounderUpButton.disabled = true;
  } else {
    const newButtonValue = parseInt(buttonValue) + 1;
    upperBounderUpButton.value = newButtonValue;
    upperBoundDownButton.value = newButtonValue;
    // console.log("move up", newButtonValue);

    moveNotesOnRange(newButtonValue, lowerRange);
  }

//   console.log("new button value", upperBounderUpButton.value);

  return upperBounderUpButton.value;
};

const upperBoundDown = (event, currentLowerBoundValue, lowerRange) => {
  const buttonValue = event.target.value;

  if (buttonValue === "0") {
    // console.log("move up", event.target.value);
    upperBoundDownButton.disabled = true;
  } else if (buttonValue === currentLowerBoundValue) {
    // console.log("move up", event.target.value);
    lowerBoundUpButton.disabled = true;
  } else {
    const newButtonValue = parseInt(buttonValue) - 1;
    upperBounderUpButton.value = newButtonValue;
    upperBoundDownButton.value = newButtonValue;
    // console.log("move up", newButtonValue);

    moveNotesOnRange(newButtonValue, lowerRange);
  }
  return upperBoundDownButton.value;
};

const moveNotesOnRange = (newButtonValue, lowerRange) => {
  upperBounderUpButton.disabled = false;
  upperBoundDownButton.disabled = false;
  lowerBoundUpButton.disabled = false;
  lowerBoundDownButton.disabled = false;

  let noteIndex = newButtonValue;
  let noteType;
  let clefType = 0; //0 is treble
  if (noteIndex < 13) {
    noteType = bassNotes;
  } else {
    noteIndex = noteIndex - 13;
    noteType = trebleNotes;
    clefType = 1;
  }

  let note;
  let ledgerLIne = false;
  let octave = 0;
  if (noteIndex == 0 || noteIndex == 12) {
    ledgerLIne = true;
  }

  if (noteIndex >= 7) {
    octave = 1;
    note = noteType[noteIndex - 7];
  } else {
    note = noteType[noteIndex];
  }

  if (lowerRange) {
    noteCtxRange.clearRect(0, 0, 160, 250);
  } else {
    noteCtxRange.clearRect(160, 0, 250, 250);
  }

  if (clefType == 0) {
    drawBassNotesRange(note.value, octave, ledgerLIne, lowerRange ? 115 : 175);
  } else {
    drawTrebleNotesRange(
      note.value,
      octave,
      ledgerLIne,
      lowerRange ? 115 : 175
    );
  }
};
