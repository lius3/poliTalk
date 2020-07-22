import React from 'react';
import MainDisplay from '../components/profile_components/MainDisplay';
import HeaderHome from '../components/home_components/HeaderHome';
import RecentLinkedArticles from '../components/profile_components/RecentLikedArticles';

function Profile () {
    return (
        <>  <HeaderHome/>
            <div className="container-fluid">
                <div className="row" style={{height:"85vh"}}>
                    <div className="col-1"></div>
                    <div className="col-8">
                        <MainDisplay/>
                    </div>
                    <div className="col-2">
                        <RecentLinkedArticles/>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            
        </>
    )
}

export default Profile;

