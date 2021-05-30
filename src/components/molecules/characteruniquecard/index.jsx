const CharacterUniqueCard = ({info}) => {
 return (
   <div className="col-4">
    <img src={info.image} className="img-fluid" alt={info.name} />
   </div>
 )
}

export default CharacterUniqueCard
