import Chart from "react-google-charts";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';


function PieChart({yay_votes, nay_votes}){
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div style={{padding:"25%", paddingLeft:"45%"}}>
        <ReactLoading type={'bars'} color={'black'} width={100} height={50}/>
      </div>
    )
  }

  else {
    if (yay_votes > 0 || nay_votes > 0) {
      return (
        <Chart
            height={"350px"}
            chartType="PieChart"
            data={[
              ['Vote', '# of Votes'],
              ['No', nay_votes],
              ['Yes', yay_votes],
            ]}
            options={{
              chartArea: {
                width:"100%",
                height: "100%"
              },
              is3D: true,
              colors: ["#073763", "#92b7c9"],
              legend: {position:'none',alignment: 'center'},
              pieSliceBorderColor:"#ffe599",
              pieSliceTextStyle:{color:"#ffe599", fontName: 'Calibri', fontSize: 30},
              animation: {
                duration: 4000,
                easing: 'out',
                startup: true,
              }
            }}
          />
        )
    }

    else {
      return (
        <div style={{display:"block", margin:"auto", marginTop:"25px", fontSize:"30px", 
        backgroundColor:"#92b7c9", textAlign:"center", height:"400px", lineHeight:"400px", width:"90%"}}>
        Be the first to vote!</div>
      )
    }
  }


    
  }

  export default PieChart;