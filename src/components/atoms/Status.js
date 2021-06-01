import React from 'react'

const Status = ({status}) => {
 return (
  status.toLowerCase() === 'alive' ?
   <p className="text-success small">
    Alive
   </p>
   :
   <p className="text-danger small">
    Dead
   </p>
 )
}

export default Status
