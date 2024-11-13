function solution(bandage, health, attacks) {
    const maximumHealth = health;
    var answer = -1;

    const [recoveryTime, recovery, add] = bandage;

    let continuousSuccess = 0;
    let attackCount = 0;
    let time = 0;
    while (attackCount < attacks.length) {
        const [attackTime, attackDamage] = attacks[attackCount];
        ////// 몬스터 공격시간
        if (attackTime === time) {
            health -= attackDamage;
            continuousSuccess = 0; // 연속 성공 초기화
            attackCount++;
            if (health <= 0) { // 체력이 0 이하면 종료
                break;
            }
        } else {
            ///// 회복 시간
            health += recovery;
            continuousSuccess++;
            if (continuousSuccess === recoveryTime) { // 연속 성공이 회복시간과 같으면
                health += add; // 추가 회복
                continuousSuccess = 0; // 연속 성공 초기화
            }
            if (health > maximumHealth) { // 최대 체력보다 크면 최대 체력으로 설정
                health = maximumHealth;
            }
        }
        time++;
    }
    answer = health > 0 ? health : -1;

    return answer;
}