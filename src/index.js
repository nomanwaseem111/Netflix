import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Cards from './Cards'
import Sdata from './Sdata'

// console.log(Sdata);

ReactDOM.render(
<>
<h1 className="heading">List of Top 6 Netflix Series & Movies 2022</h1>

{Sdata.map((val) => {
    return(
        <Cards
    img={val.img}
    netflixname={val.netflixname}
    seriesname={val.seriesname}
    link={val.link}
/>
    )
})}



</>, document.getElementById('root'));