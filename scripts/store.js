let items= [];
let hideCheckedItems= false;


import item from './item.js';

function findById(id) {
  return store.items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
}


function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    findById(id).name = newName;
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndDelete(id) {
  let index = this.items.findIndex(obj => obj.id === id);
  items.splice(index, 1);
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
