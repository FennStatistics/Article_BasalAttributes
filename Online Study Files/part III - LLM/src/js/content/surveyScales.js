/* 
Survey Scales: 
*/



/*
Use the modern version of the Fisher–Yates shuffle algorithm:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
*/
function shuffle(queslist) {
  let array_emp = [];
  for (var i = 0; i < queslist.ques.length; i++) {
    array_emp.push(i);
  }

  let j, x;
  for (i = array_emp.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array_emp[i];
    array_emp[i] = array_emp[j];
    array_emp[j] = x;
  }
  return array_emp;
}

function createitems(queslist, quesindex) {
  let quesitems = [];
  for (i = 0; i < queslist.ques.length; i++) {
    let tmp_ques = queslist.ques[quesindex[i]];
    let tmp_label = queslist.scale[quesindex[i]];

    quesitems.push({
      label: tmp_ques,
      coding: tmp_label,
    });
  }
  return quesitems;
}


function shufflePair(queslist) {
  let array_emp = [];
  for (var i = 0; i < queslist.length; i++) {
    array_emp.push(i);
  }

  let j, x;
  for (i = array_emp.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array_emp[i];
    array_emp[i] = array_emp[j];
    array_emp[j] = x;
  }
  return array_emp;
}


/* HEXACO SCALE */
let HEXACOlist = {
  ques: [
    "Der Besuch einer Kunstausstellung würde mich ziemlich langweilen.",
    "Ich bin daran interessiert, etwas über die Geschichte und Politik anderer Länder zu lernen.",
    "Ich würde es genießen, ein Kunstwerk zu schaffen, etwa einen Roman, ein Lied oder ein Gemälde.",
    "Ich denke, dass es Zeitverschwendung ist, radikalen Ideen Aufmerksamkeit zu schenken.",
    "Wenn ich die Gelegenheit dazu hätte, würde ich gerne ein Konzert mit klassischer Musik besuchen.",
    "Ich habe es noch nie wirklich gemocht, eine Enzyklopädie durchzublättern.",
    "Man hat mir schon oft gesagt, dass ich eine gute Vorstellungskraft habe.",
    "Ich mag Leute, die unkonventionelle Ideen haben.",
    "Ich halte mich nicht für einen künstlerischen oder kreativen Menschen.",
    "Ich finde es langweilig, über Philosophie zu diskutieren.",
  ],
  scale: [
    "OtE_AA_01r",
    "OtE_I_01",
    "OtE_C_01",
    "OtE_U_01r",
    "OtE_AA_02",
    "OtE_I_02r",
    "OtE_C_02",
    "OtE_U_02",
    "OtE_C_03r",
    "OtE_U_03r",
  ],
};

var index_HEXACOlist = shuffle(HEXACOlist);
console.log("HEXACOlist: ", HEXACOlist);
console.log("HEXACOlist index: ", index_HEXACOlist);

var items_HEXACO = createitems(HEXACOlist, index_HEXACOlist);
console.log(items_HEXACO.slice(0, 4));


/*  Affinity for Technology Interaction Scale  */
let ATIlist = {
  ques: [
    "Ich beschäftige mich gern genauer mit technischen Systemen.",
    "Ich probiere gern die Funktionen neuer technischer Systeme aus.",
    "In erster Linie beschäftige ich mich mit technischen Systemen, weil ich muss.",
    "Wenn ich ein neues technisches System vor mir habe, probiere ich es intensiv aus.",
    "Ich verbringe sehr gern Zeit mit dem Kennenlernen eines neuen technischen Systems.",
    "Es genügt mir, dass ein technisches System funktioniert, mir ist es egal, wie oder warum.",
    "Ich versuche zu verstehen, wie ein technisches System genau funktioniert.",
    "Es genügt mir, die Grundfunktionen eines technischen Systems zu kennen.",
    "Ich versuche, die Möglichkeiten eines technischen Systems vollständig auszunutzen.",
  ],
  scale: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ],
};

var index_ATIlist = shuffle(ATIlist);
console.log("ATIlist: ", ATIlist);
console.log("ATIlist index: ", index_ATIlist);


var items_ATI = createitems(ATIlist, index_ATIlist);
console.log(items_ATI.slice(0, 4));