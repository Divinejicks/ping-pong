import { RankModel } from "../models/rank";

export default {
  async getAllRanks() {
    let ranks: RankModel[] = [
      {
        id: 1,
        round: 1,
        winner: "Player 1",
        losser: "Player 2",
      },
      {
        id: 2,
        round: 2,
        winner: "Player 1",
        losser: "Player 2",
      },
      {
        id: 3,
        round: 3,
        winner: "Player 2",
        losser: "Player 1",
      },
      {
        id: 4,
        round: 4,
        winner: "Player 2",
        losser: "Player 1",
      },
      {
        id: 5,
        round: 5,
        winner: "Player 2",
        losser: "Player 1",
      },
    ];

    return ranks;
  },

  //Get a single rank by passing the Id and filtering
  async getRank(rank_id: number) {
    let ranks: RankModel[] = [
      {
        id: 1,
        round: 1,
        winner: "Player 1",
        losser: "Player 2",
      },
      {
        id: 2,
        round: 2,
        winner: "Player 1",
        losser: "player 2",
      },
      {
        id: 3,
        round: 3,
        winner: "Player 2",
        losser: "Player 1",
      },
      {
        id: 4,
        round: 4,
        winner: "Player 2",
        losser: "Player 1",
      },
      {
        id: 5,
        round: 5,
        winner: "Player 2",
        losser: "Player 1",
      },
    ];

    return ranks.filter((rank: RankModel) => rank.id === rank_id)[0];
  },
};
