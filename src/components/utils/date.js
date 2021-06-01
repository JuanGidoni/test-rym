const formatedDate = (date) => {

 function getFormattedDate(toformat) {

  var dd = toformat.getDate()
  var mm = toformat.getMonth() + 1
  var yyyy = toformat.getFullYear()
  var hour = toformat.getHours()
  var minu = toformat.getMinutes()

  if (dd < 10) {
   dd = '0' + dd
  }
  if (mm < 10) {
   mm = '0' + mm
  }
  if (minu < 10) {
   minu = '0' + minu
  }

  return dd + '/' + mm + '/' + yyyy + ' ' + hour + ':' + minu;
 }
 var thedate = new Date(date)
 return getFormattedDate(thedate);
}

module.exports = {
 formatedDate
}