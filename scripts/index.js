//폭탄이 있는 위치를 나타내는 배열 DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메세지 출력 함수
const msgShow = (m) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = `<h2>${m}</h2>`;

}

//초기화 함수
const init = () => {
  //메세지 지우기  
  msgShow(" ");
    
    //그림 지우기
    for (let i = 1; i <= 9; i++) { 
      document.getElementById(`box${i}`).innerHTML = ` `;
      
    }
    //선택했던 숫자 배열 초기화
    selNum = [];

}

//숫자박스가 선택된 경우
/*
function show(n){
console.log(n);
}
*/

const show = (n) => {
    if (!shuffleFlag) {
        msgShow("폭탄을 섞어 주세요");
        return
    }

    //눌러진 번호판 배열에 추가
    if(!selNum.includes(n));
    selNum.push(n);
    //cnt++;

    console.log(selNum,cnt,selNum.length);

    //폭탄이 있는 배열을 참고하여 그림 변경
    let imgSrc = null;
    if (num[n - 1] == 1) 
        imgSrc = "boom";
    else 
        imgSrc = "hart"

        //현재 눌러진 숫자 박스에 그림을 표시
    document
        .getElementById(`box${n}`)
        .innerHTML = `<img src=./images/${imgSrc}.png>`;
    console.log(n);

    //성공 체크
    if(selNum.length==8){
      let fn = [1,2,3,4,5,6,7,8,9].filter((i)=>!selNum.includes(i));
      console.log(fn[0]);
      document.getElementById(`box${fn[0]}`).innerHTML = `<img src=./images/hart.png>`;      
      msgShow("성공");
    }

    //실패 체크
    if(imgSrc == "boom")  {
    shuffleFlag = false;
    msgShow("실패");
  }
}



//폭탄섞이 함수
const boxShuffle = () => {
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;

    //초기화 함수 호출
    init();
    console.log(num);
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {

    //DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
    for (let i = 0; i < 8; i++) {
        num.push(0);
    }
    num.push(1);
    console.log(num);

});

/*
입력
1. 폭탄섞이 버튼 입력
2. 숫자박스 클릭 입력

처리
1. 폭탄 섞이 처리
폭탄 위치를 배열로 처리
[0,0,0,0,0,0,0,0,1] => 셔플

2. 숫자 박스 클릭 처리
폭탄이 있는 위치가 셔플이 되었는지 확인
셔플이 되었다면 현재 눌러진 숫자 박스에 그림표시
폮탄위치 배열의 숫자값으로 그림구분
클릭된 번호를 배열에 저장
카운트 값이 8이면 폭탄위치에 하트를 넣고 종료
폭탄 그림이 나오면 다시 눌러지지 않도록 설정
 */