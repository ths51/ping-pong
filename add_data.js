// import fs from 'fs'

// reader = new FileReader()
// file = fs.readFile('Ping Pong Stats.xlsx')

function add_data() {
    let x = document.getElementById('server1').value + " - " + document.getElementById('s1_score').value
    let y = document.getElementById('server2').value + " - " + document.getElementById('s2_score').value
    console.log(x)
    console.log(y)
    return 0
}


add_data()

document.getElementById('submit_data').addEventListener('click', add_data, false)

// console.log(reader)