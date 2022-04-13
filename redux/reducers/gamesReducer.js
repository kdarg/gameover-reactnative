const initialState = {
    games: [],
    auxiliar: []
}

const gamesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'fetchGames':

            return {
                ...state,
                games: action.payload.games,
                auxiliar: action.payload,
            }

        case 'filterGames':

            const filtered = action.payload.games.filter((data => data.gameName.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
		games:{...filtered}
            }

        default:
            return state
    }
}

export default gamesReducer;