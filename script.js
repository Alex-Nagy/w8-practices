//filter

const ages = [32, 33, 16, 40];
function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;
}

console.log(testFor(),"for ciklus")

const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18
}

console.log(result, "filter")