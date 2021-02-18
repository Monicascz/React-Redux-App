import { FETCH_QUOTE_LOADING } from '../actions/quoteActions'

const initialState = {
    quote: '',
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_QUOTE_LOADING):
        return({
            ...state,
            isFetching: true,
        })
    default: 
        return state
    }
}