const initTransaction = {
  grooming: [],
  penitipan: [],
  praktik: [],
};

export const transactionReducer = (state = initTransaction, action) => {
  if (action.type === 'SET_GROOMING') {
    return {
      ...state,
      grooming: action.value,
    };
  }

  if (action.type === 'SET_PENITIPAN') {
    return {
      ...state,
      penitipan: action.value,
    };
  }

  if (action.type === 'SET_PRAKTIK') {
    return {
      ...state,
      praktik: action.value,
    };
  }
  return state;
};
