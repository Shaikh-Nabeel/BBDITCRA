export const addWatchlist = (payload) => {
    return {
        type: 'ADD_WATCHLIST',
        payload: payload,
    };
};

export const removeWatchlist = (payload) => {
    return {
        type: 'REMOVE_WATCHLIST',
        payload: payload,
    };
};