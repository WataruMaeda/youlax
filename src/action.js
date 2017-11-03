export function mapStateToProps(state) {
    return state;
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
      updateSelectedItem: (item) => {
        dispatch( {type: 'SELECTED_ITEM', selectedItem: item} );
      }
    }
  }