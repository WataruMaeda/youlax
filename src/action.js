export function mapStateToProps(state) {
    return state;
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
      updateMenuState: (item) => {
        dispatch( {type: 'MENU_STATE', menuState: item} );
      },
      updateSectionIndex: (item) => {
        dispatch( {type: 'SECTION_INDEX', sectionIndex: item} );
      }
    }
  }