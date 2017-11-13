const initialState = {
  menuState: false,
  menuScreen: 'PLAYER',
  sectionIndex: 0,
  currentSound: 'test_1.mp3',
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'MENU_STATE':
        return {
          ...state,
          menuState: action.menuState
        };
      
      case 'MENU_SCREEN':
        return {
          ...state,
          menuScreen: action.menuScreen
        };
      
      case 'SECTION_INDEX':
        return {
          ...state,
          sectionIndex: action.sectionIndex
        };

      case 'CURRENT_SOUND':
        return {
          ...state,
          currentSound: action.currentSound
        };
      default:
        return state
    }
}