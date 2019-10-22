function showEvenNumbers (numMax) {
    for (let i = 0; i <= numMax; i++) {
        if (i % 2 !== 0) continue;
        console.log(i);
    }
}

showEvenNumbers(100);

function showUser (name, age, phoneNumber, street, postalCode, married) {
   
    console.log("name: ", name,"Age: ", age,"Phone Number: ", phoneNumber,"Street: ", street, "Postal Code: ", postalCode,"Married: ", married);
}

showUser ("kevin", 29, 3063701356, "simonfraser", "s7h3t2", false);



function value() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) continue;
        console.log(i);
    }
    
}

let evenNumber = value;

evenNumber();
evenNumber();
evenNumber();
evenNumber();
evenNumber();

function fibon(num) {
    var a = 1;
    console.log(a);
    var b = 0;
    console.log(b);
    var c;

    for (i = 0; i < num; i++){
        c = a + b;
        console.log(c);
        a = b + c;
        console.log(a);
        b = c + a;
        console.log(b);
    }
}

fibon(12);

var showName = showNameFunc;

function showNameFunc (name) {
    console.log("=============");
    console.log('=  ',name,'  =');
    console.log("=============");
}

showName("Bobby");