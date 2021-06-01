const calculate = (data, firstValue, secondValue) => {
 const dataExist = data && data.length > 0 ? true : false
 let counter = 0
 let others = 0
 if (dataExist) {
  for (let i = 0; i < data.length; i++) {
   if (data[i].hasOwnProperty(firstValue) && data[i][firstValue].toLowerCase() === secondValue.toLowerCase()) {
    counter++
   } else {
    others++
   }
  }
  return {
   firstValue: counter,
   secondValue: others
  }
 } else {
  return "Data doesn-t exist."
 }
}

export default calculate
