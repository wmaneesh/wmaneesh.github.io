const wholeNoteUrl = "images/whole-note.svg";
const fullLedger = "images/full_score.png";

let staffLayer = document.getElementById("staff-layer");
let staffCtx = staffLayer.getContext("2d");

let noteLayer = document.getElementById("note-layer");
let noteCtx = noteLayer.getContext("2d");

const drawWholeNote = (posY) => {
  const image = new Image();
  image.src = wholeNoteUrl;
  image.onload = () => {
    noteCtx.drawImage(image, 450, posY, 40, 27);
  };
};

const drawLedgerLine = (postY) => {
  noteCtx.moveTo(430, postY);
  noteCtx.lineTo(500, postY);
  noteCtx.lineWidth = 3;
  noteCtx.stroke();
};

const drawTrebleNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //middleC
    case 0:
      drawWholeNote(262 - octave * 96);
      if (needLedgerLine) {
        drawLedgerLine(276);
      }
      break;
    //D
    case 1:
      drawWholeNote(248.5 - octave * 96);
      if (needLedgerLine) {
        drawLedgerLine(276);
      }
      break;
    //E
    case 2:
      drawWholeNote(235 - octave * 96);
      break;
    //F
    case 3:
      drawWholeNote(221.5 - octave * 96);
      break;
    //G
    case 4:
      drawWholeNote(208 - octave * 96);
      break;
    //A
    case 5:
      drawWholeNote(194.5 - octave * 96);
      if (needLedgerLine) {
        drawLedgerLine(112);
      }
      break;
    //B
    case 6:
      drawWholeNote(180 - octave * 96);
      break;
  }
};

const drawBassNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //E
    case 0:
      drawWholeNote(483.5 - octave * 97);
      if (needLedgerLine) {
        drawLedgerLine(497);
      }
      break;
    //F
    case 1:
      drawWholeNote(470 - octave * 97);
      break;
    //G
    case 2:
      drawWholeNote(456.5 - octave * 97);
      break;
    //A
    case 3:
      drawWholeNote(443 - octave * 97);
      break;
    //B
    case 4:
      drawWholeNote(429.5 - octave * 97);
      break;
    //C
    case 5:
      drawWholeNote(416 - octave * 97);
      if (needLedgerLine) {
        drawLedgerLine(333);
      }
      break;
    //D
    case 6:
      drawWholeNote(401.5 - octave * 97);
      break;
  }
};

const drawFullLedgerLine = () => {
  const image = new Image();
  image.src = fullLedger;
  image.onload = () => {
    staffCtx.drawImage(image, 0, 0, 950, 600);
  };
};

const clearCanvas = () => {
  staffCtx.clearRect(0, 0, 950, 550);
  noteCtx.clearRect(0, 0, 950, 550);
};

drawFullLedgerLine();

// const trebleImageUrl = "images/treble-clef.svg";
// const bassImageUrl = "images/bass-clef.svg";

// const drawTrebleClef = () => {
//   const image = new Image();
//   image.src = trebleImageUrl;
//   image.onload = () => {
//     noteCtx.drawImage(image, 25, 19, 210, 210);
//   };
// };

// const drawBassClef = () => {
//   const image = new Image();
//   image.src = bassImageUrl;
//   image.onload = () => {
//     noteCtx.drawImage(image, 100, 15, 100, 200);
//   };
// };

//increment by 30 to go to each space starting from 60 (E)
//increment by 30 to go to each line starting from 75 (D)
// const drawStaff = () => {
//   staffCtx.beginPath();
//   staffCtx.moveTo(0, 60);
//   staffCtx.lineTo(800, 60);
//   staffCtx.stroke();

//   staffCtx.moveTo(0, 90);
//   staffCtx.lineTo(800, 90);
//   staffCtx.stroke();

//   staffCtx.moveTo(0, 120);
//   staffCtx.lineTo(800, 120);
//   staffCtx.stroke();

//   staffCtx.moveTo(0, 150);
//   staffCtx.lineTo(800, 150);
//   staffCtx.stroke();

//   staffCtx.moveTo(0, 180);
//   staffCtx.lineTo(800, 180);
//   staffCtx.stroke();

//   staffCtx.moveTo(0, 180);
//   staffCtx.lineTo(800, 180);
//   staffCtx.stroke();
// };
