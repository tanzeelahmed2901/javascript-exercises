// Cursor Park (anyone not typing put your cursor here)

const someAcademites = ['Luca', 'Oscar', 'Wiggins', 'Gatsby']

// Lets use forEach() to iterate the Academites

someAcademites.forEach(x => console.log(x));

// Lets use map() to shout out a HELLO LUCA to each Academite
const shoutOut = someAcademites.map(x => "Hello " + x + ". ")
console.log(`Shoutout is ${shoutOut}`)

// Lets use filter to remove Luca as she's been naughty today

const filtered = someAcademites.filter(x => x != "Luca")
console.log(`Filtered names are ${filtered}`)

// Here are some Academite ages (in months!)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Lets filter out all the young naughty dogs/academites!
// ..remove the ones younger than 12 months
const above12Months = someAcademitesWithAges.filter(x => x.age > 12)
console.log('Academites above 12 months:', JSON.stringify(above12Months))

// Now lets filter the older academites out and then shout out the NAME of each, all in one go
// ..we need some "method chaining" also called "functional composition"
const filteredAndShouted = someAcademitesWithAges.filter(x => x.age < 12).map(x => x.name)
console.log(`Shouty Young Dawgs: ${filteredAndShouted}`)

/*
Filtering first means that the mapping only deals with items that remain after filtering. 
Mapping first would have turned all of the names to upper case before filtering out the older dogs (so less efficient).
*/

// EOF
