function solution(s) {
    var answer = '';
    let string = '';
    const stringArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < s.length; i++) {
        if (!Number.isNaN(Number(s[i]))) {
            // 숫자면 그대로(문자열로) 붙여주기
            answer += s[i];
            continue;
        } else {
            // 문자면 string에 붙여주기
            string += s[i];
            if (stringArr.includes(string)) {
                // string이 stringArr에 포함되어 있으면
                // answer에 해당 인덱스를 붙여주고 string 초기화
                answer += stringArr.indexOf(string);
                string = '';
            }
        }
    }
    return Number(answer);
}