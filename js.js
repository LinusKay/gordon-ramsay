var firsts = [{text: "Fuck off,",}, {text: "Get fucked,",}, {text: "Shut the fuck up,",}, {text: "Fuck you,",}, {text: "Fuck up,",}, {text: "Piss off,",}, {text: "Get out,",}, {text: "Its RAAAW,",}, {text: "Its burnt,",}, {text: "What are you doing,",}, {text: "Move your ass,",}, {text: "More sauce!",}, {text: "Wake up,",}, {text: "Get a grip,"}];

var seconds = [{text: "you stupid",}, {text: "you lazy",}, {text: "you pathetic",}, {text: "you useless",}, {text: "you silly",}, {text: "you ignorant",}, {text: "you fat",}, {text: "you dumb",}, {text: "you little",}, {text: "you fucking",}, {text: "you bloody",}, {text: "you ugly",}, {text: "you weird",}, {text: "you hopeless",}, {text: "you wimpy",}, {text: "you goddamn",}, {text: "you brainless",}, {text: "you slow",}, {text: "you proud",}, {text: "you fat-mouthed",}, {text: "you blasted",}, {text: "you wasted",}, {text: "you dopey",}, {text: "you right",}, {text: "you worthless",}, {text: "you stinking"}];

var thirds = [{text: "piece of shit! ",}, {text: "asshole! ",}, {text: "donut! ",}, {text: "idiot! ",}, {text: "jerk! ",}, {text: "pig! ",}, {text: "donkey! ",}, {text: "fuckface! ",}, {text: "wanker! ",}, {text: "cow! ",}, {text: "dumbo! ",}, {text: "imbecile! ",}, {text: "bitch! ",}, {text: "muppet! ",}, {text: "banana! ",}, {text: "dickhead! ",}, {text: "gremlin! ",}, {text: "bozo! ",}, {text: "fucker! ",}, {text: "fatass! ",}, {text: "dog! ",}, {text: "plank! ",}, {text: "dick! ",}, {text: "giraffe! ",}, {text: "tosser! ",}, {text: "crybaby! "}];

var first = firsts[Math.floor(Math.random() * firsts.length)];
var second = seconds[Math.floor(Math.random() * seconds.length)];
var third = thirds[Math.floor(Math.random() * thirds.length)];

firstpart();
secondpart();
thirdpart();

function firstpart(){
var first = firsts[Math.floor(Math.random() * firsts.length)];
document.getElementById("first").innerHTML =
first.text;
}
function secondpart(){
var second = seconds[Math.floor(Math.random() * seconds.length)];
document.getElementById("second").innerHTML =
second.text;
}
function thirdpart(){
var third = thirds[Math.floor(Math.random() * thirds.length)];
document.getElementById("third").innerHTML =
third.text;
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 49) {
        firstpart();
    }
    else if(event.keyCode == 50) {
        secondpart();
    }
    else if(event.keyCode == 51) {
        thirdpart();
    }
    else if(event.keyCode == 82) {
        firstpart();
		secondpart();
		thirdpart();
    }
});