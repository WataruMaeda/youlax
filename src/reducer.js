const initialState = {
    selectedItem: { title: "", image: "", sound: "" }
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'SELECTED_ITEM':
        return {
          ...state,
          selectedItem: action.selectedItem
        };
  
      default:
        return state
    }
}