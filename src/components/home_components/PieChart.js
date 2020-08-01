import Chart from "react-google-charts";
import React from 'react';


function PieChart({yay_votes, nay_votes}){
  if (yay_votes == 0 && nay_votes == 0) {
    return (
      <div style={{fontSize:"30px", backgroundColor:"orange", textAlign:"center", height:"600px", lineHeight:"600px", width:"100%"}}>Be the first to vote!</div>
    )
  }
  else {
    return (
      <Chart
        height={"600px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Vote', '# of Votes'],
          ['Yes', yay_votes],
          ['No', nay_votes],
        ]}
        options={{
          chartArea: {
            width: "50%",
            height: "90%",
          },
          is3D: true,
          colors: ["#92b7c9", "#073763"],
          legend: {position:'none',alignment: 'center'},
          pieSliceBorderColor:"#ffe599",
          pieSliceTextStyle:{color:"#ffe599", fontName: 'Calibri', fontSize: 40}
      }}
      />
    )
  }

    
  }

  export default PieChart;