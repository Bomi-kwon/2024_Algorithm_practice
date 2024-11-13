function solution(num, total) {
    var answer = [];
    // 항 갯수 num개일때, Sn은 (첫항+끝항)*항수/2
    let start = 0;
    while (true) {
        let end = start + num - 1;
        let sum = (start + end) * num / 2;
        if (sum === total) {
            for (let i = 0; i < num; i++) {
                answer.push(start + i);
            }
            break;
        } else if (sum < total) {
            start++;
        } else {
            start--;
        }
    }
    return answer;
}