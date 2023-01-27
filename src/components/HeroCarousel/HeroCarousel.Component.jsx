import React, { useState } from "react";
import HeroSlider from "react-slick";


const HeroCarousel =() =>{
    
    const [images, setImages]= useState(
        [
            {
        adult: false,
        backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        genre_ids: [16, 878, 28],
        id: 610150,
        original_language: "ja",
        original_title: "ドラゴンボール超 スーパーヒーロー",
        overview:
          "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        popularity: 5953.989,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super: Super Hero",
        video: false,
        vote_average: 8,
        vote_count: 1426,
      },
      {
        adult: false,
        backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
        genre_ids: [53],
        id: 985939,
        original_language: "en",
        original_title: "Fall",
        overview:
          "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
        popularity: 6731.327,
        poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
        release_date: "2022-08-11",
        title: "Fall",
        video: false,
        vote_average: 7.4,
        vote_count: 346,
      },
      {
      adult:false,
      backdrop_path:"/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
      genre_ids:[28,12,878],
      id:505642,
      original_language:"en",
      original_title:"Black Panther: Wakanda Forever",
      overview:"Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      popularity:1219.176,
      poster_path:"/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      release_date:"2022-11-09","title":"Black Panther: Wakanda Forever",
      video:false,
      vote_average:7.5,
      vote_count:1683,
    },
    {"adult":false,
    "backdrop_path":"/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
    "genre_ids":[28,53,18],
    "id":846433,
    "original_language":"en",
    "original_title":"The Enforcer",
    "overview":"A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
    "popularity":2153.96,
    "poster_path":"/72V1r1G8S87ELagVxjqAUdChMCt.jpg",
    "release_date":"2022-09-22",
    "title":"The Enforcer",
    "video":false,
    "vote_average":6.9,
    "vote_count":73}
    ]
    );

    const settingsLG ={
      arrow: true, 
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      focusOnSelect: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }

    const settings ={
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }
    
    return (
      <>
        <div className="lg:hidden">
          <HeroSlider {...settings}>
            {images.map((images,index) => (
              <div className="w-full h-56 md:h-80 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            ))}
          </HeroSlider>
        </div>
        <div className="hidden lg:block">
          <HeroSlider {...settingsLG}>
            {images.map((images,index) => (
              <div className="w-full h-96 px-2 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            ))}
          </HeroSlider>
        </div>
      </>
    );
  };


export default HeroCarousel;