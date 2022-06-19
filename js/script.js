const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Q1

const cat =complain => {
    console.log( 'Meow!')
}
cat()

const changeH3 = document.querySelector('H3')


//Q2

changeH3.innerHTML ='Updated heading'


//Q3
changeH3.style.fontSize = '24px'

//Q4
function changeHeading() {  
    var a = document.querySelector('h3');  
    a.className = "subheading";  
}
changeHeading()

//Q5

const changeP = document.querySelectorAll('p');
for (let index = 0; index < changeP.length; index++) {
    // console.dir (changeP[index]);
    changeP[index].style.color = 'red'}

//Q6

const resultsContainer = document.querySelector('.results')

resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.background = 'yellow';

//Q7

function afunction(list){
for (let index = 0; index < cats.length; index++) {
    const element = cats [index];
    console.log(element)
}
}

afunction()

