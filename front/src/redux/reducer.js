import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = { myFavorites: [], allCharacters: [] };

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload)
            }

        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            const orderCharacter = state.allCharacters.sort((a, b) => {
                if (payload === 'ascendente') return a.id = b.id
                return b.id - a.id
            })
            return {
                ...state,
                myFavorites: [...orderCharacter]
            }

        default:
            return { ...state }
    }
};

export default reducer;