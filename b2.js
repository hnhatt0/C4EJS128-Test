let tamGiac = '';

function numberOneTriangle(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            tamGiac += '*'
        }
        tamGiac += '\n';
    };
}

numberOneTriangle(10);
console.log(tamGiac);