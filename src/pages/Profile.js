import React from 'react';
import MainDisplay from '../components/profile_components/MainDisplay';
import HeaderHome from '../components/home_components/header/HeaderHome';
import RecentLikedArticles from '../components/profile_components/RecentLikedArticles';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { hasToken } from '../auth/auth';

function Profile () {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated && !hasToken()) {
        return <Redirect to="./login"/>
    }

    else {
        return (
        <>  <HeaderHome/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-8">
                        <MainDisplay/>
                    </div>
                    <div className="col-lg-2">
                        <RecentLikedArticles/>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            
        </>
        )
    }

}

export default Profile;

