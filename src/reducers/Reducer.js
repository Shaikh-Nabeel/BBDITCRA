
const initialState = {
    ids: []
};

const watchlistReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_WATCHLIST':
            return {
                ...state,
                ids: [...state.ids, action.payload]
            };
        case 'REMOVE_WATCHLIST':
            return {
                ...state,
                ids: state.ids.filter(obj => obj.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default watchlistReducer;