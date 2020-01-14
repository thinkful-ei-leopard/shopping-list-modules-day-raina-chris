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
  let item = findById(id);
  item.checked = !item.checked;
}


function findAndUpdateName(id, itemName) {
  try {
    item.validateName(itemName);
    let item = findById(id);
    item.name = itemName;
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndDelete(id) {
  let index = this.items.findIndex(item=> item.id === id);
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
