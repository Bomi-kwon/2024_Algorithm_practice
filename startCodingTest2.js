///////// 일반 버전 //////////
function solution(quiz) {
    var answer = [];
    for (let q of quiz) {
        const arr = q.split(" ");
        switch (arr[1]) {
            case "+":
                if (Number(arr[0]) + Number(arr[2]) === Number(arr[4])) {
                    answer.push("O");
                } else {
                    answer.push("X");
                }
                break;
            case "-":
                if (Number(arr[0]) - Number(arr[2]) === Number(arr[4])) {
                    answer.push("O");
                } else {
                    answer.push("X");
                }
                break;
        }
    }
    return answer;
}

///////// 구조 분해 할당 //////////
function solution(quiz) {
    var answer = [];
    for (let q of quiz) {
        const [num1, math, num2, equal, result] = q.split(" ");
        switch (math) {
            case "+":
                if (Number(num1) + Number(num2) === Number(result)) {
                    answer.push("O");
                } else {
                    answer.push("X");
                }
                break;
            case "-":
                if (Number(num1) - Number(num2) === Number(result)) {
                    answer.push("O");
                } else {
                    answer.push("X");
                }
                break;
        }
    }
    return answer;
}

///////// eval 사용 //////////
function solution(quiz) {
    var answer = [];
    for (let q of quiz) {
        const [left, right] = q.split("=");
        if (eval(left) === Number(right)) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    return answer;
}
