const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva', 
    sexo: 'F',
    salario: 3350.25,
    },
];

console.log(data.length)
const feminino = data.filter((user, index, array) => user.sexo == "F")
console.log(feminino.length)
const somaSalario = data.reduce((total, celement) => total + celement.salario,0)
console.log(somaSalario)
const masculino = data.filter((user, index, array) => user.sexo == "M")
const somaMasculino = masculino.reduce((total, element) => total + element.salario,0)
console.log(somaMasculino)
const existe = data.some((user, index,array)=> user.salario >= 7000)
console.log(existe)
const eva = data.findIndex((user)=> user.nome == "Eva Trindade")
console.log(eva)
const silva = data.filter((user, index, array)=> user.nome.includes("Silva"))
console.log(silva)
const nomes = data.map((user, index, array)=> user.nome)
console.log(nomes)