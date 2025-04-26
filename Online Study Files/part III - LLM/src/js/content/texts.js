const textObj = {
// ################### Testing of Study ###################
testingStudy: `
<header>
  <h2>Feedback and general information:</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
    <section>
      Please note to provide feedback to the study:
    </section>
    <ul>
  <li>At the top of each page, there is a text area available.</li>
  <li>The text area is separated from the main content by a horizontal line.</li>
  <li>You can use this area to provide feedback or comments about the specific page.</li>
</ul>
    <section>
     Summary of the study goal:
    </section>
<ul>
  <li>This study examines how specific combinations of material properties (basal attributes) influence the societal acceptance of emerging technologies.</li>
  <li>Textual descriptions of future material systems are systematically generated using state-of-the-art Large Language Models (LLMs), based on empirically derived clusters of basal attributes.</li>
  <li>Laypersons assess these descriptions to determine which constellations of attributes enhance perceived acceptability.</li>
  <li>The study aims to (a) validate the conceptual significance of the basal attribute clusters identified in Part II.</li>
  <br>
  <li style="list-style-type: none;">→ Global goal of the article is to contribute to anticipatory technology assessment by integrating societal and ethical perspectives into early-stage technology development.</li>
  </ul>
  </div>
</main>

<form id="page-form"> 
</form>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Continue &rarr;
  </button>
</footer>
   `,
// ################### Testing of Study ###################
statisticalProceduresStudy: `
    <form id="page-form">
<!-- multiline text --> 
<div class="page-item page-item-textarea" id="page-item-improvement_critic" style="max-width: 60%; margin: 0 auto;">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
    Haben Sie Feedback oder Kritik zu dieser Seite? Welcher der statistischen Verfahren erscheint euch am wichtigsten in dem Kontext unseres Artikels?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
    Inhaltlich, Rechtschreibung, Layout, etc.
  </p>
  <textarea name="improvement_critic" class="w-100" rows="8"></textarea>
  
  <hr style="margin: 2rem 0;"> <!-- horizontale Linie -->
</div>
<!-- END multiline text -->
 </form>

 
<header>
  <h2>Information regarding planned statistical analysis:</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
    <h3>Data Structure:</h3>
    <section>
      In our study, each participant evaluates six different technological descriptions (L1 level; within) and also provides personal trait measures (L2 level: Affinity for Technology Interaction, Openness to Experience),
      which results in a nested data structure:
    </section>

    <div style="overflow-x: auto; max-width: 1200px; margin: 20px 0;">
      <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">Participant_ID</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Vignette_ID</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L1_Valence</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L1_Usefulness</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L1_Trust</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L1_Adoption_Intention</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L2_ATI_Score</th>
            <th style="border: 1px solid #ddd; padding: 8px;">L2_Openness_Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.8</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.0</td>
            <td style="border: 1px solid #ddd; padding: 8px;">5.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.8</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.0</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.0</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.8</td>
            <td style="border: 1px solid #ddd; padding: 8px;">5.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.8</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.3</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.7</td>
            <td style="border: 1px solid #ddd; padding: 8px;">5.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.8</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4</td>
            <td style="border: 1px solid #ddd; padding: 8px;">2.8</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">5.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.8</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.9</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.7</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">2.2</td>
          </tr>
                    <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">001</td>
            <td style="border: 1px solid #ddd; padding: 8px;">6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">2.2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">4.6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">1.7</td>
            <td style="border: 1px solid #ddd; padding: 8px;">3.6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">2.2</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
            <td style="border: 1px solid #ddd; padding: 8px;">...</td>
          </tr>
        </tbody>
      </table>
    </div>

<h3>Planned Statistical Procedures:</h3>

<section>
  <p><strong>Note:</strong> Each technological description (vignette) is based on a specific set of basal attributes (e.g., "bioinspired", "autonomous", "resource-efficient"). Some vignettes share certain attributes while differing in others. We aim to analyze how individual basal attributes or their combinations influence participants' evaluations (e.g., valence, usefulness, trust).</p>

  <ul style="line-height: 1.6;">
    <li><strong>Confirmatory Factor Analysis (CFA):</strong> Establishes and verifies the measurement model by testing whether the items for Valence, Usefulness, Trust, and Adoption Intention reliably capture one single latent construct.</li>

    <li><strong>Multi-Group CFA:</strong> Tests whether the established measurement model holds consistently across different vignettes and participant groups (e.g., high vs. low technology affinity).</li>

    <li><strong>Mixed Models:</strong> Analyze repeated ratings within participants and link evaluation patterns to stable individual traits (ATI, Openness).
      <ul style="margin-top: 5px; margin-bottom: 5px; padding-left: 20px; line-height: 1.5;">
        <li><strong>Attribute-based Regression Modeling:</strong> Predicts evaluation outcomes based on the presence or absence of specific basal attributes in the vignettes (using dummy coding for attribute sets).</li>
        <li><strong>Add Random Slopes for Basal Attributes:</strong> Models individual differences in reactions to specific attributes across vignettes (e.g., "Some participants react very positively to 'autonomous', while others react negatively — and this variability can be modeled.").</li>
      </ul>
    </li>
    
<li><strong>Latent Profile Analysis (LPA):</strong> Identifies hidden participant groups (clusters) based on their evaluation patterns across the six descriptions (e.g., distinguishing technology optimists from technology pessimists).</li>
  </ul>
</section>

    A examplary study applying such kind of analyses can be found on <a href="https://eric.ed.gov/?id=ED626889" target="_blank">https://eric.ed.gov/?id=ED626889</a>.


    <section>
  <h3>Details on Measured Variables:</h3>
  <ul>
    <li><strong>Perceived Usefulness (L1):</strong> Assesses how helpful and performance-enhancing participants perceive the technology to be.</li>
    <li><strong>Trust / Trustworthiness (L1):</strong> Captures the degree to which participants trust the technology to work reliably and correctly.</li>
    <li><strong>Adoption Intentions / Behavioral Intentions (L1):</strong> Reflects participants' likelihood of using the technology and recommending it to others.</li>
    <li><strong>Valence (L1):</strong> Measures the overall positive or negative evaluation of the technology.</li>
    <li><strong>Affinity for Technology Interaction (ATI) (L2):</strong> Captures the participants' general tendency to actively engage with and enjoy using new technologies.</li>
    <li><strong>Openness to Experience (L2):</strong> Assesses participants’ general curiosity, imagination, and willingness to explore new and unconventional ideas or experiences.</li>
  </ul>
</section>
  </div>
</main>

<form id="page-form"></form>

<footer class="content-vertical-center content-horizontal-right" style="margin-top: 20px;">
  <button id="continue" type="submit" form="page-form">
    Continue &rarr;
  </button>
</footer>

   `,

   


// ################### Start of Study ###################
   greetings: `
    <form id="page-form">
<!-- multiline text --> 
<div class="page-item page-item-textarea" id="page-item-improvement_critic" style="max-width: 60%; margin: 0 auto;">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
    Haben Sie Feedback oder Kritik zu dieser Seite?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
    Inhaltlich, Rechtschreibung, Layout, etc.
  </p>
  <textarea name="improvement_critic" class="w-100" rows="8"></textarea>
  
  <hr style="margin: 2rem 0;"> <!-- horizontale Linie -->
</div>
<!-- END multiline text -->
 </form>

      <header>
   <div class="row">
   <div class="column2">
   <h2>Vielen Dank für Ihre Teilnahme an einer Studie der Allgemeinen Psychologie der Universität Freiburg!</h2>
 </div>
   <div class="column">
   <img src="src/static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
       <i> Wichtiger Hinweis im Voraus: Sie können den Text und die Bilder der Studie jederzeit vergrößern oder verkleinern, damit Sie diese besser lesen können: </i>
       <ul>
           <li>
           Windows: Halten Sie die <kbd>Strg</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
           </li>
           <li>
               Mac: Halten Sie die <kbd>command</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
               </li>
       </ul>
       <br>
       <br>
       <section>
       Mit unserer Forschung zielen wir darauf ab, ein besseres Verständnis des menschlichen Verhaltens und mentaler Prozesse zu erlangen. 
       Zu diesem Zweck wird in der folgenden Studie Ihr Verhalten gemessen (z.B. Entscheidungen, Reaktionszeiten, ob Sie den Vollbildmodus verlassen haben).
       </section>
       <br>
       <section>
       Die Dauer der Studie beträgt <b>etwa 20 Minuten</b>.
       Bitte benutzen Sie für die Studie einen <b>Computer oder Laptop mit Tastatur</b>. 
       Bitte stellen Sie sicher, dass Sie an der Studie ungestört teilnehmen können.
       </section>
       <br>
       <section>
       Das Ziel der Studie ist es, Ihre Einstellung und Gefühle zu einem neuartigen Jackensystems namens Nano-Pat-Parka zu messen. 
       Dafür zeigen wir Ihnen verschiedene textuelle Beschreibungen des Jackenssystems.
       Auf den nächsten Seiten finden Sie weitere Informationen zum genauen Ablauf der Studie. Zunächst möchten wir Sie bitten, auf der folgenden Seite der informierten Einwilligung zuzustimmen.       
       </section>
   </div>
 </main>
 

 
 <footer class="content-vertical-center content-horizontal-right">
   Um mit der Studie fortzufahren, drücken Sie bitte auf &nbsp;
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informCon: `
    <form id="page-form">
<!-- multiline text --> 
<div class="page-item page-item-textarea" id="page-item-improvement_critic" style="max-width: 60%; margin: 0 auto;">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
    Haben Sie Feedback oder Kritik zu dieser Seite?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
    Inhaltlich, Rechtschreibung, Layout, etc.
  </p>
  <textarea name="improvement_critic" class="w-100" rows="8"></textarea>
  
  <hr style="margin: 2rem 0;"> <!-- horizontale Linie -->
</div>
<!-- END multiline text -->
 </form>



   <header>
   <h2>Aufgeklärte Einwilligung</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
  <section>
       Im Folgenden erhalten Sie Informationen über Ihre Teilnahme an der Studie. Bitte lesen Sie diese sorgfältig durch:
       </section>
       <br>
       <section>
       Vielen Dank, dass Sie in Erwägung ziehen, an unserer Online-Studie teilzunehmen. Wir möchten betonen, dass Ihre Beteiligung vollkommen freiwillig ist und Sie 
       jederzeit ohne Angabe von Gründen Ihre Einwilligung zurückziehen können.
       </section>
       <br>
       <section>
       Es ist wichtig für Sie zu wissen, dass wir während dieser Studie keine persönlichen Daten erfassen. 
       Folglich werden die Daten nach Abschluss der Datenerhebungsphase vollständig anonymisiert sein, so dass es unmöglich ist, irgendwelche Daten mit Ihnen in Verbindung zu bringen.
       </section>
       <br>
       <section>
       Trotz der Anonymität bitten wir Sie freundlich um Ihre volle Konzentration und Aufmerksamkeit während der Teilnahme an der Studie. Dies trägt wesentlich zur Qualität und Zuverlässigkeit unserer Forschung bei.
       </section>
       <br>
       <section>
       Abschließend planen wir, die Ergebnisse und Daten aus dieser Studie in zukünftigen Veröffentlichungen zu verwenden. Seien Sie jedoch versichert, dass alle veröffentlichten Materialien in anonymisierter Form vorliegen werden. 
       Wenn Sie jetzt oder nach dem Experiment Fragen haben, kontaktieren Sie bitte Julius Fenn 
       (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>)
        oder Prof. Andrea Kiesel (<a href="mailto:kiesel@psychologie.uni-freiburg.de">kiesel@psychologie.uni-freiburg.de</a>).
       </section>
       <br>
       <form id="page-form" style="display: block;" autocomplete="off">
           <!-- BEGIN multiple choice -->
           <div class="page-item page-item-radio" id="page-item-ques_dummycam">
               <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
               Bitte wählen Sie eine der folgenden Optionen:
               </p>
               <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">
               Die Ablehnung der aufgeklärten Einwilligung führt zur Beendigung der Studie.
               </p>
 
               <table class="table-plain page-item-table">
                   <colgroup>
                       <col style="width: 7.5%">
                       <col style="width: 92.5%">
                   </colgroup>
                   <tbody>
                       <!--ans1-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="1" id="dummy_informedconsent"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent" class="text-left" style="font-size:26px">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong style="font-size:26px">zustimme</strong>.
                               </label>
                           </td>
                       </tr>
                       <!--ans2-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="0" id="dummy_informedconsent2"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent2" class="text-left" style="font-size:26px">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong style="font-size:26px">nicht zustimme</strong>.
                               </label>
                           </td>
                       </tr>
 
                   </tbody>
               </table>
           </div>
           <!-- END multiple choice -->
       </form>
   </div>
 </main>
 

 
 <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informConNo: `
   <header></header>
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
   <section>
       Sie haben der aufgeklärten Einwilligung nicht zugestimmt. Leider bedeutet das, dass die Studie für Sie beendet ist. Sie können
       jetzt den Bildschirm schließen. Drücken Sie die <kbd>Esc</kbd>-Taste, um den Vollbildmodus zu beenden.
   </section>
 </div>
 </main>
   `,
   exclusionCriteria: `
       <form id="page-form">
<!-- multiline text --> 
<div class="page-item page-item-textarea" id="page-item-improvement_critic" style="max-width: 60%; margin: 0 auto;">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
    Haben Sie Feedback oder Kritik zu dieser Seite?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
    Inhaltlich, Rechtschreibung, Layout, etc.
  </p>
  <textarea name="improvement_critic" class="w-100" rows="8"></textarea>
  
  <hr style="margin: 2rem 0;"> <!-- horizontale Linie -->
</div>
<!-- END multiline text -->
 </form>



<header>
  <h2>Vielen Dank, dass Sie den Teilnahmebedingungen zugestimmt haben.</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
    <section>
      Bevor wir beginnen, möchten wir Sie auf die folgenden Regeln während der Online-Studie hinweisen:
    </section>
    <br>
    <ul>
      <li>Bitte beantworten Sie die Studie konzentriert.</li>
      <li>Verlassen Sie den Browserbildschirm der Studie nicht, es sei denn, Sie werden ausdrücklich dazu aufgefordert.</li>
      <li>Bitte lesen Sie alle Anweisungen sorgfältig und befolgen Sie diese.</li>
    </ul>
    <br>
    <br>
    Die Qualität unserer experimentellen und Umfragedaten ist uns sehr wichtig. Um die genauesten Einschätzungen Ihrer Meinungen zu erhalten, ist es wichtig, dass Sie jede Frage dieser Umfrage sorgfältig beantworten.
    <br>
    <form id="page-form">
      <!-- see: https://www.qualtrics.com/blog/attention-checks-and-data-quality/ -->
      <!-- multiple choice + text field --> 
      <div class="page-item page-item-radio" id="page-item-ques_dummycam">
        <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
          Verpflichten Sie sich, in dieser Umfrage sorgfältige Antworten zu geben?
        </p>
        <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
        </p>

        <table class="table-plain page-item-table">
          <colgroup>
            <col style="width: 7.5%">
            <col style="width: 92.5%">
          </colgroup>
          <tbody>
            <!--ans1--> 
            <tr>
              <td>
                <input type="radio" name="commCheck" value="0" id="commCheck" required="">
              </td>
              <td>
                <label for="commCheck" class="text-left" style="font-size:26px">
                  Ich kann es nicht versprechen
                </label>
              </td>
            </tr>
            <!--ans2--> 
            <tr>
              <td>
                <input type="radio" name="commCheck" value="1" id="commCheck2" required="">
              </td>
              <td>
                <label for="commCheck2" class="text-left" style="font-size:26px">
                  Ja, ich werde
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="commCheck" value="2" id="commCheck3" required="">
              </td>
              <td>
                <label for="commCheck3" class="text-left" style="font-size:26px">
                  Nein, ich werde nicht
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END multiple choice + text field --> 
    </div>
</main>

</form>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Weiter &rarr;
  </button>
</footer>

   `,
  
   

 // ################### Rating Task ###################
 ExplenationRatingTask: `
<header>
  <h2>Vielen Dank für Ihre bisherige Teilnahme an der Onlinestudie!</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">

<section>
In dieser Studie untersuchen wir, wie neue Technologien anhand sogenannter basaler Attribute – grundlegender, semantisch und emotional bewerteter Merkmale – wahrgenommen werden. 
Als Beispiel dient der Nano-Pat-Parka, ein innovatives Schutzjackensystem, dessen Eigenschaften auf Basis solcher Attribute beschrieben werden. 
</section>

<br><br>

<section>
❓ <strong>Was sind basale Attribute?</strong>
<br>
Basale Attribute fassen zentrale Eigenschaften von Technologien in kurzer, prägnanter Form zusammen. Sie ermöglichen eine strukturierte Beschreibung, ohne in technische Details zu gehen.
</section>

<br><br>

<section>
📝 <strong>Ihre Aufgabe:</strong>
<br>
Im nächsten Schritt sehen Sie sechs kurze Beschreibungen eines möglichen zukünftigen Jackensystems, dem Nano-Pat-Parka. Bitte bewerten Sie jeweils:
<ul style="margin-top: 10px;">
  <li>die wahrgenommene Nützlichkeit,</li>
  <li>Ihr Vertrauen in die Technologie,</li>
  <li>Ihre Nutzungswahrscheinlichkeit,</li>
  <li>und Ihr spontanes emotionales Empfinden.</li>
</ul>
Antworten Sie bitte möglichst intuitiv. Ihre Einschätzungen sind ein wertvoller Beitrag zu unserem Forschungsprojekt.
</section>

  </div>
</main>

<form id="page-form"></form>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Weiter &rarr;
  </button>
</footer>
  `,



// ################### Survey Scales ###################
TransitionToScales: `
<header>
 <h2>Thank you for completing the Word Association Task!</h2>
 </header>

<main class="content-horizontal-center content-vertical-center">
<div class="w-xl text-justify">
        <section>
              <p>You have completed the word association task. Finally, we ask you to answer some <strong>Questionnaires</strong>. These questions will help us understand the context of your responses better. Please respond to each questionnaire carefully.</p>
        </section>
</div>
</main>
<form id="page-form">
</form>

<footer class="content-vertical-center content-horizontal-right">
<button id="continue" type="submit" form="page-form">
    Continue &rarr;
</button>
</footer>
`,

AdjectivePairsObeseScale:`
 <main class="content-horizontal-center content-vertical-center">
  
  <div class="w-xl">
    <form id="page-form">
      <!-- START question block --> 
      <div>
        <p class="text-left" style="margin: 1rem 0 0.25rem">
          Below are 14 pairs of adjectives commonly used to describe <strong>obese</strong> individuals. 
          For each pair, select the point on the scale that most closely reflects your feelings and beliefs in relation to the adjectives.
        </p>
        
        <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
          Please answer every question, even if you feel uncertain or don’t have strong opinions about a specific pair of adjectives.
        </p>
            
        <table class="page-item-table" id="tablerandom">
          <colgroup>
            <col style="width: 29%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 29%">
          </colgroup>

         <thead class="sticky-top">
            <tr><th class="sticky-top "></th>
              <th class="sticky-top text-center">
                1
              </th>
              <th class="sticky-top text-center">
                2
              </th>
              <th class="sticky-top text-center">
                3
              </th>
              <th class="sticky-top text-center">
                4
              </th>
              <th class="sticky-top text-center">
                5
              </th>
         <th class="sticky-top"></th>
            </tr>
          </thead>

        <tbody>
<!-- bipolar-scale: 1 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 2 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 3 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 4 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 5 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 6 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 7 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 8 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 9 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 10 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 11 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
          </tbody>
          </table>
        </div>
  <!-- END question type --> 
      </form>
    </div> 
  </main>
  
  
  
  <footer class="content-horizontal-right content-vertical-center">
    <button type="submit" form="page-form">
      Continue →
    </button>
  </footer>
`,
// ################### Survey Scales ###################
BlueDotTask:`
  <header>
    <h2>
   Blue Dot Task
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center" >
  <div class="w-xl">
      <form id="page-form" style="display: block;" autocomplete="off">
  <p>Please click on the little blue circle at the bottom of the screen.<br>
        Do not click on the scale items that are labeled from 1 to 9.<br>
        This is just to screen out random clicking.</p>


<div class="scale">
        <button class="scale-button" data-value="1">1</button>
        <button class="scale-button" data-value="2">2</button>
        <button class="scale-button" data-value="3">3</button>
        <button class="scale-button" data-value="4">4</button>
        <button class="scale-button" data-value="5">5</button>
        <button class="scale-button" data-value="6">6</button>
        <button class="scale-button" data-value="7">7</button>
        <button class="scale-button" data-value="8">8</button>
        <button class="scale-button" data-value="9">9</button>
    </div>
    <button class="blue-dot" id="blueDot">•</button>
     </form>
  </div> 
</main>
  
  <footer class="content-vertical-center content-horizontal-right" id="blue-dot-footer">
  <button id="continue" type="submit" form="page-form" style="visibility: hidden;">
  Continue &rarr;
</button>
</footer>
`,
// Conscientious Completion
ConscientiousCompletion: `
<header>
  <h2>
  Please answer the following question:
  </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl">
    <form id="page-form" style="display: block;" autocomplete="off">
      <!-- BEGIN multiple choice -->
      <div class="page-item page-item-radio" id="page-item-ques_taskcompletion">

 <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
          Did you complete the tasks in this study conscientiously and to the best of your ability?
 </p>
 <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
           Please note that your answer to this question will have no impact on your payment via Prolific. It is only important for the scientific validity of this study.

 </p>
        <table class="table-plain page-item-table">
          <colgroup>
            <col style="width: 7.5%">
            <col style="width: 92.5%">
          </colgroup>
          <tbody>
            <!-- Option 1 -->
            <tr>
              <td>
                <input type="radio" name="feedback_conscientiousCompletion" value="1" id="task_completion_yes" required>
              </td>
              <td>
                <label for="task_completion_yes" class="text-left" style="font-size:26px">
                  Yes, I completed the tasks conscientiously.
                </label>
              </td>
            </tr>
            <!-- Option 2 -->
            <tr>
              <td>
                <input type="radio" name="feedback_conscientiousCompletion" value="0" id="task_completion_no" required>
              </td>
              <td>
                <label for="task_completion_no" class="text-left" style="font-size:26px">
                  No, I did not complete the tasks conscientiously.
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END multiple choice -->
    </form>
  </div>
</main>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Continue &rarr;
  </button>
</footer>

`,


      // feedback question
  feedbackQues: `
  <header>
    <h2>
    Please answer the following last question if you wish:
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center" >
  <div class="w-xl">
    <form id="page-form" style="display: block;" autocomplete="off">
<!-- multiline text text --> 
<div class="page-item page-item-textarea" id="page-item-feedback_critic">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
  Do you have any feedback or criticism about the online study? 
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Any criticism or suggestions for improvement will be of great help in improving future studies. 
  </p>
  <textarea name="feedback_critic" class="w-100" rows="8"></textarea>
</div>
<!-- END multiline text --> 
     
    </form>
  </div> 
</main>
  
  <footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
  Continue &rarr;
</button>
</footer>
  `,
}
