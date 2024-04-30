//question num 121

for (let i = 1; i <= 10 ; i++) {
    if (i === 5 ) {
        continue;
    }
    console.log(i);
}

//question num 122 

let counter: number = 10;

while (counter > 0) {
    if (counter === 5 ) {
        break;
    }
    console.log(counter);
    counter--;
}

//question num 123

function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found : ${char}`);
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syzygy")