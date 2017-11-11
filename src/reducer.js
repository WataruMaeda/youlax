const initialState = {
  menuState: false,
  sectionIndex: 0,
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'MENU_STATE':
        return {
          ...state,
          menuState: action.menuState
        };

      case 'SECTION_INDEX':
        return {
          ...state,
          selectedItem: action.sectionIndex
        };
  
      default:
        return state
    }
}