# 행맨 만들기

MVP (Minimum Viable Product) 로 개발

## 조건

1. 한글 행맨 ([한글 자모 라이브러리](https://github.com/e-/Hangul.js/))
2. 2 ~ 4글자 랜덤 단어 (자모 20개 이하)
3. 기회는 10번, 틀리면 진행
4. 동사 X

## 역할

1. 키보드 레이아웃 배치, 실패한 개수에 따라 행맨 애니메이션 넣기 - `주희`
  - 클릭 가능한 키 버튼
  - Redux useSelector 활용
2. 메인 화면, 시작, 초기화 기능 구현 - `상범`
  - React Route DOM
    - `/`: Main Page
    - `/play`: Game Playing
    - `/result`: Game Result
  - 시작 상태 관리, 초기화 시 적절한 상태 초기화
  - 랜덤 단어 추첨
3. 키 버튼을 클릭하면 라이브러리를 활용해서 성공/실패 여부 처리 - `한별`
  - 라이브러리 분석, 연동
  - 버튼 클릭하면 설정된 단어와 비교, 성공/실패 처리

## 브랜치 전략

- `main`: 안정화된 릴리즈
- `develop`: 안정화된 테스트 버전
- `feature/*`: 기능 단위 전략
- `task/*`: 작업 단위 전략

## 커밋 메시지 규칙

- `Feat`: 신규 기능
- `Fix`: 오류 수정
- `Delete`: 내용 삭제
- `Doc`: 문서 관련
- `Build`: 빌드 관련
- `Chore`: 기타 작업사항

```
$ git commit

# 가장 첫 번째 줄
{Type}: {Subject}
Feat: 키보드 레이아웃 추가

# 두 칸 띄고 세 번째 줄
{Body}
생략 가능, 어떻게 보다 무엇을 왜 관점에서 작성
가로로 길게 쓰지 않고 적당하게 끊어 쓰기
```
