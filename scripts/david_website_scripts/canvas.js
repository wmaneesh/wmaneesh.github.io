const wholeNoteUrl = "images/david_website_images/whole-note.svg";
const fullLedger = "images/david_website_images/full_score.png";

let staffLayer = document.getElementById("staff-layer");
let staffCtx = staffLayer.getContext("2d");

let noteLayer = document.getElementById("note-layer");
let noteCtx = noteLayer.getContext("2d");

const drawWholeNote = (posY) => {
  const image = new Image();
  image.src = wholeNoteUrl;
  image.onload = () => {
    noteCtx.drawImage(image, 450, posY, 30, 20);
  };
};

const drawLedgerLine = (postY) => {
  noteCtx.moveTo(430, postY);
  noteCtx.lineTo(500, postY);
  noteCtx.lineWidth = 2;
  noteCtx.stroke();
};

const drawTrebleNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //middleC
    case 0:
      drawWholeNote(174 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(185);
      }
      break;
    //D
    case 1:
      drawWholeNote(165 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(276);
      }
      break;
    //E
    case 2:
      drawWholeNote(155 - octave * 64);
      break;
    //F
    case 3:
      drawWholeNote(146 - octave * 64);
      break;
    //G
    case 4:
      drawWholeNote(137 - octave * 64);
      break;
    //A
    case 5:
      drawWholeNote(128 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(75);
      }
      break;
    //B
    case 6:
      drawWholeNote(119 - octave * 64);
      break;
  }
};

const drawBassNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //E
    case 0:
      drawWholeNote(320 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(330);
      }
      break;
    //F
    case 1:
      drawWholeNote(312 - octave * 64);
      break;
    //G
    case 2:
      drawWholeNote(303 - octave * 64);
      break;
    //A
    case 3:
      drawWholeNote(294 - octave * 64);
      break;
    //B
    case 4:
      drawWholeNote(285 - octave * 64);
      break;
    //C
    case 5:
      drawWholeNote(276 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(222);
      }
      break;
    //D
    case 6:
      drawWholeNote(267 - octave * 64);
      break;
  }
};

const drawFullLedgerLine = () => {
  const image = new Image();
  image.src = fullLedger;
  image.onload = () => {
    staffCtx.drawImage(image, 150, 0, 650, 400);
  };
};

const clearCanvas = () => {
  staffCtx.clearRect(0, 0, 950, 550);
  noteCtx.clearRect(0, 0, 950, 550);
};



// drawFullLedgerLine();

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
