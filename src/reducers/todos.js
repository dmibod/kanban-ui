const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_STARTED':
      return state;
    case 'ADD_TODO_SUCCESS':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'ADD_TODO_FAILURE':
      return state;
    case 'REMOVE_TODO_STARTED':
      return state;
    case 'REMOVE_TODO_SUCCESS':
      return state.filter(todo => todo.id !== action.id);
    case 'REMOVE_TODO_FAILURE':
      return state;
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, selected: !todo.selected } : todo
      );
    default:
      return state;
  }
};

export default todos;
