for (let i = 0; i < 1000; i++) {
   if (i > 400) break;
   console.log(i); 
} 

//statements show 1 - 10

for (let f = 0; f < 11; f++) {
    console.log(f);
}

let w = 0;
while (w < 11) {
    console.log(w);
    w++;
}

let d = 0
do {
    console.log(d);
    d++;
} while (d < 11);

// 100 - 0

for (let f = 100; f > 0; f--) {
    console.log(f);
}

w = 100
while (w > 0) {
    console.log(w);
    w--;
}

d = 100
do {
    console.log(d);
    d--;
} while (d > 0);

//even numbers 1-100
for (let f = 0; f < 100; f++) {
    if (f % 2 !== 0) continue;
    console.log(f);
}

w = 0
while (w < 50) {
    console.log(w + w);
    w++;
};

d = 0
do {
    console.log(d + d);
    d++;
} while (d < 50);


// produce output

for (let f = 1; f < 13; f++) {
    console.log('*'.repeat(f));
 }

w = 1
while (w <= 13) {
    console.log('*'.repeat(w));
    w++;
}

d = 1
do {
    console.log('*'.repeat(d));
    d++
} while (d <=13);
