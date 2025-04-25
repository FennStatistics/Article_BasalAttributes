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



/* items Perceived Causes of Obesity Questionnaires */
let CausesOfObesityList = {
  ques: [
    "Physical inactivity",
    "Overeating",
    "High fat diet",
    "Genetic factors",
    "Poor nutritional knowledge",
    "Psychological problems",
    "Repeated dieting (weight cycling)",
    "Restaurant eating",
    "Lack of willpower",
    "Metabolic defect",
    "Endocrine disorder",
    "Pricing of foods",
    "Marketing/advertising of unhealthy foods",
    "Food addiction"
  ],
  scale: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
};

var index_CausesOfObesityList = shuffle(CausesOfObesityList);
console.log("CausesOfObesityList: ", CausesOfObesityList);
console.log("CausesOfObesityList index: ", index_CausesOfObesityList);

var items_CausesOfObesity = createitems(CausesOfObesityList, index_CausesOfObesityList);
console.log(items_CausesOfObesity.slice(0, 4));


/* items Beliefs About Obese Persons Scale */
let BeliefsAboutObesePersonsList = {
  ques: [
    "Obesity often occurs when eating is used as a form of compensation for lack of love or attention.",
    "In many cases, obesity is the result of a biological disorder.",
    "Obesity is usually caused by overeating.",
    "Most obese people cause their problem by not getting enough exercise.",
    "Most obese people eat more than non obese people.",
    "The majority of obese people have poor eating habits that lead to their obesity.",
    "Obesity is rarely caused by a lack of willpower.",
    "People can be addicted to food, just as others are addicted to drugs, and these people usually become obese."
  ],
  scale: ["1r", "2", "3r", "4r", "5r", "6r", "7", "8r"]
};

var index_BeliefsAboutObesePersonsList = shuffle(BeliefsAboutObesePersonsList);
console.log("BeliefsAboutObesePersonsList: ", BeliefsAboutObesePersonsList);
console.log("BeliefsAboutObesePersonsList index: ", index_BeliefsAboutObesePersonsList);

var items_BeliefsAboutObesePersons = createitems(BeliefsAboutObesePersonsList, index_BeliefsAboutObesePersonsList);
console.log(items_BeliefsAboutObesePersons.slice(0, 4));


/* items Attitude Towards Obese People Scale */
let AttitudeTowardsObesePeopleScale = {
  ques: [
    "Obese people are as happy as nonobese people.",
    "Most obese people feel that they are not as good as other people.",
    "Most obese people are more self-conscious than other people.",
    "Obese workers cannot be as successful as other workers.",
    "Most nonobese people would not want to marry anyone who is obese.",
    "Severely obese people are usually untidy.",
    "Obese people are usually sociable.",
    "Most obese people are not dissatisfied with themselves.",
    "Obese people are just as self-confident as other people.",
    "Most people feel uncomfortable when they associate with obese people.",
    "Obese people are often less aggressive than nonobese people.",
    "Most obese people have different personalities than nonobese people.",
    "Very few obese people are ashamed of their weight.",
    "Most obese people resent normal-weight people.",
    "Obese people are more emotional than nonobese people.",
    "Obese people should not expect to lead normal lives.",
    "Obese people are just as healthy as nonobese people.",
    "Obese people are just as sexually attractive as nonobese people.",
    "Obese people tend to have family problems.",
    "One of the worst things that could happen to a person would be for him to become obese."
  ],
  scale: ["1", "2r", "3r", "4r", "5r", "6r", "7", "8", "9", "10r", "11r", "12r", "13", "14r", "15r", "16r", "17", "18", "19r", "20r"]
};

var index_AttitudeTowardsObesePeopleScale = shuffle(AttitudeTowardsObesePeopleScale);
console.log("AttitudeTowardsObesePeopleScale: ", AttitudeTowardsObesePeopleScale);
console.log("AttitudeTowardsObesePeopleScale index: ", index_AttitudeTowardsObesePeopleScale);

var items_AttitudeTowardsObesePeople = createitems(AttitudeTowardsObesePeopleScale, index_AttitudeTowardsObesePeopleScale);
console.log(items_AttitudeTowardsObesePeople.slice(0, 4));


/* items Subscale Germ Aversion */
let GermAversionList = {
  ques: [
    "I prefer to wash my hands pretty soon after shaking someone’s hand.",
    "I avoid using public telephones because of the risk that I may catch something from the previous user.",
    "I do not like to write with a pencil someone else has obviously chewed on.",
    "I dislike wearing used clothes because you do not know what the last person who wore it was like.",
    "I am comfortable sharing a water bottle with a friend.",
    "It really bothers me when people sneeze without covering their mouths.",
    "It does not make me anxious to be around sick people.",
    "My hands do not feel dirty after touching money."
  ],
  scale: ["1", "2", "3", "4", "5r", "6", "7r", "8r"]
};

var index_GermAversionList = shuffle(GermAversionList);
console.log("GermAversionList: ", GermAversionList);
console.log("GermAversionList index: ", index_GermAversionList);

var items_GermAversion = createitems(GermAversionList, index_GermAversionList);
console.log(items_GermAversion.slice(0, 4));


/* items Subscale Pathogen Disgust */
let PathogenDisgustList = {
  ques: [
    "Seeing some mold on old leftovers in your refrigerator.",
    "Standing close to a person who has body odor.",
    "Shaking hands with a stranger who has sweaty palms.",
    "Stepping on dog poop.",
    "Accidentally touching a person’s bloody cut.",
    "Seeing a cockroach run across the floor.",
    "Sitting next to someone who has red sores on their arm."
  ],
  scale: ["1", "2", "3", "4", "5", "6", "7"]
};

var index_PathogenDisgustList = shuffle(PathogenDisgustList);
console.log("PathogenDisgustList: ", PathogenDisgustList);
console.log("PathogenDisgustList index: ", index_PathogenDisgustList);

var items_PathogenDisgust = createitems(PathogenDisgustList, index_PathogenDisgustList);
console.log(items_PathogenDisgust.slice(0, 4));




/* 
items Fat Phobia Scale
different scale structure: pairs describing obese or fat people
*/

const AdjectivePairsObese = [
  {
    scale: "pair01",
    left: "lazy",
    right: "industrious"
  },
  {
    scale: "pair02",
    left: "no will power",
    right: "has will power"
  },
  {
    scale: "pair03",
    left: "attractive",
    right: "unattractive"
  },
  {
    scale: "pair04",
    left: "good self-control",
    right: "poor self-control"
  },
  {
    scale: "pair05",
    left: "fast",
    right: "slow"
  },
  {
    scale: "pair06",
    left: "having endurance",
    right: "having no endurance"
  },
  {
    scale: "pair07",
    left: "active",
    right: "inactive"
  },
  {
    scale: "pair08",
    left: "weak",
    right: "strong"
  },
  {
    scale: "pair09",
    left: "self-indulgent",
    right: "self-sacrificing"
  },
  {
    scale: "pair10",
    left: "dislikes food",
    right: "likes food"
  },
  {
    scale: "pair11",
    left: "shapeless",
    right: "shapely"
  },
  {
    scale: "pair12",
    left: "undereats",
    right: "overeats"
  },
  {
    scale: "pair13",
    left: "insecure",
    right: "secure"
  },
  {
    scale: "pair14",
    left: "low self-esteem",
    right: "high self-esteem"
  }
];

var index_AdjectivePairsObese = shufflePair(AdjectivePairsObese);
console.log("AdjectivePairsObese index: ", index_AdjectivePairsObese);

// Create the first subarray using the first 7 indices
const firstHalf = index_AdjectivePairsObese.slice(0, 7).map(index => AdjectivePairsObese[index]);
// Create the second subarray using the indices from 8 to 14
const secondHalf = index_AdjectivePairsObese.slice(7, 14).map(index => AdjectivePairsObese[index]);

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);
