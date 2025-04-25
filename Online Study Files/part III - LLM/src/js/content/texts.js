const textObj = {
// ################### Start of Study ###################
   greetings: `
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
 
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   Um mit der Studie fortzufahren, drücken Sie bitte auf &nbsp;
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informCon: `
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
 
 <form id="page-form">
 </form>
 
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
   <header>
     <h2>Thank you for agreeing to the conditions of participation. </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
     <div class="w-xl text-justify">
         <section>
             Before we begin, we would like to draw your attention to the following rules during the online study:
         </section>
         <br>
         <ul>
             <li>Please answer the study in a focused manner.</li>
             <li>Do not leave the browser screen of the study unless you are explicitly asked to do so. </li>
             <li>Please read all instructions carefully and comply with them.</li>
         </ul>
<br>
<br>
We care about the quality of our experimental and survey data. To get the most accurate measures of your opinions, it is important that you provide thoughtful answers to each questions in this survey. 
<br>
<form id="page-form">
<!-- see: https://www.qualtrics.com/blog/attention-checks-and-data-quality/ -->
<!-- multiple choice + text field --> 
<div class="page-item page-item-radio" id="page-item-ques_dummycam">
 <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
 Do you commit to providing thoughtful answers in this survey?
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
   I can't promise either way
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
   Yes, I will
      </label>
 </td>
</tr>
<tr>
 <td>
   <input type="radio" name="commCheck" value="2" id="commCheck3" required="">
 </td>
 <td>
   <label for="commCheck3" class="text-left" style="font-size:26px">
   No, I will not
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
         Continue &rarr;
     </button>
 </footer>
   `,
   attentionCheck: `
   <header>
     <h2>Before starting the study we would like to get to know you:</h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
 <section>
 Most modern theories of decision-making recognize the fact that decisions do not take place in a vacuum. Individual preferences and knowledge, along with situational variables, 
 can greatly impact the decision process. To facilitate our research on attitudes towards emerging technologies, we are interested in knowing certain factors about you, 
 the decision-maker. Specifically, we are interested in whether you take the time to read the instructions; if not, then some of the specific characteristics of 
 the described emerging technologies can be overlooked. So, to demonstrate that you have read the instructions, please ignore the sports items below and instead 
 select the box marked "other" and type "I read the instructions" in the text box, then click continue. Thank you very much.
 </section>
 <br>
 <br>
 <section >
 <b>Which of these activities do you engage in regularly?</b>
 <br>
 Please check all that apply.
 <br>
 <fieldset id="checkArray"  style="text-align: left; padding: 5px;">
   <div>
     <input type="checkbox" id="attCheck_Skiing" name="attCheck_Skiing">
     <label for="attCheck_Skiing">Skiing</label>
   </div>
   <div>
     <input type="checkbox" id="attCheck_Swimming" name="attCheck_Swimming">
     <label for="attCheck_Swimming">Swimming</label>
   </div>
   <div>
   <input type="checkbox" id="attCheck_Soccer" name="attCheck_Soccer">
   <label for="attCheck_Soccer">Soccer</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Tennis" name="attCheck_Tennis">
 <label for="attCheck_Tennis">Tennis</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Snowboarding" name="attCheck_Snowboarding">
 <label for="attCheck_Snowboarding">Snowboarding</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Basketball" name="attCheck_Basketball">
 <label for="attCheck_Basketball">Basketball</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Jogging" name="attCheck_Jogging">
 <label for="attCheck_Jogging">Jogging</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Cycling" name="attCheck_Cycling">
 <label for="attCheck_Cycling">Cycling</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Pingpong" name="attCheck_Pingpong">
 <label for="attCheck_Pingpong">Ping-pong</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Other" name="attCheck_Other">
 <label for="attCheck_Other">Other</label>
 <input type="text" id="attCheck_OtherText" name="attCheck_OtherText"></input>
 </fieldset>
 </div>
 </section>
 <br>
   </div>
 </main>
 
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
     <button id="continue" form="page-form" onclick="return continueornot();">
     Continue &rarr;
     </button>
   </footer>
   `,
   // not needed
   setupStudy: `
   <header>
     <h2>Overview of the study:</h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
 <section>
The study consists of three parts: 
 </section>
 <br>
 <table>
   <tr>
   <td>1) <strong>Reaction Time Task:</strong> In the first part, you will complete a reaction time task. In this task, you will evaluate displayed words as either positive or negative as quickly as possible.</td>
   </tr>
   <tr>
      <td>2) <strong>Word Association Task:</strong> In the second part, you will participate in a word association task. You will be asked to write down the associations that come to your mind when you see specific words.</td>
   </tr>
   <tr>
      <td>3) <strong>Questionnaires:</strong> Finally, you will answer a series of questions.</td>
 </tr>
 </table>
 <br>
 <section>
Before each task begins, you will receive detailed instructions to ensure that you understand what to do.
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


 // ################### Affective Priming Task ###################



  
  // ################### Affective Imagery ###################
  TransitionToAIT: `
  <header>
      <h2>Thank you for completing the Reaction Time Task!</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
          <section>
              <p>You have completed the reaction time task. Next, you will move on to the <strong>Word Association Task</strong>. This task involves responding to specific words with the first thoughts or associations that come to your mind. Please read the instructions for this task carefully before starting.</p>
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


  AffectiveImageryInst: `
  <header>
  <h2>Instructions "Word Association Game" </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
      <strong>How it works...</strong>
      <section>
          On the top of the screen a word will be shown. Enter the first word that comes to your mind when reading that
          word.
      </section>
      <br>
      <section>
              Use the <kbd>Enter</kbd> key or press the <button style="padding:2px; margin-left:0px; margin-right: 0px; font-size: 30px;" disabled="disabled">Next
              response</button> button to add five associations.
      </section>
      <br>
      <br>
      <strong>Hint</strong>
      <section>
          Only give associations to the word on top of the screen (not to your previous responses!).
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
   AffectiveImageryInst_full: `
   <header>
   <h2>Instructions "Word Association Game" </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
       <strong>How it works...</strong>
       <section>
           On the top of the screen a word will be shown. Enter the first word that comes to your mind when reading that
           word. Only if you really don't know that word, press <button
               style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Unknown word</button>.
       </section>
       <br>
       <section>
           Press <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Next
               response</button> to add up to five words or press <button
               style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">No more
               entries</button> if you can't think of any more.
               <br>
               <br>
               Use the <kbd>Enter</kbd> key or press the <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled;>Next
               response</button> button to add associations.
       </section>
       <br>
       <br>
       <strong>  Some hints</strong>
       <section>
           Only give associations to the word on top of the screen (not to your previous responses!).
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
   AffectiveImagery: `
   <main class="content-horizontal-center content-vertical-center">
   <div>
       What are the first thoughts or images that come to your mind when you think of: 
       <br>
       <br>
 <div style="align-items: display: flex;"> <strong style="font-size: 22px;">
      <span id="cueWord" style="font-size: 36px;">replace me</span>
 </strong>
 </div>
 <br>
     <form id="affectiveImageryForm">
       <div class="affectiveImagery">
           <div class="form-group">
               <input id="R1" name="R1" class="form-control" placeholder="Enter your first association" type="text"
                   autocorrect="off" autocapitalize="none" autofocus autocomplete="off" tabindex="1">
           </div>
           <div class="form-group">
               <input id="R2" name="R2" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="2" disabled="">
           </div>
           <div class="form-group">
               <input id="R3" name="R3" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="3" disabled="">
           </div>
           <div class="form-group">
               <input id="R4" name="R4" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="4" disabled="">
           </div>
           <div class="form-group">
               <input id="R5" name="R5" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="5" disabled="">
           </div>
 
           <small class="text-muted" id="progressLabel">Progress</small>
         
           <div class="progress" style="background: white;">
             <div class="progress-bar-AffectiveImg" style="background: #229954;"> 
           </div>
         </div>
 
 
         <div style="align-items: display: flex;">
         <!-- Prevent implicit submission of the form -->
         <button type="submit" disabled style="display: none" aria-hidden="true"></button>
       
               <button type="button" class="btn btn-default" tabindex="-1" id="submitAssoButton"><span
                       class="glyphicon glyphicon-plus"></span>&nbsp;Next response</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="finalResponse"><span
                       class="glyphicon glyphicon-ok" form="affectiveImageryForm"></span>&nbsp;End the input</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="skipResponse"><span
                       class="glyphicon glyphicon-minus" form="affectiveImageryForm"></span>&nbsp;No more entries</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="unknownResponse"><span
                       class="glyphicon glyphicon-remove" form="affectiveImageryForm"></span>&nbsp;Unknown word</button>
           </div>
       </div>
   </form>
   </div>
   
 </main>
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
// ################### End of Study ###################
TransitionToFinal: `
<header>
 <h2>Thank you for completing the Questionnaires!</h2>
 </header>

<main class="content-horizontal-center content-vertical-center">
<div class="w-xl text-justify">
        <section>
                <p>You have successfully completed the questionnaires. As a final step, we kindly ask you to rate the weight of individuals and answer a few additional questions about yourself.</p>
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
// socio demographic questions
socioDemo: `
<header>
  <h2>
Please answer the following questions about yourself:
 </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
<div class="w-xl text-justify" style="display: block">
  

  <form id="demography">
    <table>
      <!-- Age -->
      <tr style="height: 80px">
        <td class="font-weight-bold text-left">
      How old are you (in years)?
           </td>
        <td>
        <input name="sociodemo_age" type="number" required class="w-100" min="18" max="120" placeholder="Enter age">
        </td>
      </tr>
      
      <!-- Gender NOT gender identity, following Tate et al. (2013) -->
      <tr style="height: 80px">
        <td class="font-weight-bold text-left">
      What is your gender?
              </td>
        <td>
      <select name="sociodemo_gender" required class="w-100">
        <option value="" selected>
          - Please select -
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="intersex">Non-binary</option>
        <option value="none">I prefer not to say.</option>
      </select>
        </td>
      </tr>


            <!-- sexual orientation -->
      <tr style="height: 80px">
        <td class="font-weight-bold text-left">
      What is your sexual orientation?
              </td>
        <td>
      <select name="sociodemo_sexualOrientation" required class="w-100">
        <option value="" selected>
          - Please select -
        </option>
        <option value="heterosexuell">Heterosexuell</option>
        <option value="homosexuell">Homosexuell</option>
        <option value="bisexuell">Bisexuell</option>
                <option value="other">Other</option>
        <option value="none">I prefer not to say.</option>
      </select>
        </td>
      </tr>

      <!-- Weight -->
      <tr style="height: 80px">
        <td class="font-weight-bold text-left">
      What is your current weight?
      <br>
    <span style="color: lightgray; font-size: smaller;">Please indicate whether the weight is in kilograms (kg) or pounds (lb).</span>
        </td>
        <td>
            <div style="display: flex; gap: 5px; align-items: center;">
          <input name="sociodemo_weight" type="number" required class="w-100" min="30" max="500" placeholder="Enter weight">
in
      <select name="sociodemo_weight_type" required class="w-100">
        <option value="" selected>
          - Please select -
        </option>
        <option value="kilograms">kilograms</option>
        <option value="pounds">pounds</option>
      </select>
            </div>
        </td>
      </tr>


      <!-- Height -->
<tr style="height: 80px">
  <td class="font-weight-bold text-left">
    What is your current height?
    <br>
    <span style="color: lightgray; font-size: smaller;">Please indicate whether the height is in centimeters (cm) or feet and inches (ft/in).</span>
  </td>
  <td>
    <div style="display: flex; gap: 5px; align-items: center;">
      <input name="sociodemo_height" type="number" required class="w-100" min="50" max="300" placeholder="Enter height">
      in
      <select name="sociodemo_height_type" required class="w-100">
        <option value="" selected>
          - Please select -
        </option>
        <option value="centimeters">centimeters</option>
        <option value="feet-inches">feet and inches</option>
      </select>
    </div>
  </td>
</tr>


            <!-- Country / Residency -->
      <tr style="height: 80px">
        <td class="font-weight-bold text-left">
      Where is your current residency?
       <br>
    <span style="color: lightgray; font-size: smaller;">Please indicate the name of the country you are currently living.</span>
        </td>
        <td>
            <div>
                <!-- All countries -->
              <select class="form-select" autocomplete="country" id="country" name="sociodemo_residency" style="flex: 1;">
                <option value="">- Please select -</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Åland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua & Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BA">Bosnia & Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="CV">Cape Verde</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="BQ">Caribbean Netherlands</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo - Brazzaville</option>
    <option value="CD">Congo - Kinshasa</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curaçao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czechia</option>
    <option value="CI">Côte d’Ivoire</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="SZ">Eswatini</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Islas Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard & McDonald Islands</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">North Korea</option>
    <option value="KR">South Korea</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Laos</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">North Macedonia</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia</option>
    <option value="MD">Moldova</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar (Burma)</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Curaçao</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestine</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn Islands</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Réunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russia</option>
    <option value="RW">Rwanda</option>
    <option value="BL">St. Barthélemy</option>
    <option value="SH">St. Helena</option>
    <option value="KN">St. Kitts & Nevis</option>
    <option value="LC">St. Lucia</option>
    <option value="MF">St. Martin</option>
    <option value="PM">St. Pierre & Miquelon</option>
    <option value="VC">St. Vincent & Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">São Tomé & Príncipe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia & South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard & Jan Mayen</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syria</option>
    <option value="TW">Taiwan</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad & Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Türkiye</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks & Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UM">U.S. Outlying Islands</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VA">Vatican City</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Vietnam</option>
    <option value="VG">British Virgin Islands</option>
    <option value="VI">U.S. Virgin Islands</option>
    <option value="WF">Wallis & Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
              </select>

                          <!-- Input field for autocomplete -->
              <input type="text" id="autocomplete-country" class="form-control" placeholder="... search your residency" style="flex: 1;" />

            </div>
        </td>
      </tr>
      <!-- Column balance -->
      <colgroup>
        <col style="width: 45%">
        <col style="width: 55%">
      </colgroup>
    </table>
    </form>
</div>
</main>


<footer class="content-vertical-center content-horizontal-right">
<div class="w-l text-justify">
</div>
<button id="continue" type="submit" form="demography">
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
