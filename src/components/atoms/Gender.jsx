import { FaMale, FaFemale } from 'react-icons/fa'

const Gender = ({ gender }) => {
 return (
  gender.toLowerCase() === 'male' ?
   <p className="text-muted small">
    <FaMale />
   </p>
   :
   <p className="text-pink small">
    <FaFemale />
   </p>
 )
}

export default Gender
