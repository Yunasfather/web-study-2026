// 1. 이름을 받아서 "안녕하세요, 이름님" 출력하는 함수
function greet(name) {
  console.log("안녕하세요, " + name + "님");
}
greet("유나아빠");

// 2. 두 숫자를 받아서 더한 값을 return하는 함수
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
// 3. 점수를 받아서 60 이상이면 "합격", 아니면 "불합격"을 return하는 함수
function checkScore(score) {
  if (score >= 60) {
    return "합격";
  } else {
    return "불합격";
  }
}
console.log(checkScore(80));
console.log(checkScore(45));
// 4. 두 수 중 큰 값을 return하는 함수
function max(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(50, 30));
console.log(max(50, 30));

// 5. 화살표 함수로 두 수를 곱하는 함수

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

// 1. 함수가 무엇인지 말할 수 있다.
// - 함수는 특정 작업을 수행하는 재사용 가능한 코드 묶음이다.
// - 중복을 줄이고, 코드의 가독성과 유지보수성을 높인다.
// 2. 매개변수와 인수를 구분할 수 있다.
// - 매개변수는 함수 선언시 함수이름 옆() 안에 들어가는 게 매개변수고, 인자(인수)는 함수를 호출시 ()안에 넣는게 인자(인수)이다.
// 3. return을 사용해서 결과를 돌려줄 수 있다.
// - 리턴을 사용해서 결과를 밖으로 돌려주면서 리턴을 만난 함수는 그 즉시 종료된다.
// 4. 값, 리터럴, 표현식, 문을 구분할 수 있다.
// 리터럴 = 코드에 직접 적은 값 표현
// 표현식 = 하나의 값으로 평가되는 코드
// 값 = 표현식이 평가되어 나온 결과
// 문 = 프로그램을 구성하는 실행 단위
// 5. 함수 선언문, 함수 표현식, 화살표 함수를 각각 한 번씩 타이핑했다.
// - 함수 선언문 = function 함수이름() {} 형태
// - 함수 표현식 = const 변수명 = function() {} 형태
// - 화살표 함수 = const 변수명 = () => {} 형태
// 6. js-week4-test.js를 안 보고 작성했다.
