function getStr(number){
    let strList = ['c','o','b']

    const n = parseInt((number - 1) / 3) % 3;
    const remainder = (number - 1) % 3;
    const m = n + remainder
    // console.log(n,remainder)
    return strList[ m > 2 ? m - 3 : m]  //[n,remainder]
}

console.log(getStr(2))
console.log(getStr(5))
console.log(getStr(9))
console.log(getStr(10))
console.log(getStr(897899078756))





// 0,1,2  0 0 1 2
// 1,2,0  1 1 2 0
// 2,0,1  2 2 0 1
// 0,1,2  0
