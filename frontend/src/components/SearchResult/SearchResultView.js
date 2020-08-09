import React from 'react';
import noImage from '../images/noImage.png';
import './SearchResult.css';

function searchResultView(props) {
    const commponentArray = getComponentArray(props.displayArray, props.deleteMode, props.onLinkClick, props.onDelete);
    const bottomNav = getBottomNav(props.next, props.prev, props.onNext, props.onPrev);
    return(
    <div className='searchresult'>
        { commponentArray }
        { bottomNav }
    </div>
    );
}

function getComponentArray(displayArray, deleteMode, onLinkClick, onDelete) {
    const result = [];
    for(let i = 0; i < displayArray.length; i++) {
        result.push(getListingContainer(displayArray[i], deleteMode, onLinkClick, onDelete));
    }
    return result;
}

function getListingContainer(listing, deleteMode, onLinkClick, onDelete) {
    const title = listing.title;
    let price = listing.price;
    const username = listing.username;
    let deleteButton = null;

    if(!(title && price && username)) {
        return;
    }
    if(deleteMode) {
        deleteButton = <button onClick = { () => onDelete(listing) }>Delete</button>
    }

    price = '$' + price;
    return(
        <div className = 'searchresultgrid' key = { listing.id }>
            <img 
            src = { noImage }
            alt = 'Unavailable'>
            </img>

            <h3 onClick = { () => onLinkClick(listing) }>{ title }</h3>
            <h4>{ price }</h4>
            <h5>{ username }</h5>
            { deleteButton }
        </div>
    );
}

function getBottomNav(next, prev, onNext, onPrev) {
    let prevButton = <button onClick = { onPrev }>Prev</button>;
    let nextButton = <button onClick = { onNext }>Next</button>;
    if(!next) {
        nextButton = null;
    }
    if(!prev) {
        prevButton = null;
    }

    return(
        <div className='searchresultbottom'>
            { prevButton }
            { nextButton }
        </div>
    );
}

export default searchResultView;