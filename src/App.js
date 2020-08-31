import React, { Component } from "react";
import Axios from 'axios'
import "./style.css";

const url = 'https://tiems-d1ca.restdb.io/rest/clients'
class dataBreakout extends React.Component { 
render() {  
  axios.get(url).then(data=>console.log(data))
return(data)
}
}
export default function App() {
  return (
    <div>
      <h1>{dataBreakout.dataItem}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
