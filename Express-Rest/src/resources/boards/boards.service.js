const boardsRepo = require('./boards.memory.repository');
const tasksService = require('../tasks/tasks.service');

const getAllBoards = () => boardsRepo.getAllBoards();
const getBoard = (id) => boardsRepo.getBoard(id);
const setBoard = (board) => boardsRepo.setBoard(board);
const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);
const deleteBoard = (id) => {
  boardsRepo.deleteBoard(id);
  tasksService.deleteBoardFrom(id);
};

module.exports = { getAllBoards, getBoard, setBoard, updateBoard, deleteBoard };
