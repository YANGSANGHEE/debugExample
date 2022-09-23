console.log('안녕');

let a = 1; // 초기화
let b = 2;// 초기화

let c = [3, 4, 5]; // 초기화

function sumMapping(arr, operand) {
  let temp = arr.map(value => value + operand);
  // arr(배열)을 map 매서드 써서 해당 value값과 매개변수 operand를 더한 배열로 리턴
  return temp; //함수 호출시 temp(배열)을 리턴한다.
}

function typeChecker(arr, type) {
  return arr.filter(value => typeof value === type);
  //arr(배열)을 filter 메서드를 써서 value의 Data type이 매개변수 'type'로 들어오는 값이랑 일치하면 일치한 value들만 배열로 리턴한다.
}

function outerFunc(arr, type, operand) {
  type = typeof type === "string" ?
    type : console.error('arguments[1] param must be a stirng');
  //매개변수 type의 Data type이 문자열이면 type 그대로 반환 아니면 콘솔로 에러 띄움(삼항연산자)
  let arrTypeCheckArray = typeChecker(arr, type); // 변수에 typecheck의 처리결과의 리턴값(배열)을 담음
  let tempArray = sumMapping(arrTypeCheckArray, operand); // 변수에 sumMappung(attTypecheckArray의 리턴값, opernd)의 처리 결과의 리턴값(배열)을 담음.
  let result = tempArray.reduce((prev, curr) => {
    return prev + curr
  });
  //tempArray의 리턴값(배열) 요소들의 합의 값을 리턴한 값을 변수에 담음
  return result; // result 값을 리턴
}
let test = outerFunc(c, "number", b);
//1. true 이기때문에 type = "number"
//2. [3,4,5] => 요소의 타입이 "number" 가 맞기 때문에 그대로 리턴
//3. [3,4,5] => 3+2,4+2,5+2 => [5,6,7] 반환
//4. 5+6+7 = 18

console.log(test);