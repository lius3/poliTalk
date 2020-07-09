import Chart from "react-google-charts";
import React from 'react';


function PieChart(){
    return (
    <Chart
      width={'100%'}
      height={'55vh'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Vote', '# of Votes'],
        ['Yes', 10],
        ['No', 10],
      ]}
      options={{
        chartArea: {
          width: 1000,
          height: "100%",
          left: "28%",
          top: 10,
        },
        colors: ["#92b7c9", "#184f64"],
        legend: {position:'right',alignment: 'center'},
        pieSliceBorderColor:"#ffe599",
        pieSliceTextStyle:{color:"#ffe599", fontName: 'Calibri', fontSize: 40}
    }}
  />
    )
  }

  export default PieChart;