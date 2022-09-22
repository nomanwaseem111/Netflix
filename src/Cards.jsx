const Cards = ({img,netflixname,seriesname,link}) => {

    return (
        <div className="flex">


            <div className="main">
                <div className="cards">
                    <div className="card">
                        <img src={img} alt="" />
                        <div className="card_text">
                            <span className="netflix_name">{netflixname}</span><br />
                            <span className="series_name">{seriesname}</span><br />
                            <a href={link} rel="noreferrer" target="_blank">
                                <button className="btn">Watch now</button>
                            </a>
                        </div>
                    </div>
                 </div>
               </div>




               
        </div>
    )
}


export default Cards;