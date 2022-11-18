import Banner from "../Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardRows from "../CardRows/CardRows";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function MainPage() {
  
  const {category,language} = useParams()
  const data= ([]);

  useEffect(() => {
  }, [category,language]);

  const row_titles = [
     { category: "Latest & Trending", language: "hi" }, 
  ];
 
  return (
    <>
    <div>
     <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        transitionTime={700}
        showThumbs={false}
        >
        {data.map((el, index) => (
          <Banner
          idm ={el.id}
          key={index}
          title={el.title || el.name}
          genre={el.genre}
          mediaType = {el.media_type}
          
          
          />
          ))}
      </Carousel> 
      <CardRows row_title={`Latest & Trending`} >

      </CardRows>
      {row_titles.map((el, index) => (
        <CardRows key={index} language={el.language} row_title={el.category} />
        ))}
    </div>
    </>
  );
}

export default MainPage;

