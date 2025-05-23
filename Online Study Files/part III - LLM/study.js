/* 
################### global variables ###################
*/

/* for testing study */
const Required_Testing = true; // set to false for testing

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
  content: `
<!-- Relevancy Rating -->
<div class="page-item page-item-likert" style="margin-left:10%; margin-right: 10%">
  <div class="concept">
    <h2 id="vignette_title">XX</h2>
    <p id="vignette_first">XX1</p>
    <p id="vignette_second">XX2</p>
    <p id="vignette_third">XX3</p>
  </div>

    <!-- Start of Likert Questions -->
    <form id="ratingBasalAttributes">

<p class="font-weight-bold" style="margin-top:2rem;">Wie hilfreich finden Sie diese Hausfassade?</p>

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
<p class="font-weight-bold" style="margin-top:2rem;">Wie sehr vertrauen Sie darauf, dass diese Hausfassade korrekt funktioniert?</p>

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
<p class="font-weight-bold" style="margin-top:2rem;">Wie wahrscheinlich ist es, dass Sie diese Hausfassade kaufen würden?</p>

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
          <td class="text-center"><input type="radio" name="rat_buy" value="1" required></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="2"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="3"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="4"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="5"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="6"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="7"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="8"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="9"></td>
          <td class="text-center"><input type="radio" name="rat_buy" value="10"></td>
        </tr>
      </tbody>
    </table>
        <!-- Question 4: What is your overall emotional reaction to this technology? -->
<p class="font-weight-bold" style="margin-top:2rem;"> Welche Emotionen löst diese Hausfassade bei Ihnen aus?</p>

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
      console.log("Current Vignette:", this.parameters.Vignette);

      $("#vignette_title").text(this.parameters.Vignette_header);
      $("#vignette_first").text(this.parameters.Vignette_text1);
      $("#vignette_second").text(this.parameters.Vignette_text2);
      $("#vignette_third").text(this.parameters.Vignette_text3);
    },
    end: function anonymous() {
      // study.options.datastore.set("ratingValence", $("#nodeSlider").val());
    },
  },
});

const basalAttributes = new lab.flow.Loop({
  template: template,
  templateParameters: [
    {
      Vignette: "1",
      Vignette_header: "Insekten ähnliche Hausfassade",
      Vignette_text1: "Bio-Smart ist eine bioinspirierte Hausfassade.",
      Vignette_text2:
        "Die Oberfläche der neuen Hausfassade Bio-Smart ist leicht zerstörbar und daher wartungsintensiv. Trotz ihrer umweltschädlichen Bestandteile, denn sie enthält Kunststoff, überzeugt Bio-Smart durch ihre lebensähnlichen Eigenschaften.",
      Vignette_text3:
        "Die Innovation liegt in der Übertragung lebensähnlicher Eigenschaften von Insektenoberflächen auf die Oberfläche der Hausfassade.",
    },
    {
      Vignette: "2",
      Vignette_header: "Energieautonome Außenhülle für Häuser",
      Vignette_text1:
        "Bio-Smart ist eine wartungsintensive, gleichzeitig aber energie-effiziente Gebäudehülle.",
      Vignette_text2:
        "Moderne Gebäudehüllen wie Bio-Smart sollen Energie generierend sein, aber auch Energie speichernd genutzt werden können. Diese Eigenschaften gleichen eine mögliche umweltschädliche Belastung aus, denn Bio-Smart enthält Kunststoff.",
      Vignette_text3:
        "Die Innovation liegt in der Entwicklung einer energieautonomen Schutzhülle für Gebäude.",
    },
    {
      Vignette: "3",
      Vignette_header: "Intelligente und reaktionsfähige Fassadenoberfläche",
      Vignette_text1:
        "Bio-Smart reagiert durch aktive und passive Formänderungen durch Umwelteinwirkung.",
      Vignette_text2:
        "Die bioinspirierte Fassadenoberfläche Bio-Smart ist eine multifunktionale Gebäudehülle mit autonomer Schutzfunktion, basierend auf lebensähnlichen Eigenschaften wie aktive und passive Verhaltensänderungen durch Umwelteinwirkung.",
      Vignette_text3:
        "Die Innovation liegt in der Übertragung von Insekten ähnlichen Eigenschaften auf technologische Oberflächenmaterialien.",
    },
    {
      Vignette: "4",
      Vignette_header: "Multifunktionale und energieeffiziente Gebäudehülle",
      Vignette_text1:
        "Bio-Smart ermöglicht eine autonome Anpassung an Umwelteinwirkungen.",
      Vignette_text2:
        "Bio-Smart gehört zu den intelligenten Häuserfassaden, die sowohl energieautonom als auch reaktionsfähig sind. Die technologische Materialentwicklung ermöglicht eine aktive und passive Formänderung durch Umwelteinwirkung und kann gleichzeitig Energie generierend und Energie speichernd arbeiten.",
      Vignette_text3:
        "Die Innovation liegt in der Entwicklung einer energieautonomen Fassade, die durch aktive und passive Verhaltensänderung durch Umweltwirkung reagieren kann.",
    },
    {
      Vignette: "5",
      Vignette_header: "Langlebige selbstreparierende Gebäudehülle",
      Vignette_text1:
        "Bio-Smart ist eine zuverlässige und autonome Hausfassade.",
      Vignette_text2:
        "Aufgrund ihrer selbstheilenden Funktion ist die multifunktionale Fassadenoberfläche reaktionsfähig. Somit ist Bio-Smart auch bei Beschädigungen wartungsfrei und außergewöhnlich haltbar. Die technologische Entwicklung ist aufgrund aktiver und passiver Verhaltensänderungen durch Umwelteinwirkung widerstandsfähig und robust.",
      Vignette_text3:
        "Die Innovation liegt in der Entwicklung einer intelligenten Fassade, deren selbstreparierenden Funktion auf aktiver und passiver Formänderung durch Umwelteinwirkung beruht.",
    },
    {
      Vignette: "6",
      Vignette_header: "Ökologische elektronikfreie Hausfassade",
      Vignette_text1:
        "Bio-Smart ist eine widerstandsfähige und zugleich robuste Hülle für Gebäude.",
      Vignette_text2:
        "Bio-Smart ist aufgrund ihrer selbstheilenden Funktion wartungsfrei, zuverlässig und haltbar. Aus ökologischer Sicht ist die Fassade umweltfreundlich, da sie langlebig ist.",
      Vignette_text3:
        "Die Innovation einer selbstreparierenden Fassade leistet einen Beitrag zur nachhaltigen Entwicklung.",
    },
  ],
  sample: {
    mode: "draw-shuffle",
    n: "6",
  },
});

const basalAttributesRating = new lab.html.Frame({
  context: `
    <header>
  <h4>Bitte bewerten Sie das folgende Konzept einer Hausfassade:</h4>
  <h6>
    Hinweis: Geben Sie bitte Ihre Einschätzung zu Nützlichkeit, Vertrauen, Nutzungsabsicht und emotionaler Wirkung nach Ihrem ersten Eindruck ab.
  </h6>
  </header>
    <main style="width: 100%;">
      <!-- this is where stimuli will be inserted -->
    </main>
  `,
  contextSelector: "main",
  content: basalAttributes,
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

/* HEXACO */
const LikertHEXACO_htmlForm = new lab.html.Page({
  title: "HEXACO",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_HEXACO,
      width: "5",
      anchors: [
        "stimme überhaupt nicht zu",
        "stimme nicht zu",
        "neutral (weder Zustimmung noch Ablehnung)",
        "stimme zu",
        "stimme vollkommen zu",
      ],
      label:
        "Im Folgenden finden Sie eine Reihe von Aussagen über <b>Ihre Person</b>. Bitte lesen Sie jede Aussage sorgfältig und entscheiden Sie, inwieweit Sie dieser zustimmen oder nicht zustimmen.",
      help: "Bitte beantworten Sie jede Aussage, auch wenn Sie sich bei Ihrer Antwort nicht ganz sicher sind.",
      shuffle: false,
      name: "HEXACO",
    },
  ],
  submitButtonText: "Weiter →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // add id continue to button
      $('button[type="submit"][form="page-form"]').attr("id", "continue");
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
      <col style=\"width: 40%\">
      <col style=\"width: 12%\">
      <col style=\"width: 12%\">
      <col style=\"width: 12%\">
      <col style=\"width: 12%\">
      <col style=\"width: 12%\">
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
      // collect paradata
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

/* Affinity for Technology Interaction Scale */
const LikertATI_htmlForm = new lab.html.Page({
  title: "ATI",
  items: [
    {
      required: Required_Testing,
      type: "likert",
      items: items_ATI,
      width: "6",
      anchors: [
        "stimmt gar nicht",
        "stimmt weitgehend nicht",
        "stimmt eher nicht",
        "stimmt eher",
        "stimmt weitgehend",
        "stimmt völlig",
      ],
      label:
        "Im Folgenden geht es um Ihre Interaktion mit technischen Systemen. Mit 'technischen Systemen' sind sowohl Apps und andere Software-Anwendungen als auch komplette digitale Geräte (z.B. Handy, Computer, Fernseher, Auto-Navigation) gemeint. Bitte geben Sie den Grad Ihrer Zustimmung zu folgenden Aussagen an.",
      help: "Bitte beantworten Sie jede Aussage, auch wenn Sie sich bei Ihrer Antwort nicht ganz sicher sind.",
      shuffle: false,
      name: "ATI",
    },
  ],
  submitButtonText: "Weiter →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // add id continue to button
      $('button[type="submit"][form="page-form"]').attr("id", "continue");
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
      <col style="width: 40%">
      <col style="width: 10%">
      <col style="width: 10%">
      <col style="width: 10%">
      <col style="width: 10%">
      <col style="width: 10%">
      <col style="width: 10%">
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
      // collect paradata
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

// shuffle all scales:
const Sequence_Scales = new lab.flow.Sequence({
  title: "Sequence Scales",
  shuffle: true,
  content: [LikertHEXACO_htmlForm, LikertATI_htmlForm],
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
  <h2> Vielen Dank für Ihre Teilnahme! </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
    <br>
    <div>
      <i>Das Experiment endet in wenigen Sekunden und Sie werden automatisch zurück zu Prolific weitergeleitet.</i> 
      <br>
      <br>
      <b>Anmerkung:</b> Die beschriebenen Hausfassaden waren rein hypothetischer Natur und sind nicht zur Umsetzung geplant. Die Beschreibungen dienten ausschließlich Studienzwecken und hatten das Ziel, Ihre Reaktionen auf unterschiedliche Adjektive zu untersuchen.
      <br>
      <br>
      Falls Sie Fragen haben, wenden Sie sich bitte an den Studienleiter Julius Fenn (julius.fenn@psychologie.uni-freiburg.de).
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
            "https://app.prolific.com/submissions/complete?cc=C1PE2AUF",
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
    // new lab.plugins.Debug(),
    // new lab.plugins.Download()
  ],
  content: [    
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
