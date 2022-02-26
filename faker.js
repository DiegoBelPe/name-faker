const fs = require ('fs');
const { faker } = require('@faker-js/faker');
const namesEnd = []

for (let i = 0; i <= 1000; i++){
    const randomName = faker.name.findName();
    namesEnd.push(i,randomName);
    

}

fs.writeFileSync('namesEnd.txt',JSON.stringify(namesEnd))
console.log("file file created successfully")