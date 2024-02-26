import React from "react";

function Sort({ sort, onSortClick}) {
    return (
        <div id='sort'>
            <input type='checkbox' value={sort} onClick={onSortClick}/>
            <label>Sort by location</label>
        </div>
    )
}

export default Sort