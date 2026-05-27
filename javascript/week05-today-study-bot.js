function getTodayStudyAdvice(message) {
  let cleaned = message;

  if (cleaned.includes("피곤")) {
    return "오늘은 복습만 하고 일찍 쉬세요.";
  } else if (cleaned.includes("시간")) {
    return "30분이라도 JavaScript 함수를 손코딩하세요.";
  } else if (cleaned.includes("에러")) {
    return "에러 메시지를 먼저 읽고 한 줄씩 확인하세요.";
  } else if (cleaned.includes("github")) {
    return "오늘 만든 파일을 GitHub에 업로드하세요.";
  } else {
    return "작은 파일 하나를 완성하는 것이 오늘 목표입니다.";
  }
}
function simulateTodayStudy(userInput) {
  let studyBot = getTodayStudyAdvice(userInput);

  return `[사용자] ${userInput}\n[챗봇] ${studyBot}`;
}

console.log(simulateTodayStudy("피곤"));
console.log(simulateTodayStudy("시간"));
console.log(simulateTodayStudy("에러"));
console.log(simulateTodayStudy("github"));
console.log(simulateTodayStudy("???"));
