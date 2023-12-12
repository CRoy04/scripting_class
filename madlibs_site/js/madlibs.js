console.log("It's working!");


function write() {
console.log("written inside the function");


var input1 = document.getElementById('input1').value;
console.log(input1);

var input2 = document.getElementById('input2').value;
console.log(input2);

var input3 = document.getElementById('input3').value;
console.log(input3);

var input4 = document.getElementById('input4').value;
console.log(input4);

var input5 = document.getElementById('input5').value;
console.log(input5);

var input6 = document.getElementById('input6').value;
console.log(input6);

var input7 = document.getElementById('input7').value;
console.log(input7);

var input8 = document.getElementById('input8').value;
console.log(input8);

var input9 = document.getElementById('input9').value;
console.log(input9);


var coldmonths;



    if (document.querySelector('input[name="coldmonths"]:checked') != null) {



        coldmonths = document.querySelector('input[name="coldmonths"]:checked').value;

    } else {



        coldmonths = "";

    }

    console.log(coldmonths);


    var celebMessage;

    if (coldmonths == "october") {
        celebMessage = "spooktober.";
    }
    else if (coldmonths == "november") {
        celebMessage = "the start of winter";
    }
    else if (coldmonths == "december") {
        celebMessage = "christmas time";
    }
    else if (coldmonths == "january") {
        celebMessage = "new year new me";
    }

    console.log(celebMessage);




    document.getElementById('output').innerHTML += "It was a cold " + coldmonths +  " morning. I woke up to the sound of my " + input1 + " whining outside my bedroom. I yelled “NOT AGAIN!” and " + input2 + " got out of bed, got ready, and got into my " + input3 +  ". I knew I was already going to be late, so I quickly stopped at " + input4 + " to get a " + input5 +  ". After getting my drink, I got on the highway. I had to drive " + input6 + " because the roads were slick. I looked at the time and realized how late I was going to be. I started driving faster to make up some time. Suddenly I lost traction and I swerved into a " + input7 +  ". Luckily nobody was hurt, and I was okay, but my vehicle was not. I exited the vehicle and called my boss to tell him what happened. Thankfully he was understanding. Fortunately, " + input8 + " who was also running behind, saw what happened and offered me a ride to work. I hoped in his " + input9 + " and off we went. The moral of the story is to never speed on your way to work, especially when the roads are in bad condition. Make sure you check the weather the night before, and if the weather is bad, make sure you give yourself enough time in the morning to get to where you need to go safely. If you are ever running behind, it’s always better to show up late rather than not at all show up at all."


}