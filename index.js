const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'code123',
    database: 'animals_db2'
});

connection.connect(err => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`)
    // query runs inside connection to make sure connection has happened first (eliminates possible errors)

    // CREATE
        // intentionally commented out to not run every time
        // addAnimal('Reba Big Mcentire Value Meal', 'dog', -3)
    // READ
        findDogs()
        findSpecies('cat')
    // UPDATE
        // intentionally commented out to not run every time
        animalBirthday('Lola Copabannannas Foster and Pulaski Daylight Savings Time to Party', 7)
    // DELETE
        // intentionally commented out to not run every time
});

// READ
const findDogs = () => {
    // paramenters are SQL query and callback function
    connection.query('SELECT * FROM animal_table', (err, results) => {
        if (err) throw err
        // all results
        console.table(results)
        // just names
        results.forEach(result => {
            if (result.species === 'dog') {
                console.log(`${result.animalName} is a good girl!`)
            }else if (result.species === 'cat'){
                console.log(`${result.animalName} is a dang ol' good cat!`)
            }
        });
    })
}

// READ
const findSpecies = (species) => {
    connection.query(`SELECT * FROM animal_table WHERE species = "${species}"`, (err, results) => {
        if (err) throw err
        results.forEach(result => {
            console.log(`${result.animalName} is a dang ol ${result.species}`)
        })     
    })
}

// CREATE
const addAnimal = (animalName, species, age) => {
    connection.query(
        // question mark is there for inserting a key:value pair as next parameter
        'INSERT INTO animal_table SET ?', 
        {
            animalName,
            species,
            age
        },
        (err, results) => {
            if (err) throw err
            console.table(results)
            console.log(`${animalName} is now in the database`)
        })
}

// UPDATE
const animalBirthday = (animalName, newAge) => {
    connection.query(`UPDATE animal_table SET age="${newAge}" WHERE animalName="${animalName}"`)
    console.log(`${animalName} is now ${newAge}`)
}

// DELETE