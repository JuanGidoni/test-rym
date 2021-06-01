import CharacterUniqueCard from "../../molecules/CharacterUniqueCard"
import { Link } from 'react-router-dom'
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

const CharactersList = ({characters }) => {
  return (
    characters && characters.length > 0 ?
    <Carousel
      ssr
      itemClass="image-item"
      responsive={responsive}
    >
      {characters.map(character => {
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

export default CharactersList
