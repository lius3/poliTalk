import React from 'react';

export default function ReloadCommentsBtn({setComment_Id, changeCommentsList}) {

    const reload_comments = () => {
        setComment_Id(null);
        changeCommentsList([]);
    }
    return (
        <div id="reload_comments_btn" onClick={()=> reload_comments()}>
            <svg id="refresh-icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
        </div>
    )

}