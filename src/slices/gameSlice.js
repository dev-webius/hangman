import { createSlice } from '@reduxjs/toolkit';

export const GAME_STATUS = {
  READY: 0,
  PLAYING: 1,
  VICTORY: 2,
  DEFEAT: 3,
};

const name = 'game';
const initialState = {
  status: GAME_STATUS.READY,
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
