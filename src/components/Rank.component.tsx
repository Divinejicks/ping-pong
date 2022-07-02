import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchRanks } from "../store/actions/rank-actions";
import { StyledButton, StyledContainer, StyledTable } from "./Rank.styled";
import MintBadge from "./MintBadge/MintBadge.component";

const RankComponent = () => {
  const dispatch = useAppDispatch();
  const allRanks = useAppSelector((state) => state.rank.all_ranks);

  const getAllRanksHandler = () => {
    dispatch(fetchRanks());
  };

  const checkRanks = () => {
    if (allRanks.length === 0) {
      return false;
    }
    return true;
  };

  let ranks = allRanks.map((rank) => (
    <tr key={rank.id}>
      <td>{rank.id}</td>
      <td>{rank.round}</td>
      <td>{rank.winner}</td>
      <td>{rank.losser}</td>
    </tr>
  ));

  return (
    <>
      <StyledContainer>
        <h1>Play Ping Pong</h1>
        <StyledButton onClick={getAllRanksHandler}>Play</StyledButton>
        <div>
          <StyledTable>
            <thead>
              <tr>
                <th>Id #</th>
                <th>Round #</th>
                <th>Winner</th>
                <th>Losser</th>
              </tr>
            </thead>

            <tbody>
              {!checkRanks() ? (
                <tr>
                  <td colSpan={3}>No ping pong result</td>
                </tr>
              ) : (
                ranks
              )}
            </tbody>
          </StyledTable>
          {checkRanks() && <h3>The winner is Player 2</h3>}
        </div>
        <div>
          {checkRanks() && (
            <>
              <MintBadge />
            </>
          )}
        </div>
      </StyledContainer>
    </>
  );
};

export default RankComponent;
