import Gender from "../../atoms/Gender"
import Parragraph from "../../atoms/Parragraph"
import Status from "../../atoms/Status"

const CharacterUniqueCard = ({
  className,
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created
}) => {
  return (
    <div className={className}>
      <img src={image} className="img-fluid card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title">
          {name}
        </h4>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <Gender gender={gender} />
          <Status status={status} />
          <Parragraph className="text-info">
            {species}
          </Parragraph>
          <Parragraph className="text-warning">
            {location.name}
          </Parragraph>
        </div>
      </div>
    </div>
  )
}

export default CharacterUniqueCard
