//// tim so nguyen to


function soNguyenTo(number) {
    if (number === 1) {
        return false
    }
    else if(number===2){
        return true
    }
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log(soNguyenTo(10))
console.log(soNguyenTo(8))
console.log(soNguyenTo(7))