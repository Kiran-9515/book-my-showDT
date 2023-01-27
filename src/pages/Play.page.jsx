import React from 'react'
import { useState } from 'react';

import DefaultLayoutHoc from '../layouts/Default.layout'

import PlaysFilters from '../components/PlaysFilter/PlaysFilter.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';

const Plays = () => {

  const [images]= useState(
    [
      {"adult":false,
      "backdrop_path":"/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
      "genre_ids":[28,35,80,53],
      "id":899112,
      "original_language":"en",
      "original_title":"Violent Night",
      "overview":"When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
      "popularity":1590.335,
      "poster_path":"/1XSYOP0JjjyMz1irihvWywro82r.jpg",
      "release_date":"2022-11-30",
      "title":"Violent Night",
      "video":false,
      "vote_average":7.7,
      "vote_count":1000},
    
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

return (
      <>
      <div className=' mx-auto px-2 md:px-12 my-8'>
    <HeroCarousel />
    </div>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse lg:px-14">
          <div className="lg:w-3/4 ">
            <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
            <div className="flex flex:col items-start gap-2 px-2 md:px-3">
              {images.map((images,index) => (
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${images.poster_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                  title={`${images.original_title}`}
                  subtitle={`${images.original_language}"-> ₹400"`}
                />
                <h3 className={`text-xl font-bold}`}>
                  {images.original_title}
                  </h3>
                  <h3 className={`text-sm text-gray-800}`}>
                    Language:  *
                  {images.original_language}
                  </h3>
                  <p>₹400</p>
              </div>
              ))}
              </div>
          </div> 
          <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="Date" 
                tags={["Today", "Tomorrow", "This Weekend"]} />
            </div>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="Language" 
                tags={["Tamil", "Telegu", "English"]} />
            </div>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="Categories" 
                tags={["Theatre", "Storytelling"]} />
            </div>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="Genres" 
                tags={["Drama", "Musical"]} />
            </div>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="More Filters" 
                tags={["Outdoor Events", "Children Theatre", "International Plays", "Online Streaming"]} />
            </div>
            <div className='border-2 border-gray-200 px-3 py-2 rounded-lg mb-2'>
            <PlaysFilters 
                title="Price" 
                tags={["Free", "0-500", "501-2000", "Above 2000"]} />
            </div>
            <div className="border-2 border-red-400 px-3 py-2 flex justify-evenly mb-2" >
              <span className="text-red-700">Browse by Venues</span>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default DefaultLayoutHoc(Plays);