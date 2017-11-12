export function mapStateToProps(state) {
    return state;
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
      updateMenuState: (item) => {
        dispatch( {type: 'MENU_STATE', menuState: item} );
      },
      updateMenuScreen: (item) => {
        dispatch( {type: 'MENU_SCREEN', menuScreen: item} );
      },
      updateSectionIndex: (item) => {
        dispatch( {type: 'SECTION_INDEX', sectionIndex: item} );
      }
    }
  }