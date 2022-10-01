let arr = [9, 2, "smth", 0, 8, 32];

arr.push(24)
arr.pop()
arr.shift()
arr.unshift(12)

console.log(arr)
const robots = [
    {
        username:"Sasha",
        sila:24
    },
    {
        username:"Pavel",
        sila:6
    },
    {
        username:"Zhenya",
        sila:1
    },
    {
        username:"Gregoriy",
        sila:45
    },
    {
        username:"Kirill",
        sila:89
    }
]

let powerrobots = []

for(let user in robots) {
    if(user.sila > 44){
        powerrobots.push(user)
    }
}

console.log (robots)