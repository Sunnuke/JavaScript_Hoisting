// 1
console.log(hello);
var hello = 'world';

// HOIST
//    var hello;
//    console.log(hello);
//    hello = 'world';

{
RESULT: undefined
}

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// HOIST
//    var needle;
//    function test(){
//        var needle = 'magnet';
//        console.log(needle);
//    }
//    needle = 'haystack';
//    test();

{
RESULT: magnet
}

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// HOIST
//    var brendan;
//    function print(){
//        brendan = 'only okay';
//        console.log(brendan);
//    }
//    brendan = 'super cool';
//    console.log(brendan);

{
RESULT : super cool
}

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// HOIST
//    var food;
//    function eat(){
//        var food;
//        food = 'half-chicken';
//        console.log(food);
//        food = 'gone';
//    }
//    food = 'chicken';
//    console.log(food);
//    eat();

{
RESULT: chicken
        half-chicken
}

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// HOIST
//    Error:
//    A var function (var mean function) needs to be declared before it's called

{
RESULT: Uncaught TypeError: mean is not a function
        at <anonymous>:1:1
}

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// HOIST
//    var genre;
//    function rewind() {
//        var genre;
//        genre = "rock";
//        console.log(genre);
//        genre = "r&b";
//        console.log(genre);
//    }
//    console.log(genre);
//    genre = "disco";
//    rewind();
//    console.log(genre);

{
RESULT: undefined
        rock
        r&b
        disco
}

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// HOIST
//    var dojo;
//    function learn() {
//        var dojo;
//        dojo = "seattle";
//        console.log(dojo);
//        dojo = "burbank";
//        console.log(dojo);
//    }
//    dojo = "san jose";
//    console.log(dojo);
//    learn();
//    console.log(dojo);

{
RESULT: san jose
        seattle
        burbank
        san jose
}

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// HOIST
//    Error:
//    A const can't be changed from an object to a string

{
RESULT: VM272:11 Uncaught TypeError: Assignment to constant variable.
        at makeDojo (<anonymous>:11:14)
        at <anonymous>:2:13
}

