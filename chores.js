File Edit Options Buffers Tools Javascript Help                                                                                                                                                                                              
    //console.log('Two second later');                                                                                                                                                                                                       
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function person(name, number){
    this.Name = name;
    this.Number = number;
    this.Assigned = false;
    this.Partner = "None";
}

function pair(person1, person2, d){
    this.p1 = person1;
    this.p2 = person2;
    this.duty = d;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function choreAlert(){
    var names = ["James", "Dominic", "Nate", "Scott", "Tom", "Brayden", "Connor", "Small", "Sam"];
    var duties = ["Kitchen", "Downstairs(non-kitchen) including trash", "Bar area and balcony", "Living Room"]
    var numbers = ['19258180660', '18583425140', '18588229649','19257081451', '19259844698', '19252075547', '17144696749','19097672286', '19258196081'];

    var people = [];

    for (i = 0; i < names.length; i++){
        people.push(new person(names[i], numbers[i]));
    }

    shuffleArray(people);
    rater = people[0];
    people[0].duty = "Rater";
    var i = 1;
    while (i < people.length/2){
        people[i].Partner = people[people.length - i];
        people[people.length-i].Partner = people[i];
        people[i].duty = people[people.length-i].duty = duties[i- 1];
        i++;
    }

    for(var p = 0; p < people.length; p++){
        var message;
	if(people[p].duty == "Rater")
            message = "Hi " + people[p].Name + ", This week you are the rater, that means you rate everyone elses work" + " Have fun!";
        else
            message = "Hi " + people[p].Name + ", your partner for the week will be " + people[p].Partner.Name + " and your assignment for the week is the " + people[p].duty + " Have fun!";
        console.log(message + " " + people[p].Number);
        sendMessage(message, people[p].Number);
    }
    
}

setInterval(choreAlert, 60000);
