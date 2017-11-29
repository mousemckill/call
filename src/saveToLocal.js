const saveToLocal = store => next => action => {
  if (action.type === 'SAVE') {
    if (action.payload.local) {
      localStorage.setItem('reduxState', JSON.stringify(action.payload));
    } else {
      localStorage.removeItem('reduxState');
      console.log(action.payload);
    }
  }
  return next(action);
};

export default saveToLocal;