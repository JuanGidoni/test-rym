import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useConfigurationContext } from '../../configuration/ConfigContext'
import CharacterUniqueCard from "../../molecules/CharacterUniqueCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
 desktop: {
   breakpoint: {
     max: 3000,
     min: 1024
   },
   items: 3,
   slidesToSlide: 2,
   partialVisibilityGutter: 40
 },
 mobile: {
   breakpoint: {
     max: 464,
     min: 0
   },
   items: 2,
   slidesToSlide: 2,
   partialVisibilityGutter: 30
 },
 tablet: {
   breakpoint: {
     max: 1024,
     min: 200
   },
   items: 1,
   slidesToSlide: 1,
   partialVisibilityGutter: 30
 }
};

const Search = () => {

 const { name } = useParams()
 const { searchedChar, setSearchedChar, urls } = useConfigurationContext()

 useEffect(() => {
  (async () => {
    try {
      const callToApi = await fetch(`${urls.characters}/?name=${name}`)
      const resultFromCall = await callToApi.json()
      setSearchedChar(resultFromCall.results)
    } catch (error) {
      console.log(error)
    }
  })()

 }, [setSearchedChar, name, urls])

 return (
  searchedChar && searchedChar.length > 0 ?
    <Carousel
     ssr
     itemClass="image-item"
     responsive={responsive}
    >
     {searchedChar.map(character => {
      return (
       <Link className="card text-decoraton-none" to={`/character/${character.id}`} key={character.id}>
        <CharacterUniqueCard
         className="character"
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         type={character.type}
         gender={character.gender}
         origin={character.origin}
         location={character.location}
         image={character.image}
         episode={character.episode}
         url={character.url}
         created={character.created}
        />
       </Link>
      );
     })
     }
    </Carousel>
    : 'Character list not found or still loading...'
 )
}

export default Search
