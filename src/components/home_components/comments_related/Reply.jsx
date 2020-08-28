import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ConvertTime from "../../functions/ConvertTime";

function Reply({username, reply, time}) {

    const { user } = useAuth0();

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-1" style={{marginBottom:"15px"}}>
                            <div style={{display:"block", margin:"auto", minWidth:"50px", width:"90%", height:"100%"}}></div>
                        </div>
                        <div className="col-9" id="reply">
                            <p style={{display:"inline-block", color:"#92b7c9", fontSize:"20px", paddingTop:"10px", marginRight:"5px"}}>{username}</p>
                            <p style={{fontSize:"18px"}}>{reply}</p>
                            <p style={{fontSize:"18px"}}>{ConvertTime(time)}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                </div>
            </div>
        </>
    )
}

export default Reply;