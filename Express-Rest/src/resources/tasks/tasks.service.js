const tasksRepo = require('./tasks.memory.repository');

const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);
const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);
const setTask = (boardId, taskData) => tasksRepo.setTask(boardId, taskData);
const updateTask = (boardId, taskId, taskData) => tasksRepo.updateTask(boardId, taskId, taskData);
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);
const deleteUserFrom = (userId) => tasksRepo.deleteUserFrom(userId);
const deleteBoardFrom = (userId) => tasksRepo.deleteBoardFrom(userId);

module.exports = { getAllTasks, getTask, setTask, updateTask, deleteTask, deleteUserFrom, deleteBoardFrom };
