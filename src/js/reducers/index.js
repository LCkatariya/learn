const initialState = {
  articles: ['lalchand', 'suresh']
};
//   console.log(initialState.articles);

function rootReducer(state = initialState, action) {
  if (action.type === 'DATA_LOADED') {
    return { articles: [...state.articles, ...action.payload] }
  }
  if (action.type === 'ADD_ARTICLE') {
    // 
    return { articles: [...state.articles, action.payload] }
  }
  if (action.type === 'REMOVE_ARTICLE') {
    let articles = state.articles.filter((e, index, arr) => index !== action.payload)
    return { articles }
  }
  return state;
};

export default rootReducer;