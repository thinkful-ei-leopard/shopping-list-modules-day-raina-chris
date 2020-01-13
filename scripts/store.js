let items= [];
let hideCheckedItems= false;

export default {
  items,
  hideCheckedItems
};

import item from './item.js';

function findById(id) {
  return store.items.find(id);
}

function addItem(name) {
  try {
    item.validateName(name),
    this.items.push(item.create(name))
  }
  catch(error) {
    console.log(`cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  this.findById(item => item.id === id);
  this.checked = !this.checked;
}


function findAndUpdateName(id, newName) {
  try {
    item.validateName(id),
    findById()
  }
  catch(error) {
    console.log(`cannot add item: ${error.message}`);
  }
}