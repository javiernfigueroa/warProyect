// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// function cb() {
//     console.log('I finally ran')
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)
// setTimeout(cb, 2000)

// cb2 = peopleHasPet => peopleHasPet.hasPet
// cb3 = peopleOlder => peopleOlder.age >= 18

// const people = [
//     { name: "Jack", hasPet: true, age: 12 },
//     { name: "Jill", hasPet: false, age: 18 },
//     { name: "Alice", hasPet: true, age: 22 },
//     { name: "Bob", hasPet: false, age: 32 },
// ]

// const peopleWithPet = people.filter(cb2)
// const peopleAgeFine = people.filter(cb3)
// console.log(peopleWithPet)
// console.log(peopleAgeFine)

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];

function filterArray(array, callback) {
  const resultingArray = []
  for (let i of array) {
    const shouldBeIncluded = callback(i);
    if (shouldBeIncluded) {
      resultingArray.push(i);
    }
  }
  return resultingArray
}


const peopleWithPets = filterArray(people, function(person) {
    return person.hasPet
})

console.log(peopleWithPets)


const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]


const newArray = voters.filter(voted => voted.voted).map(person => person.email) 
console.log(newArray)