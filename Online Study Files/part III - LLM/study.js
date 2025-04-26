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
################### Testing of Study ###################
*/
const TestingStudy_htmlForm = new lab.html.Form({
  title: "testingStudy",
  content: textObj.testingStudy,
  messageHandlers: {
    commit: () => {
      // progress bar
    },
  },
});

/* 
################### Statistical Procedures of Study ###################
*/
const StatisticalProceduresOfStudy_htmlForm = new lab.html.Form({
  title: "statisticalProceduresStudy",
  content: textObj.statisticalProceduresStudy,
  messageHandlers: {
    commit: () => {
      // progress bar
    },
  },
});


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











/* 
################### Rating of technology descriptions ###################
*/
// Transition from APT to AIT
const ExplenationRatingTask_htmlForm = new lab.html.Form({
  title: "ExplenationRatingTask",
  content: textObj.ExplenationRatingTask,
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



/* 
################### rating basal attributes ###################
*/
const template = new lab.html.Form({
  content: '<section style="font-size: 24px; border: 1px dashed black; padding: 10px; width: 80%; margin: 10px auto; text-align: center;">${ parameters.Text }</section>' + `
<!-- Relevancy Rating -->
<div class="page-item page-item-likert" style="margin-left:20%; margin-right: 20%">
    <!-- Start of Likert Questions -->
    <form id="ratingBasalAttributes">

<p class="font-weight-bold" style="margin-top:2rem;">Wie hilfreich finden Sie diese Technologie?</p>

<div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; margin-bottom: 10px;">
  <span style="width: 20%; text-align: left;">Nicht hilfreich</span>
  <span style="width: 30%; text-align: center;">Etwas hilfreich</span>
  <span style="width: 20%; text-align: center;">Hilfreich</span>
  <span style="width: 30%; text-align: right;">Sehr hilfreich</span>
</div>

    <table class="page-item-table" style="margin-top: 1rem;">
      <colgroup>
        <col style="width: 6%" span="10">
      </colgroup>
      <thead class="sticky-top">
        <tr>
          <th class="sticky-top text-center small">1</th>
          <th class="sticky-top text-center small">2</th>
          <th class="sticky-top text-center small">3</th>
          <th class="sticky-top text-center small">4</th>
          <th class="sticky-top text-center small">5</th>
          <th class="sticky-top text-center small">6</th>
          <th class="sticky-top text-center small">7</th>
          <th class="sticky-top text-center small">8</th>
          <th class="sticky-top text-center small">9</th>
          <th class="sticky-top text-center small">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center"><input type="radio" name="rat_helpful" value="1" required></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="2"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="3"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="4"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="5"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="6"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="7"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="8"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="9"></td>
          <td class="text-center"><input type="radio" name="rat_helpful" value="10"></td>
        </tr>
      </tbody>
    </table>

    <!-- Question 2: How much do you trust the technology to function correctly? -->
<p class="font-weight-bold" style="margin-top:2rem;">Wie sehr vertrauen Sie darauf, dass die Technologie korrekt funktioniert?</p>

<div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; margin-bottom: 10px;">
  <span style="width: 20%; text-align: left;">Nicht vertrauenswürdig</span>
  <span style="width: 30%; text-align: center;">Etwas vertrauenswürdig</span>
  <span style="width: 20%; text-align: center;">Vertrauenswürdig</span>
  <span style="width: 30%; text-align: right;">Sehr vertrauenswürdig</span>
</div>
    <table class="page-item-table" style="margin-top: 1rem;">
      <colgroup>
        <col style="width: 6%" span="10">
      </colgroup>
      <thead class="sticky-top">
        <tr>
          <th class="sticky-top text-center small">1</th>
          <th class="sticky-top text-center small">2</th>
          <th class="sticky-top text-center small">3</th>
          <th class="sticky-top text-center small">4</th>
          <th class="sticky-top text-center small">5</th>
          <th class="sticky-top text-center small">6</th>
          <th class="sticky-top text-center small">7</th>
          <th class="sticky-top text-center small">8</th>
          <th class="sticky-top text-center small">9</th>
          <th class="sticky-top text-center small">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center"><input type="radio" name="rat_trust" value="1" required></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="2"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="3"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="4"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="5"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="6"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="7"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="8"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="9"></td>
          <td class="text-center"><input type="radio" name="rat_trust" value="10"></td>
        </tr>
      </tbody>
    </table>

    <!-- Question 3: How likely would you be to use this technology? -->
<p class="font-weight-bold" style="margin-top:2rem;">Wie wahrscheinlich ist es, dass Sie diese Technologie nutzen würden?</p>

<div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; margin-bottom: 10px;">
  <span style="width: 20%; text-align: left;">Sehr unwahrscheinlich</span>
  <span style="width: 30%; text-align: center;">Etwas wahrscheinlich</span>
  <span style="width: 20%; text-align: center;">Wahrscheinlich</span>
  <span style="width: 30%; text-align: right;">Sehr wahrscheinlich</span>
</div>

    <table class="page-item-table" style="margin-top: 1rem;">
      <colgroup>
        <col style="width: 6%" span="10">
      </colgroup>
      <thead class="sticky-top">
        <tr>
          <th class="sticky-top text-center small">1</th>
          <th class="sticky-top text-center small">2</th>
          <th class="sticky-top text-center small">3</th>
          <th class="sticky-top text-center small">4</th>
          <th class="sticky-top text-center small">5</th>
          <th class="sticky-top text-center small">6</th>
          <th class="sticky-top text-center small">7</th>
          <th class="sticky-top text-center small">8</th>
          <th class="sticky-top text-center small">9</th>
          <th class="sticky-top text-center small">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center"><input type="radio" name="rat_use" value="1" required></td>
          <td class="text-center"><input type="radio" name="rat_use" value="2"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="3"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="4"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="5"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="6"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="7"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="8"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="9"></td>
          <td class="text-center"><input type="radio" name="rat_use" value="10"></td>
        </tr>
      </tbody>
    </table>
        <!-- Question 4: What is your overall emotional reaction to this technology? -->
<p class="font-weight-bold" style="margin-top:2rem;"> Welche Emotionen löst diese Technologie bei Ihnen aus?</p>

<div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; margin-bottom: 10px;">
  <span style="width: 20%; text-align: left;">Stark negativ</span>
  <span style="width: 30%; text-align: center;">Negativ</span>
  <span style="width: 20%; text-align: center;">Positiv</span>
  <span style="width: 30%; text-align: right;">Stark positiv</span>
</div>

    <table class="page-item-table" style="margin-top: 1rem;">
      <colgroup><col style="width: 6%" span="10"></colgroup>
      <thead class="sticky-top">
        <tr>
          <th class="sticky-top text-center small">1</th>
          <th class="sticky-top text-center small">2</th>
          <th class="sticky-top text-center small">3</th>
          <th class="sticky-top text-center small">4</th>
          <th class="sticky-top text-center small">5</th>
          <th class="sticky-top text-center small">6</th>
          <th class="sticky-top text-center small">7</th>
          <th class="sticky-top text-center small">8</th>
          <th class="sticky-top text-center small">9</th>
          <th class="sticky-top text-center small">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center"><input type="radio" name="rat_emotion" value="1" required></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="2"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="3"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="4"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="5"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="6"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="7"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="8"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="9"></td>
          <td class="text-center"><input type="radio" name="rat_emotion" value="10"></td>
        </tr>
      </tbody>
    </table>
</form> <!-- End form -->

</div> <!-- End of main container -->
<br>
<button id="continue" type="submit" form="ratingBasalAttributes" class="buttonFeedback">
    Bewertung Technologie abschicken.
</button>
`, // parameters substituted ...
  tardy: true,
  messageHandlers: {
    run: function anonymous() {


      /*
      // this.parent.end() !!!s
      var tmp_this = this;
      $(document).one('keydown', function (e) {
        if (e.keyCode == 90) {
          console.log("clicked z");
          tmp_this.parent.end();
        }
      });
      */

    },
    end: function anonymous() {
      study.options.datastore.set("ratingValence", $("#nodeSlider").val());
    },
  },
})

const basalAttributes = new lab.flow.Loop({
  template: template,
  templateParameters: [
    {
        "Vignette": "1",
        "Text": "Das Nano-Pat-Parka-System zielt auf zukünftige Anforderungen an Schutzkleidung durch eine Kombination bioinspirierter und lebensähnlicher Eigenschaften. Die Technologie nutzt insektenähnliche Mikrostrukturen, um atmungsaktive Flexibilität mit Schutzfunktionen zu verbinden. Trotz des Einsatzes von Kunststoffkomponenten ist das Material leicht zerstörbar und erfordert dadurch eine wartungsintensive Pflege. Kritisch bleibt die potenziell umweltschädliche Produktion synthetischer Nanopartikel. Insgesamt vereint die Innovation natürliche Vorbilder mit technischer Anpassungsfähigkeit, steht jedoch vor ökologischen und praktischen Zielkonflikten.",
    },
    {
      "Vignette": "2",
      "Text": "aaaaaaa",
  },
],
  sample: {
    mode: "draw-shuffle",
    n: "6",
  },
})

const basalAttributesRating = new lab.html.Frame({
  context: `
    <header>
  <h4>Bitte bewerten Sie die folgende Beschreibung des Nano-Pat-Parkas:</h4>
  <h6>
    Hinweis: Bitte bewerten Sie Ihre Eindrücke hinsichtlich Nützlichkeit, Vertrauen, Nutzungsabsicht und emotionaler Wirkung möglichst intuitiv. 
  </h6>
  </header>
    <main style="width: 100%;">
      <!-- this is where stimuli will be inserted -->
    </main>
  `,
  contextSelector: 'main',
  content: basalAttributes,
})



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
// conscientious completion screen
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
    title: "basale Attribute",
    description: "basal Attributes part III",
    repository: "",
    contributors: "Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Fullscreen(),
     new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    TransitionToScales_htmlForm,
    ConscientiousCompletion_htmlScreen,

    FeedbackScreen_htmlScreen,

    ExplenationRatingTask_htmlForm,

    basalAttributesRating,

    ExplenationRatingTask_htmlForm,

    basalAttributesRating,






    TestingStudy_htmlForm,


    // >>> introduction phase
    Greetings_htmlForm,
    InformCon_htmlForm,
    InformConsentNO_htmlForm,
    ExclusionCriteria_htmlForm,

    // >>> rating of technology descriptions
    ExplenationRatingTask_htmlForm,
    basalAttributesRating,
    
    
    // >>> survey scales
    TransitionToScales_htmlForm,
    Sequence_Scales,


    // for my colleagues !!!
    StatisticalProceduresOfStudy_htmlForm,



    // >>> ending phase
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
