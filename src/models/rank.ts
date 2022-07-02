export interface RankModel {
  id: number;
  round: number;
  winner: string;
  losser: string;
}

export interface RankArrayModel {
  all_ranks: RankModel[];
  rank: RankModel;
}
