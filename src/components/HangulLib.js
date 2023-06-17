
//한글 라이브러리 불러옴
import * as Hangul from 'hangul-js';

export default function HangulLib(){

  const name = "가나다";
  const test = Hangul.disassemble(name);

  const correct = '커피'
  const correctHangul = Hangul.disassemble(correct);

  const answer = Hangul.disassemble('커피');
  const answer02 = Hangul.disassemble('카피');

  let a;

  if(Hangul.assemble(correctHangul) === Hangul.assemble(answer)){
    a = '정답';
  }else{
    a = '땡땡';
  }

  return(
  <>
    <h1>{test}</h1>
    <hr/>
    <h1>{a}</h1>
    
  </>
  );
}

 

/*
  게임 슬라이스에

  정답이 '한글' 이면 -> ㅎ ㅏ ㄴ ㄱ ㅡ ㄹ

    - 실패 카운트 올리는 리듀서
    - 맞는 자모있으면 myWord에 표시하는 리듀서
    ||
    - 실패 정답 비교해서 뱉어내는 리듀서 
    -> indexOf 활용해서 비교

    - 게임결과
      > 실패하면 GAME_STATUS 변경
      > 성공하면 GAME_STATUS 변경
    

   extra reducer(가공해서 성공/실패 여부 검증해주는)
*/

