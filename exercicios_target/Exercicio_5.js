const str = "Target";

let trocaOrdem = [];

for (let i = str.length - 1; i >= 0; i--) {
    trocaOrdem.push(str[i]);
}

trocaOrdem = trocaOrdem.join("");

console.log(trocaOrdem);