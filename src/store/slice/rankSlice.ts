import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RankArrayModel, RankModel } from "../../models/rank";

const initialRankState: RankArrayModel = {
  all_ranks: [],
  rank: {
    id: 0,
    round: 0,
    winner: "player 0",
    losser: "player 0",
  },
};

const rankSlice = createSlice({
  name: "ranks",
  initialState: initialRankState,
  reducers: {
    setRanks(state, action: PayloadAction<RankModel[]>) {
      state.all_ranks = action.payload;
    },
    setRank(state, action: PayloadAction<RankModel>) {
      state.rank = action.payload;
    },
  },
});

export default rankSlice;
