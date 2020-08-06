import React from 'react';
import noImage from '../images/noImage.png';
import './SearchResult.css';

function searchResultView(props) {
    const commponentArray = getComponentArray(props.displayArray, props.deleteMode);
    const bottomNav = getBottomNav();
    return(
    <div className='searchresult'>
        { commponentArray }
        { bottomNav }
    </div>
    );
}

function getComponentArray(displayArray, deleteMode) {
    const result = [];
    for(let i = 0; i < displayArray.length; i++) {
        result.push(getListingContainer(displayArray[i], deleteMode));
    }
    return result;
}

function getListingContainer(listing, deleteMode) {
    const title = listing.title;
    let price = listing.price;
    const owner = listing.owner;
    let deleteButton = null;

    if(!(title && price && owner)) {
        return;
    }
    if(deleteMode) {
        deleteButton = <button>Delete</button>
    }

    price = '$' + price;
    return(
        <div className='searchresultgrid'>
            <img 
            src = { noImage }
            alt = 'Unavailable'>
            </img>

            <h3>{ title }</h3>
            <h4>{ price }</h4>
            <h5>{ owner }</h5>
            { deleteButton }
        </div>
    );
}

function getBottomNav() {
    const prev = <button>Prev</button>;
    const next = <button>Next</button>;
    return(
        <div className='searchresultbottom'>
            { prev }
            { next }
        </div>
    );
}

export default searchResultView;