import Chart from "react-google-charts";
import React from 'react';


function PieChart(){
    return (
    <Chart
      height={"70vh"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Vote', '# of Votes'],
        ['Yes', 17],
        ['No', 10],
      ]}
      options={{
        chartArea: {
          width: "50%",
          height: "80%",
        },
        colors: ["#92b7c9", "#184f64"],
        legend: {position:'top',alignment: 'center'},
        pieSliceBorderColor:"#ffe599",
        pieSliceTextStyle:{color:"#ffe599", fontName: 'Calibri', fontSize: 40}
    }}
  />
    )
  }

  export default PieChart;