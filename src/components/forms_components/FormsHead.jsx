import React from 'react'
import {Link} from 'react-router-dom';

import "./Forms.css"

export default function FormsHead() {
    return (
        <div className="col-6">
            <Link to="/" exact style={{textDecoration:"none"}}> 
                <header className="headStyle">
                    <h1 className="h1Style">Politalk</h1>
                </header>
            </Link>
        </div>                     
    )
}
