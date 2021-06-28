const uuid = require('uuid');
const database = require('../../dbParametres/db');

let {tasks} = database.db;
const getAllTasks = async (boardId) => tasks.filter(task => task.boardId === boardId);

const getTask = async (boardId, taskId) => tasks.find(task => task.id === taskId);

const setTask = async (boardId, taskData) => {
   const newData = { ...taskData, boardId, id: uuid.v4() };
   tasks.push(newData);
   return newData;
};

const updateTask = async (boardId, taskId, taskData) => {
   const index = tasks.findIndex(task => task.id === taskId);
   if (index !== -1) {
     const newTask = { ...taskData, id: taskId };
     tasks[index] = newTask;
     return newTask;
   }
   return false;
};
const deleteTask = async (boardId, taskId) => {
   const index = tasks.findIndex(task => task.id === taskId);
   if (index !== -1) {
    tasks.splice(index, 1);
   }
   return index;
};
const deleteUserFrom = async (userId) => {
   tasks.forEach((element, i) => {
      if(element.userId === userId) {
         tasks[i].userId = null;
      }
   });
};
const deleteBoardFrom = async (boardId) => {
   tasks = tasks.filter(task => task.boardId !== boardId);
};

module.exports = { getAllTasks, getTask, setTask, updateTask, deleteTask, deleteUserFrom, deleteBoardFrom };