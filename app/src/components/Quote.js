import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {getQuote} from '../actions/quoteActions'

const Quote = (props) => {
    const {quote, isFetching, error, fetchingQuoteLoading} = props;

    const handleClick = () =>{
        props.getQuote();
    }

    useEffect(()=>{
        props.getQuote();
    }, []);

    if (error) {
        return <h2> We got an error: {error}</h2>
    }
    if (isFetching) {
        return <h2>Fetching quote....</h2>
    }


    return (
        
        <div>
            <h3> {quote}</h3>
            
            <button onClick={handleClick}> Change the Quote </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {getQuote})(Quote);