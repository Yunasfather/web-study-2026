function getJobAdvice(message) {
  let cleaned = message;

  if (cleaned.includes("java")) {
    return "Java는 백엔드 개발의 중심 언어입니다.";
  } else if (cleaned.includes("sql")) {
    return "SQL은 데이터를 저장하고 조회하는 핵심 기술입니다.";
  } else if (cleaned.includes("spring")) {
    return "Spring Boot는 Java 백엔드 취업의 핵심 프레임워크입니다.";
  } else if (cleaned.includes("github")) {
    return "GitHub는 학습 기록과 포트폴리오를 남기는 공간입니다.";
  } else {
    return "오늘도 작은 기능 하나를 직접 만들어보세요.";
  }
}

function simulateJobAdvice(userInput) {
  let advice = getJobAdvice(userInput);

  return `[사용자] ${userInput}\n[bot] ${advice}`;
}

console.log(simulateJobAdvice("java 공부"));
console.log(simulateJobAdvice("sql 연습"));
console.log(simulateJobAdvice("spring 준비"));
console.log(simulateJobAdvice("github 업로드"));
console.log(simulateJobAdvice("오늘 뭐하지"));
