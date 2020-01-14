import item from './item.js';

let items= [];
let hideCheckedItems= false;

function findById(id) {
  return items.find(item => item.id === id);
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
  let item = this.findById(id);
  item.checked = !item.checked;
}


function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndDelete(id) {
  let index = this.items.findIndex(obj => obj.id === id);
  this.items.splice(index, 1);
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
