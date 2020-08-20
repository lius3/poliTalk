import React from 'react';

function BackgroundInfo() {
    return (
        <div className="container-fluid" style={{height:"100%", padding:0}}>
            <div className="row" style={{height:"10%", backgroundColor:"#073763ff", minHeight:"60px", textAlign:"center"}}>
                <p style={{marginTop:"10px", width:"100%", fontWeight:"bold", fontSize:"25px", color:"white", textAlign:"center"}}>Background Info.</p>
            </div>
            <div className="row" style={{height:"90%", backgroundColor:"#92b7c9", padding:"20px", overflow:"hidden"}}>
                <p style={{fontSize:"18px", color:"black"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat numquam accusamus ducimus minima qui iure,
                     modi totam aspernatur doloribus veritatis amet unde aut at enim velit doloremque ipsum! Accusantium.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa incidunt voluptatem dicta aliquid eos 
                     delectus eaque explicabo velit ex quibusdam quisquam reiciendis atque architecto vel repudiandae, ducimus magni aliquam.
                </p>
            </div>
        </div>
    )
    
}

export default BackgroundInfo;