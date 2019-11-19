'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

const readline = () => {
    return inputString[currentLine++];
}

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});

const main = () => {
    let q = parseInt(readline());
    let ans = '';
    for (let cs = 0; cs < q; cs++) {
        const n = Number(readline());
        const a = readline().split('');
        const b = readline().split('');
        const c = [];
        const d = [];
        for (let i = 0; i < n; i++) {
            if (a[i] !== b[i]) {
                c.push(b[i]);
                d.push(a[i]);
            }
        }
        c.push(c.shift());
        if (cs) {
            ans += "\n";
        }
        if (c.join() === d.join()) {
            ans += "YES";
        } else {
            c.splice(0, 0, c.pop());
            c.splice(0, 0, c.pop());
            if (c.join() === d.join()) {
                ans += "YES";
            } else {
                ans += "NO";
            }
        }
    }
    console.log(ans);
}
