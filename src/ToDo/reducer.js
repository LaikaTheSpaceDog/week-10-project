export const addItem = (state, { value }) => {
   return {
      ...state,
      items: [...state.items, {
         task: value,
         completed: false
      }]
   }
};

export const removeItem = (state, { index }) => {   
   return {
     ...state,
     items: state.items.filter((_, i) => i !== index),
   }
}

export const updateItem = (state, { index, value }) => {
   let items = [...state.items];
   items[index] = {...items[index], task: value}
   
   return {
      ...state,
      items: items,
   }
}

export const completeItem = (state, { index }) => {
   let items = [...state.items];
   items[index] = {...items[index], completed: true}
   
   return {
      ...state,
      items: items,
   }
}

export default (state, action) => {
   switch (action.type) {
      case "NEW_ITEM": return addItem(state, action);
      case "REMOVE_ITEM": return removeItem(state, action);
      case "CHANGE_ITEM": return updateItem(state, action);
      case "MARK_COMPLETED": return completeItem (state, action);
      default: return state;
  }
};
