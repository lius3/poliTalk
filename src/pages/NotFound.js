import React from 'react';
import HeaderHome from '../components/home_components/header/HeaderHome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {ReactComponent as SadPenguin} from '../images/404Penguin.svg';

function NotFound () {

    return (
        <>  <HeaderHome/>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-6 text-center" style={{minWidth:"600px"}}>
                        <SadPenguin style={{width:"250px",marginTop:"110px", marginLeft:"60%"}}></SadPenguin>
                    </div>
                    <div className="col-md-6 justify-content-center" style={{minWidth:"500px"}}>
                        <h1 style={{marginTop:"200px"}}>404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        </>
        )
}

export default NotFound;

