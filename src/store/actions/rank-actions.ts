import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { RankModel } from "../../models/rank";
import rankSlice from "../slice/rankSlice";
import RankService from "../../services/rankService";

export const rankActions = rankSlice.actions;

export const fetchRanks = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().rank.all_ranks.length === 0) {
      const response: RankModel[] = await RankService.getAllRanks();
      dispatch(rankActions.setRanks(response));
    }
  };
};

export const fetchRank = (
  rank_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: RankModel = await RankService.getRank(rank_id);
    dispatch(rankActions.setRank(response));
  };
};
