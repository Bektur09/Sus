function fibonacci() {
    let a = +prompt("число")
    let b = 1
    let c = 1
    for(i = 0; i < a; i++) {
        let x = i - 1;
        let y = i - 2
        let z = b + c
        b = c 
        c = z
        console.log(z)
    }
}

fibonacci()