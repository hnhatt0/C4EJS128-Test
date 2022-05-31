function showResult(){
    var a = document.getElementById('a').innerHTML;
    var b = document.getElementById('b').innerHTML;
    var result = document.getElementById('result');
    for (var i = a; i < b; i++) {
        if(isPrime(i)){
            result.innerHTML += i + " ";
        }
    }
}
function isPrime(n){
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}