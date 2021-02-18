import axios from "axios"

export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING'
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS'
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE'

export const getQuote = () => {
    return dispatch => {
        dispatch (fetchQuoteLoading());
    axios
        .get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(resp=>{
            // console.log('api call', resp.data[0])
             dispatch(fetchQuoteSuccess(resp.data[0].quote))
        })
        .catch(err =>{
            console.log('error', err)
            dispatch(fetchQuoteFailure(err))
        })
    // axios
    //     .get('https://api.kanye.rest')
    //     .then(res=>{
    //         console.log('api call', res)
    //         dispatch(fetchQuoteSuccess(res.data.quote))
    //     })
    //     .catch(err =>{
    //         // console.log('error', err)
    //         dispatch(fetchQuoteFailure(err.Response.code))
    //     })

   
    }

}


export const fetchQuoteLoading = () => {
    return ({type:FETCH_QUOTE_LOADING});
}

export const fetchQuoteSuccess = (quote) => {
    return ({type: FETCH_QUOTE_SUCCESS, payload: quote});
}

export const fetchQuoteFailure = (error) => {
    return ({FETCH_QUOTE_FAILURE, payload: error});
}