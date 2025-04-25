/* 
################### global variables ###################
*/

/* for testing study */
const Required_Testing = true; // set to false for production !!!

/* number of components / elements to set progress bar */
const numElements = 11;
var numElementsCounter = 0;

/* global variables */
var URLparams_global;
var paracountclicks = 0;

// global counter variable APT
var globalCounterAPT = 0;

/* 
################### Start of Study ###################
*/

const Greetings_htmlForm = new lab.html.Form({
  title: "Greetings",
  content: textObj.greetings,
  messageHandlers: {
    run: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        if (
          study.state.meta.screen_height < 700 &&
          study.state.meta.screen_width < 1200
        ) {
          alert(
            "It seems that your screen size you are using is smaller than 1200x700 pixels (height x width):\n" +
              "> your screen width: " +
              study.state.meta.screen_width +
              " your screen height: " +
              study.state.meta.screen_height +
              "\nStudy is aborted!"
          );
          jatos.abortStudy("study aborted - screen to small");
        }
      }
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // get URL params
      if (typeof jatos.jQuery === "function") {
        URLparams_global = jatos.urlQueryParameters;
        console.log("URLparams_global:", URLparams_global);

        // check if a prolific ID is provided via URL parameter PROLIFIC study
        if (typeof URLparams_global.PROLIFIC_PID === "undefined") {
          alert(
            "Sorry, there may be a technical error! It was not possible to obtain all the necessary data from prolific. Please write to the study director that an error has occurred."
          );
          jatos.abortStudy("study aborted - no prolific ID");
        } else {
          study.options.datastore.set(
            "PROLIFIC_PID",
            URLparams_global.PROLIFIC_PID
          );
        }
      }
    },
  },
});

const InformCon_htmlForm = new lab.html.Form({
  title: "InformedConsent",
  content: textObj.informCon,
  messageHandlers: {
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS first time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

const InformConsentNO_htmlForm = new lab.html.Form({
  title: "InformedConsentNO",
  content: textObj.informConNo,
  tardy: true,
  skip: "${ study.state.dummy_informedconsent == 1}",
  messageHandlers: {
    run: function anonymous() {
      // progress bar 100%
      document.querySelector(".progress-bar").style.width = 100 + "%";
    },
  },
});

const ExclusionCriteria_htmlForm = new lab.html.Form({
  title: "ExclusionCriteria",
  content: textObj.exclusionCriteria,
  messageHandlers: {
    run: function anonymous() {},
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// not needed: Attention Check
function continueornot() {
  if ($("fieldset :checkbox:checked").length > 0) {
    // ok
    return true;
  } else {
    alert("Please check at least one of these activities.");
    return false;
  }
}

const AttentionCheck_htmlForm = new lab.html.Form({
  title: "AttentionCheck",
  content: textObj.attentionCheck,
  messageHandlers: {
    run: function anonymous() {},
    commit: () => {
      var attCheck_array = [];
      $("fieldset :checkbox").each(function () {
        if (this.checked) {
          attCheck_array.push(this.id);
        }
      });
      attCheck_array;

      study.options.datastore.set("attCheck_array", attCheck_array);
      study.options.datastore.set(
        "attCheck_text",
        $("#attCheck_OtherText").val()
      );

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const SetupStudy_htmlForm = new lab.html.Form({
  title: "SetupStudy",
  content: textObj.setupStudy,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS second time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

/* 
################### Affective Priming Task (APT) PRACTICE ###################
*/

// Randomize key assignments
const isXNegative = Math.random() < 0.5;

const keyAssignments = {
  xkey: isXNegative ? "negative" : "positive",
  mkey: isXNegative ? "positive" : "negative",
};

// instructions
const PracticeTrialsInstructions_Screen = new lab.html.Screen({
  title: "PracticeTrialsInstructions",
  tardy: false,
  responses: {
    "keypress(Space)": "",
  },
  content: `
<header>
<h3>Read the following Reaction Time Task instructions carefully for the practice trials:</h3>
</header>

 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
    <p> 
 The following explains the procedure for each trial: At the beginning of each trial, a fixation cross will appear. Please focus your gaze on the cross. After the fixation cross, an image will appear, which you should ignore. The fixation cross and the image will disappear automatically without you needing to press any key. 
    </p> 
        <p> 
        Next, a word will appear. Your task is to decide as <strong>quickly</strong> as possible whether the word is negative or positive. To do this, please press on the keyboard: 
    </p> 
    <ul> 
        <li id="x_placeholder">The <kbd>x</kbd> PLACEHOLDER</li> 
        <li id="m_placeholder"><kbd>m</kbd> PLACEHOLDER</li> 
    </ul> 
    <p> 
        Please keep one index finger of your left and right hand on the respective keys throughout the experiment. 
            </p> 
    <p> 
        Once you press one of the two keys, the next trial will start automatically. 
            </p> 
                <p> 
        You will begin with 12 practice trials. When you are ready to begin the practice trials, place your index fingers on the respective keys and press the <kbd>Spacebar</kbd> to start. 
    </p> 
  </div> 
</main>

<footer class="content-vertical-center content-horizontal-center">

</footer>
  `,
  messageHandlers: {
    run: function anonymous() {
      // Update the instructions dynamically
      $("#x_placeholder").html(
        `The <kbd>x</kbd> key if you consider the word to be <strong>${keyAssignments.xkey.toUpperCase()}</strong>, or the`
      );
      $("#m_placeholder").html(
        `The <kbd>m</kbd> key if you consider the word to be <strong>${keyAssignments.mkey.toUpperCase()}</strong>.`
      );
    },
    commit: () => {
      // reset to 0
      globalCounterAPT = 0;

      // save data
      study.options.datastore.set("key_assignment", keyAssignments);

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// fixation cross
const FixationCross_practice_Screen = new lab.html.Screen({
  title: "FixationCross_practice",
  tardy: false,
  timeout: random_Stimuli_practice[globalCounterAPT]["duration"],
  content: `
  <main class="content-canvas">
  <canvas id="canvas" width="400" height="400"></canvas>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Set cross size and position
      const crossLength = 80; // Length of each line of the cross
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const lineWidth = 2;

      // Set line style
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidth;

      // Draw the horizontal line
      ctx.beginPath();
      ctx.moveTo(centerX - crossLength / 2, centerY);
      ctx.lineTo(centerX + crossLength / 2, centerY);
      ctx.stroke();

      // Draw the vertical line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - crossLength / 2);
      ctx.lineTo(centerX, centerY + crossLength / 2);
      ctx.stroke();
    },
  },
});

// prime
const Prime_practice_Screen = new lab.html.Screen({
  title: "Prime_practice",
  tardy: false,
  timeout: 160,
  content: `
<main class="content-canvas">
  <div class="image-container">
    <img id="prime_image" src="" alt="Person Image">
  </div>
</main>
  `,
  messageHandlers: {
    run: function anonymous() {
      const primeImage = $("#prime_image");
      const imagePath =
        "src/static/primes practice/" +
        random_Stimuli_practice[globalCounterAPT]["prime"] +
        ".png";
      // Set the image source
      primeImage.attr("src", imagePath);

      primeImage.on("load", function () {
        // make the image visible only after it's loaded
        primeImage.css("visibility", "visible");
      });

      // hide the image in the inital state
      primeImage.css("visibility", "hidden");
    },
  },
});

const TrialsTask_practice_Screen = new lab.html.Screen({
  title: "TrialsTask_practice",
  tardy: false,
  responses: {
    "keypress(x)": keyAssignments["xkey"],
    "keypress(m)": keyAssignments["mkey"],
  },
  content: `
  <main class="content-canvas">
    <span id="stimulus_task" style="font-size: 70px;">xxx</span>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      $("#stimulus_task").text(
        random_Stimuli_practice[globalCounterAPT]["stimulus"]
      );
    },
    commit: () => {
      // save data
      //> stimulus
      study.options.datastore.set(
        "stimulus_practice",
        random_Stimuli_practice[globalCounterAPT]["stimulus"]
      );
      //> prime
      study.options.datastore.set(
        "prime_practice",
        random_Stimuli_practice[globalCounterAPT]["prime"]
      );
      //> response_boolean
      if (
        positiveWords_practice.includes(
          random_Stimuli_practice[globalCounterAPT]["stimulus"]
        ) &&
        study.options.datastore.state.response == "positive"
      ) {
        study.options.datastore.set("response_boolean_practice", true);
      } else if (
        negativeWords_practice.includes(
          random_Stimuli_practice[globalCounterAPT]["stimulus"]
        ) &&
        study.options.datastore.state.response == "negative"
      ) {
        study.options.datastore.set("response_boolean_practice", true);
      } else {
        study.options.datastore.set("response_boolean_practice", false);
      }

      // increase global counter:
      globalCounterAPT++;

      // no progress bar
    },
  },
});

// feedback trial
const FeedbackTrial_practice_Screen = new lab.html.Screen({
  title: "FeedbackTrial_practice",
  tardy: true,
  timeout: 2000,
  responses: {
    "keypress(Space)": "",
  },
  content: `
    <main class="content-canvas">
    <span id="placeholder_correctness"  style="font-size: 70px;">XXX</span>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      if (study.options.datastore.state.response_boolean_practice) {
        $("#placeholder_correctness").html("correct response");
      } else {
        $("#placeholder_correctness").html("incorrect response");
      }
    },
    commit: () => {
      // no progress bar
    },
  },
});

const Sequence_practice_APT = new lab.flow.Sequence({
  title: "Sequence Practice Affective Prime Task",
  shuffle: false,
  content: [
    FixationCross_practice_Screen,
    Prime_practice_Screen,
    TrialsTask_practice_Screen,
    FeedbackTrial_practice_Screen,
  ],
});

const LoopComponent_practice_APT = new lab.flow.Loop({
  template: Sequence_practice_APT,
  templateParameters: [
    {
      notneeded: 0,
    },
  ],
  sample: {
    mode: "draw-replace",
    n: random_Stimuli_practice.length, // 12
  },
  indexParameter: "counter_inner",
});

/* 
################### Affective Priming Task (APT) MAIN ###################
*/

// instructions
const ExpTrialsInstructions_Screen = new lab.html.Screen({
  title: "ExpTrialsInstructions",
  tardy: false,
  responses: {
    "keypress(Space)": "",
  },
  content: `
<header>
<h3>Read the following Reaction Time Task instructions carefully for the experimental trials:</h3>
</header>

 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
    <p> 
        The practice trials are now complete. The experimental trials will begin next. Please remember that your task is to classify the displayed word as positive or negative as QUICKLY as possible. Use the following keys: 
    </p> 
        <ul> 
        <li id="x_placeholder">The <kbd>x</kbd> PLACEHOLDER</li> 
        <li id="m_placeholder"><kbd>m</kbd> PLACEHOLDER</li> 
    </ul> 
    <p> 
        You will complete a total of four blocks, with each block containing 90 trials. 
    </p> 
    <p> 
        When you are ready to begin the experimental trials, place your index fingers on the respective keys and press the <kbd>Spacebar</kbd> to start. 
    </p> 
  </div> 
</main>

<footer class="content-vertical-center content-horizontal-center">

</footer>
  `,
  messageHandlers: {
    run: function anonymous() {
      // Update the instructions dynamically
      $("#x_placeholder").html(
        `The <kbd>x</kbd> key if you consider the word to be <strong>${keyAssignments.xkey.toUpperCase()}</strong>, or the`
      );
      $("#m_placeholder").html(
        `The <kbd>m</kbd> key if you consider the word to be <strong>${keyAssignments.mkey.toUpperCase()}</strong>.`
      );
    },
    commit: () => {
      // reset to 0
      globalCounterAPT = 0;

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// fixation cross
const FixationCross_Screen = new lab.html.Screen({
  title: "FixationCross",
  tardy: false,
  timeout: random_Stimuli[globalCounterAPT]["duration"], // random_Stimuli[globalCounterAPT]["duration"],
  content: `
  <main class="content-canvas">
  <canvas id="canvas" width="400" height="400"></canvas>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Set cross size and position
      const crossLength = 80; // Length of each line of the cross
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const lineWidth = 2;

      // Set line style
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidth;

      // Draw the horizontal line
      ctx.beginPath();
      ctx.moveTo(centerX - crossLength / 2, centerY);
      ctx.lineTo(centerX + crossLength / 2, centerY);
      ctx.stroke();

      // Draw the vertical line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - crossLength / 2);
      ctx.lineTo(centerX, centerY + crossLength / 2);
      ctx.stroke();
    },
  },
});

// prime
const Prime_Screen = new lab.html.Screen({
  title: "Prime",
  timeout: 160, // 160,
  tardy: false,
  content: `
<main class="content-canvas">
  <div class="image-container">
    <img id="prime_image" src="" alt="Person Image">
  </div>
</main>
  `,
  messageHandlers: {
    run: function anonymous() {
      const primeImage = $("#prime_image");
      const imagePath =
        "src/static/primes main/" +
        random_Stimuli[globalCounterAPT]["prime"] +
        ".png";
      // Set the image source
      primeImage.attr("src", imagePath);

      primeImage.on("load", function () {
        // make the image visible only after it's loaded
        primeImage.css("visibility", "visible");
      });

      // hide the image in the inital state
      primeImage.css("visibility", "hidden");
    },
  },
});

// feedback trial
var boolSkipFeedbackTrial = true; // skip feedback of single trial
var boolSkipFeedbackBlock = false;

const TrialsTask_Screen = new lab.html.Screen({
  title: "TrialsTask",
  tardy: false,
  responses: {
    "keypress(x)": keyAssignments["xkey"],
    "keypress(m)": keyAssignments["mkey"],
  },
  content: `
  <main class="content-canvas">
    <span id="stimulus_task" style="font-size: 70px;">xxx</span>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      $("#stimulus_task").text(random_Stimuli[globalCounterAPT]["stimulus"]);
    },
    commit: () => {
      // save data
      //> stimulus
      study.options.datastore.set(
        "stimulus",
        random_Stimuli[globalCounterAPT]["stimulus"]
      );
      //> prime
      study.options.datastore.set(
        "prime",
        random_Stimuli[globalCounterAPT]["prime"]
      );
      //> response_boolean
      if (
        positiveWords.includes(random_Stimuli[globalCounterAPT]["stimulus"]) &&
        study.options.datastore.state.response == "positive"
      ) {
        study.options.datastore.set("response_boolean", true);
      } else if (
        negativeWords.includes(random_Stimuli[globalCounterAPT]["stimulus"]) &&
        study.options.datastore.state.response == "negative"
      ) {
        study.options.datastore.set("response_boolean", true);
      } else {
        study.options.datastore.set("response_boolean", false);
      }

      // if longer than 1.5s return trial feedback
      if (study.options.datastore.state.duration > 1500) {
        boolSkipFeedbackTrial = false;
      } else {
        boolSkipFeedbackTrial = true;
      }

      // increase global counter:
      globalCounterAPT++;

      // Check if the round is every 90th trial
      if (globalCounterAPT % 90 === 0 && globalCounterAPT !== 0) {
        boolSkipFeedbackBlock = false; // Show feedback
      } else {
        boolSkipFeedbackBlock = true; // Skip feedback
      }

      // no progress bar
    },
  },
});

// feedback trial
const ExpTrialsFeedback_Screen = new lab.html.Screen({
  title: "ExpTrialsFeedback",
  tardy: true,
  skip: "${boolSkipFeedbackTrial}",
  timeout: 2000,
  responses: {
    "keypress(Space)": "",
  },
  content: `
    <main class="content-canvas">
    <span style="font-size: 70px;"> Please respond faster!</span>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {},
    commit: () => {
      // no progress bar
    },
  },
});

// feedback block
//> Ranges for filtering
const ranges = [
  { lower: 0, upper: 90 },
  { lower: 91, upper: 180 },
  { lower: 181, upper: 270 },
  { lower: 271, upper: 360 },
];
//> Function to extract durations for each range
function extractDurationsByRange(senders, counters, durations, ranges) {
  const results = {};

  ranges.forEach(({ lower, upper }) => {
    const key = `${lower}-${upper}`;
    results[key] = [];

    for (let i = 0; i < senders.length; i++) {
      if (
        senders[i] === "TrialsTask" &&
        counters[i] >= lower &&
        counters[i] <= upper
      ) {
        results[key].push(durations[i]);
      }
    }
  });

  return results;
}

//> Function to construct the range key dynamically
function getRangeKey(counter, ranges) {
  for (const { lower, upper } of ranges) {
    if (counter >= lower && counter <= upper) {
      return `${lower}-${upper}`;
    }
  }
  return null; // Return null if the counter does not match any range
}

const ExpTrialsFeedbackBlock_Screen = new lab.html.Screen({
  title: "ExpTrialsFeedbackBlock",
  tardy: true,
  skip: "${boolSkipFeedbackBlock}",
  responses: {
    "keypress(Space)": "",
  },
  content: `
<header>
<h3>Feedback of your last block:</h3>
</header>

 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify" id="placeholder_lastBlock">
    <p> 
        In the last block, your reaction time was <strong id="simulus_block_responseTime">XXX</strong><strong>ms</strong> (milliseconds). Please try to respond even faster in the next block! Remember: 
    </p> 
      <ul> 
        <li id="x_placeholder">The <kbd>x</kbd> PLACEHOLDER</li> 
        <li id="m_placeholder"><kbd>m</kbd> PLACEHOLDER</li> 
      </ul> 
    <p> 
        When you are ready to begin the next block, place your index fingers on the respective keys and press the <kbd>Spacebar</kbd> to start. 
    </p> 
  </div> 
</main>

<footer class="content-vertical-center content-horizontal-center">

</footer>
  `,
  messageHandlers: {
    run: function anonymous() {
      // Update the instructions dynamically
      $("#x_placeholder").html(
        `Press the <kbd>x</kbd> key for <strong>${keyAssignments.xkey.toUpperCase()}</strong> words.`
      );
      $("#m_placeholder").html(
        `Press the <kbd>m</kbd> key for <strong>${keyAssignments.mkey.toUpperCase()}</strong> words.`
      );

      if (globalCounterAPT == random_Stimuli.length) {
        // 360
        $("#placeholder_lastBlock").html(`
          <p> 
      In the final block, your reaction time was <strong id="simulus_block_responseTime">XXX</strong><strong>ms</strong> (milliseconds).
  </p> 
      <p> 
      Please press the <kbd>Spacebar</kbd> to continue with the study. 
  </p> 
      `);
      }

      const validRange = ranges.some(
        ({ lower, upper }) =>
          globalCounterAPT >= lower && globalCounterAPT <= upper
      );

      if (!validRange) {
        console.error(
          `Counter ${globalCounterAPT} is out of the defined ranges.`
        );
        return; // Or provide a fallback
      } else {
        const durationsByRange = extractDurationsByRange(
          study.options.datastore.extract("sender"),
          study.options.datastore.extract("counter_inner"),
          study.options.datastore.extract("duration"),
          ranges
        );

        const rangeKey = getRangeKey(globalCounterAPT, ranges);

        const meanInMS =
          durationsByRange[rangeKey].reduce((sum, value) => sum + value, 0) /
          durationsByRange[rangeKey].length;
        const roundedMeanInMS = Math.round(meanInMS * 100) / 100;

        $("#simulus_block_responseTime").text(roundedMeanInMS);
      }

      /*
      if (rangeKey && durationsByRange[rangeKey]) {
        console.log(
          `Durations for range ${rangeKey}:`,
          durationsByRange[rangeKey]
        );
      } else {
        console.error(
          "Counter is outside the defined ranges or no durations available"
        );
      }
      */
    },
    commit: () => {
      // no progress bar
    },
  },
});

const Sequence_APT = new lab.flow.Sequence({
  title: "Sequence Affective Prime Task",
  shuffle: false,
  content: [
    FixationCross_Screen,
    Prime_Screen,
    TrialsTask_Screen,
    ExpTrialsFeedback_Screen,
    ExpTrialsFeedbackBlock_Screen,
  ],
});

const LoopComponent_APT = new lab.flow.Loop({
  template: Sequence_APT,
  templateParameters: [
    {
      notneeded: 0,
    },
  ],
  sample: {
    mode: "draw-replace",
    n: random_Stimuli.length, // 360
  },
  indexParameter: "counter_inner",
});

/* 
################### Affective Imagery ###################
*/
// Transition from APT to AIT
const TransitionToAIT_htmlForm = new lab.html.Form({
  title: "TransitionToAIT",
  content: textObj.TransitionToAIT,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

const Sequence_AIT = new lab.flow.Sequence({
  title: "Sequence Affective Imagery",
  shuffle: false,
  content: [
    AffectiveImageryInst_htmlForm,
    AffectiveImagery_htmlForm,
    AffectiveImageryAffect_htmlForm,
  ],
});

const loopAIT = new lab.flow.Loop({
  template: Sequence_AIT,
  templateParameters: [
    {
      cue: "Person with <strong>underweight</strong>",
      cue_coding: "underweight",
    },
    {
      cue: "Person with <strong>normal weight</strong>",
      cue_coding: "normalweight",
    },
    {
      cue: "Person with <strong>overweight</strong>",
      cue_coding: "overweight",
    },
    {
      cue: "Person with <strong>obesity</strong>",
      cue_coding: "obesity",
    },
  ],
  sample: {
    mode: "draw-shuffle",
    n: "4",
  },
});

/* 
################### Survey Scales ###################
*/
// Transition from AIT to survey scales
const TransitionToScales_htmlForm = new lab.html.Form({
  title: "TransitionToScales",
  content: textObj.TransitionToScales,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

// >>> Blue Dot Task - check random clicking
var valueAttention = undefined;

const BlueDotTask_htmlForm = new lab.html.Form({
  title: "BlueDotTask",

  content: textObj.BlueDotTask,
  messageHandlers: {
    run: function anonymous() {
      $(document).ready(function () {
        $(".scale-button").click(function () {
          valueAttention = 0;
        });

        $("#blueDot").click(function () {
          valueAttention = 1;
        });
      });
    },
    commit: () => {
      study.options.datastore.set("attCheck", valueAttention);
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

// >>> Perceived Causes of Obesity Questionnaires
const PerceivedCausesofObesity_Scale_htmlForm = new lab.html.Page({
  title: "PerceivedCausesofObesity",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_CausesOfObesity,
      width: "5",
      anchors: [
        "not at all important",
        "somewhat important",
        "moderately important",
        "very important",
        "extremely important",
      ],
      label:
        "Below are some factors that may influence health and weight. Please read each one carefully and rate how important you think it is in contributing to health and weight issues.",
      help: "Even if you're unsure, please choose the option that best reflects your opinion for each factor.",
      shuffle: false,
      name: "PerceivedCausesofObesity",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 30%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// >>> Beliefs About Obese Persons Scale
const BeliefsAboutObesePersons_Scale_htmlForm = new lab.html.Page({
  title: "BeliefsAboutObesePersons",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_BeliefsAboutObesePersons,
      width: "6",
      anchors: [
        "I strongly disagree",
        "I moderately disagree",
        "I<br>slightly disagree",
        "I slightly agree",
        "I moderately agree",
        "I strongly agree",
      ],
      label:
        "Please read the following statements and indicate the extent to which you agree with each statement.",
      help: "Please answer each statement, even if you're not entirely sure what your answer should be.",
      shuffle: false,
      name: "BeliefsAboutObesePersons",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 50%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");

      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// >>> Attitude Towards Obese People Scale
const AttitudeTowardsObesePeople_Scale_1_htmlForm = new lab.html.Page({
  title: "AttitudeTowardsObesePeople_1",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_AttitudeTowardsObesePeople.slice(0, 10),
      width: "6",
      anchors: [
        "I strongly disagree",
        "I moderately disagree",
        "I<br>slightly disagree",
        "I slightly agree",
        "I moderately agree",
        "I strongly agree",
      ],
      label:
        "Please read the following statements and indicate the extent to which you agree with each statement.",
      help: "Please answer each statement, even if you're not entirely sure what your answer should be.",
      shuffle: false,
      name: "AttitudeTowardsObesePeople",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 50%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const AttitudeTowardsObesePeople_Scale_2_htmlForm = new lab.html.Page({
  title: "AttitudeTowardsObesePeople_2",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_AttitudeTowardsObesePeople.slice(10, 20),
      width: "6",
      anchors: [
        "I strongly disagree",
        "I moderately disagree",
        "I<br>slightly disagree",
        "I slightly agree",
        "I moderately agree",
        "I strongly agree",
      ],
      label:
        "Please read the following statements and indicate the extent to which you agree with each statement.",
      help: "Please answer each statement, even if you're not entirely sure what your answer should be.",
      shuffle: false,
      name: "AttitudeTowardsObesePeople",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 50%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const Sequence_AttitudeTowardsObesePeopleScale = new lab.flow.Sequence({
  title: "Sequence Attitude Towards Obese People Scale",
  shuffle: false,
  content: [
    AttitudeTowardsObesePeople_Scale_1_htmlForm,
    AttitudeTowardsObesePeople_Scale_2_htmlForm,
  ],
});

// >>> Subscale Germ Aversion
const GermAversion_Subscale_htmlForm = new lab.html.Page({
  title: "GermAversion",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_GermAversion,
      width: "7",
      anchors: [
        "I strongly disagree",
        "I moderately disagree",
        "I<br>slightly disagree",
        "neutral",
        "I slightly agree",
        "I moderately agree",
        "I strongly agree",
      ],
      label:
        "Please read the following statements and indicate the extent to which you agree with each statement.",
      help: "Please answer each statement, even if you're not entirely sure what your answer should be.",
      shuffle: false,
      name: "GermAversion",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 43%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// >>> Subscale Pathogen Disgust
const PathogenDisgust_Subscale_htmlForm = new lab.html.Page({
  title: "PathogenDisgust",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_PathogenDisgust,
      width: "7",
      anchors: [
        "Not at all disgusting",
        "Slightly disgusting",
        "Somewhat disgusting",
        "Moderately disgusting",
        "Very disgusting",
        "Highly disgusting",
        "Extremely disgusting",
      ],
      label:
        "Read each situation below and think about how disgusting it feels to you. Then choose the option that best matches your feelings.",
      help: "Please answer every question, even if you're unsure or don’t have strong feelings about a particular situation.",
      shuffle: false,
      name: "PathogenDisgust",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xxl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 43%\">
     <col style=\"width: 7%\">
     <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
      <col style=\"width: 7%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata: number of clicks
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// >>> Fat Phobia Scale Scale (adjective pairs describing obese or fat people)
const AdjectivePairsObeseScale_1 = new lab.html.Form({
  title: "AdjectivePairsObeseScale_1",
  content: textObj.AdjectivePairsObeseScale, // FirstQuesComponentText,
  tardy: true,
  //timeout: 1000,
  messageHandlers: {
    run: () => {
      activeESTA = firstHalf;

      // remove all rows not needed
      var LengthTr = $("tr").length - 1;
      if (LengthTr > activeESTA.length) {
        for (let i = LengthTr; i >= activeESTA.length + 1; i--) {
          $("tr")[i].remove();
        }
      }

      // console.log("len:", activeESTA.length)
      // fill up needed rows
      var index_activeESTA = shufflePair(activeESTA);
      //console.log("index_activeESTA: ", index_activeESTA);
      var itemName = undefined;
      for (let i = 1; i <= activeESTA.length; i++) {
        itemName = activeESTA[index_activeESTA[i - 1]].scale;

        // left and right scale
        $("tr")[i].children[0].innerHTML =
          activeESTA[index_activeESTA[i - 1]].left;
        $("tr")[i].children[6].innerHTML =
          activeESTA[index_activeESTA[i - 1]].right;

        // single radio buttons
        for (let n = 1; n <= 5; n++) {
          $("tr")[i].children[n].innerHTML = `
                <label style=\"height: 100%; padding: 5px 0\">
                  <input type=\"radio\" name=\"${itemName}\" value=\"${n}\" required=\"\"
                  style="transform: scale(2.0); margin: 0; cursor: pointer;">  
                </label>
              `;
        }
        // background colour
        if (i % 2 == 0) {
          $("tr")[i].style.backgroundColor = "#e9e9e9";
        }
      }

      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });

      // console.log("Component run");
      // save index values of ESTA:
      // study.options.datastore.set("index_ESTA", index_ESTA);
    },
    commit: () => {
      // save paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const AdjectivePairsObeseScale_2 = new lab.html.Form({
  title: "AdjectivePairsObeseScale_2",
  content: textObj.AdjectivePairsObeseScale, // FirstQuesComponentText,
  tardy: true,
  //timeout: 1000,
  messageHandlers: {
    run: () => {
      activeESTA = secondHalf;

      // remove all rows not needed
      var LengthTr = $("tr").length - 1;
      if (LengthTr > activeESTA.length) {
        for (let i = LengthTr; i >= activeESTA.length + 1; i--) {
          $("tr")[i].remove();
        }
      }

      // console.log("len:", activeESTA.length)
      // fill up needed rows
      var index_activeESTA = shufflePair(activeESTA);
      //console.log("index_activeESTA: ", index_activeESTA);
      var itemName = undefined;
      for (let i = 1; i <= activeESTA.length; i++) {
        itemName = activeESTA[index_activeESTA[i - 1]].scale;

        // left and right scale
        $("tr")[i].children[0].innerHTML =
          activeESTA[index_activeESTA[i - 1]].left;
        $("tr")[i].children[6].innerHTML =
          activeESTA[index_activeESTA[i - 1]].right;

        // single radio buttons
        for (let n = 1; n <= 5; n++) {
          $("tr")[i].children[n].innerHTML = `
                <label style=\"height: 100%; padding: 5px 0\">
                  <input type=\"radio\" name=\"${itemName}\" value=\"${n}\" required=\"\">  
                </label>
              `;
        }
        // background colour
        if (i % 2 == 0) {
          $("tr")[i].style.backgroundColor = "#e9e9e9";
        }
      }

      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });

      // console.log("Component run");
      // save index values of ESTA:
      // study.options.datastore.set("index_ESTA", index_ESTA);
    },
    commit: () => {
      // save paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const Sequence_AdjectivePairsObeseScale = new lab.flow.Sequence({
  title: "Sequence Adjective Pairs Obese Scale",
  shuffle: false,
  content: [AdjectivePairsObeseScale_1, AdjectivePairsObeseScale_2],
});

// shuffle all scales:
const Sequence_Scales = new lab.flow.Sequence({
  title: "Sequence Scales",
  shuffle: true,
  content: [
    BlueDotTask_htmlForm,

    PerceivedCausesofObesity_Scale_htmlForm,
    BeliefsAboutObesePersons_Scale_htmlForm,
    Sequence_AttitudeTowardsObesePeopleScale,
    GermAversion_Subscale_htmlForm,
    PathogenDisgust_Subscale_htmlForm,

    Sequence_AdjectivePairsObeseScale,
  ],
});

/* 
################### End of Study ###################
*/
// Transition from AIT to survey scales
const TransitionToFinal_htmlForm = new lab.html.Form({
  title: "TransitionToFinal",
  content: textObj.TransitionToFinal,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

// rate primes
const FixationCross_RatePrime_Screen = new lab.html.Screen({
  title: "FixationCrossRatePrime",
  tardy: false,
  timeout: 500,
  content: `
  <main class="content-canvas">
  <canvas id="canvas" width="400" height="400"></canvas>
  </main>
  `,
  messageHandlers: {
    run: function anonymous() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Set cross size and position
      const crossLength = 80; // Length of each line of the cross
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const lineWidth = 2;

      // Set line style
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidth;

      // Draw the horizontal line
      ctx.beginPath();
      ctx.moveTo(centerX - crossLength / 2, centerY);
      ctx.lineTo(centerX + crossLength / 2, centerY);
      ctx.stroke();

      // Draw the vertical line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - crossLength / 2);
      ctx.lineTo(centerX, centerY + crossLength / 2);
      ctx.stroke();
    },
  },
});

const RatePrime_htmlForm = new lab.html.Form({
  title: "RatePrime",
  tardy: false,
  content: `
<header>
<h3>How would you rate this person's weight on a scale from low to high?</h3>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-l">
<div class="image-container" style="width: 70%; aspect-ratio: 3 / 4; min-width: 300px; min-height: 400px; overflow: hidden; display: flex; justify-content: center; align-items: center; margin: auto;">
  <img id="prime_image" src="" alt="Person Image" style="width: 100%; height: 100%; object-fit: cover;">
</div>
    <!-- Rating scale -->
    <div class="rating-container">
      <span class="low-weight">Low Weight</span>
      <form id="rating_form" class="rating-form">
        <!-- Radio buttons with labels -->
        <label>
          <input type="radio" name="body_shape_rating" value="1" required>
          <span class="rating-label">1</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="2" required>
          <span class="rating-label">2</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="3" required>
          <span class="rating-label">3</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="4" required>
          <span class="rating-label">4</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="5" required>
          <span class="rating-label">5</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="6" required>
          <span class="rating-label">6</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="7" required>
          <span class="rating-label">7</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="8" required>
          <span class="rating-label">8</span>
        </label>
        <label>
          <input type="radio" name="body_shape_rating" value="9" required>
          <span class="rating-label">9</span>
        </label>
      </form>
      <span class="high-weight">High Weight</span>
    </div>
  </div> 
</main>

<footer class="content-vertical-center content-horizontal-center">
  <button id="continue" type="submit" form="rating_form">
    Continue &rarr;
  </button>
</footer>
  `,
  messageHandlers: {
    run: function anonymous() {
      var currentPrime = study.options.datastore.get("prime");
      console.log("currentPrime:", currentPrime);

      $("#prime_image").attr(
        "src",
        "src/static/primes main/" + currentPrime + ".png"
      );
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const Sequence_RatePrime = new lab.flow.Sequence({
  title: "Sequence Rate Prime",
  shuffle: false,
  content: [FixationCross_RatePrime_Screen, RatePrime_htmlForm],
});

const loopRatePrime = new lab.flow.Loop({
  template: Sequence_RatePrime,
  templateParameters: [
    {
      prime: "normalweight_female",
    },
    {
      prime: "normalweight_male",
    },
    {
      prime: "obese_female",
    },
    {
      prime: "obese_male",
    },
    {
      prime: "overweight_female",
    },
    {
      prime: "overweight_male",
    },
    {
      prime: "underweight_female",
    },
    {
      prime: "underweight_male",
    },
  ],
  sample: {
    mode: "draw-shuffle",
    n: "8",
  },
});

// socio demographic questions
const SocioDemo_htmlScreen = new lab.html.Form({
  title: "socio demographic questions",
  content: textObj.socioDemo,
  messageHandlers: {
    run: () => {
      $(document).ready(function () {
        // Extract country names from the dropdown
        let countries = [];
        $("#country option").each(function () {
          let countryName = $(this).text();
          if (countryName.trim() !== "country") {
            countries.push(countryName);
          }
        });

        // Initialize autocomplete
        $("#autocomplete-country").autocomplete({
          source: countries,
          select: function (event, ui) {
            // When an option is selected, set it in the dropdown
            let selectedCountry = ui.item.value;
            $("#country option")
              .filter(function () {
                return $(this).text() === selectedCountry;
              })
              .prop("selected", true);
          },
        });
      });
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// feedback screen
const ConscientiousCompletion_htmlScreen = new lab.html.Form({
  title: "ConscientiousCompletion",
  content: textObj.ConscientiousCompletion,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// feedback screen
const FeedbackScreen_htmlScreen = new lab.html.Form({
  title: "FeedbackScreen",
  content: textObj.feedbackQues,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

// ending screen
const EndingScreen_htmlScreen = new lab.html.Screen({
  title: "EndingScreen",
  tardy: true,
  content: `
  <header>
  <h2> Thank you very much for your participation ! </h2>
  </header>

  <main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
  <br>
  <div>
  <i>The experiment will end in a few seconds and you will be automatically redirected back to Prolific.</i> 
  <br>
  <br>
  <br>
  If you have any questions, please contact the study director Katja Pollak (katja.pollak@psychologie.uni-freiburg.de).
  </div>
  </main>
  `,
  timeout: 10000,
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // alert(numElementsCounter);
    },
    epilogue: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("my result data sent to JATOS final time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));

        // then redirect
        if (
          study.options.datastore.extract("sender").includes("FeedbackScreen")
        ) {
          jatos.endStudyAndRedirect(
            "https://app.prolific.com/submissions/complete?cc=C1DWDISA",
            true,
            "everything worked fine"
          );
        } else {
          alert(
            "It seems that you did not go through the entire study because you did not see the previous feedback screen."
          );
          jatos.abortStudy("study aborted - copied submission link");
        }
      }
    },
  },
});

// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title:
      "Assessing underlying processes of weight bias: Adiffusion model analysis",
    description:
      "Online study for the assessment of underlying processes of weight bias using an Adiffusion model analysis",
    repository:
      "https://github.com/PollakKat/Assessing_underlying_processes_of_weight_bias",
    contributors:
      "Katja M. Pollak, Hanna Wachten, Julius Fenn, Raphael Hartmann, Jana Strahler, & Andrea Kiesel; programmed by Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Fullscreen(),
    // new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    InformCon_htmlForm,
    InformConsentNO_htmlForm,

    
    // >>> introduction phase
    Greetings_htmlForm,
    InformCon_htmlForm,
    InformConsentNO_htmlForm,
    ExclusionCriteria_htmlForm,
    //AttentionCheck_htmlForm,
    SetupStudy_htmlForm,

    // >>> APT practice
    PracticeTrialsInstructions_Screen,
    LoopComponent_practice_APT,

    // >>> APT main
    ExpTrialsInstructions_Screen,
    LoopComponent_APT,

    // >>> AIT
    TransitionToAIT_htmlForm,
    loopAIT,

    // >>> survey scales
    TransitionToScales_htmlForm,
    Sequence_Scales,

    // >>> ending phase post
    TransitionToFinal_htmlForm,
    loopRatePrime,
    SocioDemo_htmlScreen,

    // >>> ending phase final
    ConscientiousCompletion_htmlScreen,

    FeedbackScreen_htmlScreen,
    EndingScreen_htmlScreen,
  ],
});

// Start the study
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
