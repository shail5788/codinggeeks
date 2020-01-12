import React from 'react';
import SuggestionList from './suggestionList';


const Suggestion=()=>{

    return(
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Suggestions</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <SuggestionList />
		</div>
    
    )
}

export default Suggestion;