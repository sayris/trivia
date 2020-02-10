import firebase from './clients/firebase.js';


class questionData {
    constructor(choices,questionText, correctChoiceIndex){
        this.choices=choices;
        this.questionText= questionText;
        this.correctChoiceIndex= correctChoiceIndex;

        var database = firebase.buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = data.val();

 console.log(questions);
// Do something with the questions
});

    }
}

// var database = buildFirebase();
// var databaseRef = database.ref("/questions");
// databaseRef.once("value").then(function(data) {
//  const questions = data.val();

//  console.log(questions);
// Do something with the questions
// });
