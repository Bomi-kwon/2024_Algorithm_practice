////////////////// 시도1 //////////////////
// 시간 초과로 실패

function solution(diffs, times, limit) {
    var answer = 0;
    let level = 1; // 숙련도(레벨)의 최솟값을 구하므로 1부터 시작
    while (true) {
        let totalTime = 0; // 퍼즐을 푸는데 걸린 시간
        for (j = 0; j < diffs.length; j++) { // 퍼즐 갯수만큼 반복
            if (diffs[j] <= level) {
                totalTime += times[j]; // 맞추는데 걸리는 시간
            } else {
                const countX = diffs[j] - level; // 틀린 횟수
                const timeX = times[j] + times[j - 1]; // 틀리는데 걸리는 시간
                totalTime += (countX * timeX + times[j]);
            }
        }
        if (totalTime < limit) { // 퍼즐 푸는데 걸린 시간이 제한 시간보다 작으면
            answer = level; // 그 숙련도(레벨)을 리턴
            break;
        } else { // 아니면 숙련도 1 증가시켜서 똑같은 과정 반복
            level++;
        }
    }
    return answer;
}

/////////////////// 시도2 //////////////////
// 런타임 에러로 실패

function solution(diffs, times, limit) {
    var answer = 0;
    let level = Math.max(...diffs); // 숙련도(레벨)는 퀴즈 난이도 중 가장 높은 것으로 시작
    while (true) {
        let totalTime = 0; // 퍼즐을 푸는데 걸린 시간
        for (j = 0; j < diffs.length; j++) { // 퍼즐 갯수만큼 반복
            if (diffs[j] > level && j > 0) {
                const countX = diffs[j] - level; // 틀린 횟수
                const timeX = times[j] + times[j - 1]; // 틀리는데 걸리는 시간
                totalTime += (countX * timeX + times[j]);
            } else {
                totalTime += times[j]; // 맞추는데 걸리는 시간
            }
            if (totalTime > limit) {
                break;
            }
        }
        if (totalTime <= limit) { // 퍼즐 푸는데 걸린 시간이 제한 시간보다 작으면
            answer = level;
            level--; // 레벨 1 감소시켜서 똑같은 과정 반복
        } else { // 아니면 반복문 종료하고 이전 레벨 리턴
            break;
        }
    }
    return answer;
}


/////////////////// 시도3 //////////////////
// 이분탐색 도입 -> 여전히 런타임 에러

function solution(diffs, times, limit) {
    var answer = 0;
    let left = 1;
    let right = Math.max(...diffs); // 숙련도(레벨)는 퀴즈 난이도 중 가장 높은 것으로 시작

    while (left <= right) {
        let totalTime = 0; // 퍼즐을 푸는데 걸린 시간
        let level = Math.floor((left + right) / 2); // 중간값

        for (j = 0; j < diffs.length; j++) { // 퍼즐 갯수만큼 반복
            if (diffs[j] > level) {
                const countX = diffs[j] - level; // 틀린 횟수
                const timeX = times[j] + times[j - 1]; // 틀리는데 걸리는 시간
                totalTime += (countX * timeX + times[j]);
            } else {
                totalTime += times[j]; // 맞추는데 걸리는 시간
            }
            if (totalTime > limit) {
                break;
            }
        }
        if (totalTime <= limit) { // 일단 이번 레벨 통과, 최댓값 1 줄이기
            answer = level;
            right = level - 1;
        } else { // 아니면 최솟값 1 늘리기
            left = level + 1;
        }
    }
    return answer;
}

/////////////////// 시도4 //////////////////
// 이분탐색 도입 -> 스프레드 연산자 사용하면 런타임 에러 날 수 있대서 반복문으로 최댓값 찾기

function solution(diffs, times, limit) {
    var answer = 0;
    let left = 1;
    // diffs 배열에서 최댓값 찾기 (스프레드 연산자 사용하지 않음)
    let right = diffs[0];
    for (let i = 1; i < diffs.length; i++) {
        if (diffs[i] > right) right = diffs[i];
    }

    while (left <= right) {
        let totalTime = 0; // 퍼즐을 푸는데 걸린 시간
        let level = Math.floor((left + right) / 2); // 중간값

        for (j = 0; j < diffs.length; j++) { // 퍼즐 갯수만큼 반복
            if (diffs[j] > level && j > 0) {
                const countX = diffs[j] - level; // 틀린 횟수
                const timeX = times[j] + times[j - 1]; // 틀리는데 걸리는 시간
                totalTime += (countX * timeX + times[j]);
            } else {
                totalTime += times[j]; // 맞추는데 걸리는 시간
            }
            if (totalTime > limit) {
                break;
            }
        }
        if (totalTime <= limit) { // 일단 이번 레벨 통과, 최댓값 1 줄이기
            answer = level;
            right = level - 1;
        } else { // 아니면 최솟값 1 늘리기
            left = level + 1;
        }
    }
    return answer;
}