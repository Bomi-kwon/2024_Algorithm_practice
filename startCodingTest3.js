function solution(dots) {
    var answer = 0;
    if (slope(dots[0], dots[1]) === slope(dots[2], dots[3])) {
        answer++;
    } else if (slope(dots[0], dots[2]) === slope(dots[1], dots[3])) {
        answer++;
    } else if (slope(dots[0], dots[3]) === slope(dots[1], dots[2])) {
        answer++;
    }
    return answer;
}

function slope(dot1, dot2) {
    return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0])
}