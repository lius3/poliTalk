import React from 'react';
import MainDisplay from '../components/profile_components/MainDisplay';
import HeaderHome from '../components/home_components/HeaderHome';
import RecentLikedArticles from '../components/profile_components/RecentLikedArticles';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Profile () {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <Redirect to="./login"/>
    }

    else {
        return (
        <>  <HeaderHome/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        <MainDisplay/>
                    </div>
                    <div className="col-md-2">
                        <RecentLikedArticles/>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            
        </>
        )
    }

}

export default Profile;

