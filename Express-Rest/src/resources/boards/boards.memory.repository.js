const uuid = require('uuid');
const database = require('../../dbParametres/db');
const Column = require('./boards.column');

const {boards} = database.db;
const getAllBoards = async () => boards;

const getBoard = async (id) => boards.find(board => board.id === id);

const setBoard = async (board) => {
  const { title, columns } = board;
  let columnsNew;
  if (columns) {
    columnsNew = columns.map(col => ({
        ...col,
        id: uuid.v4()
      }));
  } 
  else {
    columnsNew = [new Column()];
  }
  const boardNew = {
    columns: columnsNew,
    title,
    id: uuid.v4(),
  };
  boards.push(boardNew);
  return boardNew;
};

const updateBoard = async (id, boardData) => {
  const index = boards.findIndex(board => board.id === id);
  if (index !== -1) {
    const newBoard = { ...boardData, id };
    boards[index] = newBoard;
    return newBoard;
  }
  return index;
};

const deleteBoard = async (boardId) => {
  const index = boards.findIndex(board => board.id === boardId);
  if (index !== -1) {
    boards.splice(index, 1);
  }
  return index;
};


module.exports = { getAllBoards, getBoard, setBoard, updateBoard, deleteBoard };