/*Declare o seguinte Array:

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

Utilizando o for (não for..in nem for..of), faça as seguintes operações:1. Liste todos os elementos do Array2. Liste apenas as notas que forem menor que 1

3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0
4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.
*/
const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

for (let i = 0; i < notas.length; i++) {
   console.log(`Lista notas = ${notas[i]}`);
}

for (let i = 0; i <=6; i++) {
    if (notas[i] < 1) {
    console.log(`Notas menores que 1 = ${notas[i]}`);
    }
}

for (let i = 0; i < notas.length; i++) {
  if (notas[i] === 10) {
    notas.push(9.0);
    console.log(`Se houver alguma nota igual a 10, adicione 9.0 = ${notas}`);
  }
}

for (let i = 0; i < notas.length; i++) {
    if (notas[i] === 6.3) {
        notas.splice(0, 1);
        console.log(notas);
        TemNota = true;
    }
    else if (notas[i] != 6.3) {
        console.log('Não existe a nota 6.3');
    }
}

