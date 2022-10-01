function find(n) {
    alert("Задумайте число от 1 до 10")
    let fir_question = prompt("Прибавьте 5")
    let sec_question = prompt("затем на отнимите 1")
    let third_question = prompt("Прибавьте к нему 26")
    
    let result = (third_question - 30)

    confirm("Ваше задуманное число это " + result)
}

find()