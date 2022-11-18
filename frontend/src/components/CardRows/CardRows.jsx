import "./CardRows.css";

import React from "react";
import { Card } from "../Card/Card";
import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'; 
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


function CardRows({ row_title, language }) { 
  const ref = useRef(null);

const scroll = (offset) => {
  console.log(ref.current)
  ref.current.scrollLeft += offset;
};
  const{id, category} = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const url = id?`https://api.themoviedb.org/3/${category}/${id}/similar?api_key=3d63cba818eb8bc583a23f643a655a3d`:!language?`https://api.themoviedb.org/3/trending/${category=="tv"?"tv":category=="movie"?"movie":"all"}/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`:`https://hotstar-v.herokuapp.com/movies?language=${language}`
    const a = await axios.get(url)
    setData(a.data.results)
  }
  useEffect(() => { getData() }, [id,category])
  return (
    <div className="row-title">
      <h3>{row_title}</h3>
      <div className="card-container" ref={ref}>
        <ArrowForwardIosRoundedIcon onClick={()=>{scroll(1700)}} className="right-btn"></ArrowForwardIosRoundedIcon>
        <ArrowBackIosRoundedIcon  onClick={()=>{scroll(-1700)}} className="left-btn"></ArrowBackIosRoundedIcon>
        
        {data.map(el => <Card
          key={el.id}
          id={el.id}
          title={el.title}
          media_type={el.media_type}
          imageUrl={el.poster_path}
          description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Optio incidunt voluptas ipsam delectus sequi temporibus.`}
        />
        )}
        
      </div>
    </div>
  );
}

export default CardRows;

