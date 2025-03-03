import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const Cell = styled.div`
  width: clamp(32px, 4vw, 40px);
  height: clamp(24px, 3vw, 30px);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.cardImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Chip = styled.div`
  position: absolute;
  width: clamp(16px, 2vw, 20px);
  height: clamp(16px, 2vw, 20px);
  border-radius: 50%;
  background-color: ${props => props.color};
  z-index: 1;
`;

const GameBoard = ({ gameType }) => {
  const getPlayerColor = (index) => {
    switch (gameType) {
      case '1v1':
        return index % 2 === 0 ? "#FF4444" : "#4444FF";
      case '1v1v1':
        return index % 3 === 0 ? "#FF4444" : 
               index % 3 === 1 ? "#4444FF" : "#44FF44";
      case '2v2':
        return index % 2 === 0 ? "#FF4444" : "#4444FF";
      default:
        return "#000000";
    }
  };

  // 임시 보드 데이터
  const boardData = Array(100).fill(null).map((_, index) => ({
    id: index,
    card: null,
    chip: null,
    playerIndex: null
  }));

  return (
    <BoardContainer>
      {boardData.map(cell => (
        <Cell key={cell.id}>
          {cell.card && <CardImage cardImage={cell.card} />}
          {cell.chip && <Chip color={getPlayerColor(cell.playerIndex)} />}
        </Cell>
      ))}
    </BoardContainer>
  );
};

export default GameBoard; 