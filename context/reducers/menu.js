export function menu(state, action) {
    switch (action.type) {
      case "TOGGLE_MENU":
        return { ...state, menu: action.payload };
      default:
        return state;
    }
  }