import { createSlice } from '@reduxjs/toolkit';

const name = 'game';
const initialState = {
  status: '',
  failCount: 0,
  systemWord: [], // 랜덤 추첨된 정답 글자 배열
  answerWord: [], // 현재 맞춘 글자 배열
  usedWord: [],   // 현재 사용한 글자 배열
};

const gameSlice = createSlice({
  name,
  initialState,
  reducers: {

  },
});

export default gameSlice.reducer;
