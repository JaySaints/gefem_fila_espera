module.exports.format = (mydate) => {
  const date = new Date(mydate)

  var day = date.getDate()
  var fday = (day <= 9) ? '0' + day : day
  var month = date.getMonth() + 1
  var fmonth = (month <= 9) ? '0' + month : month
  var year = date.getFullYear()

  const fDate = fday + '/' + fmonth + '/' + year

  var hour = date.getHours()
  var fhour = (hour <= 9) ? '0' + hour : hour
  var min = date.getMinutes()
  var fmin = (min <= 9) ? '0' + min : min
  var second = date.getSeconds()
  var fsecond = (second <= 9) ? '0' + second : second

  const fHour = fhour + ':' + fmin + ':' + fsecond

  return {
    date: fDate,
    hour: fHour
  }
}
