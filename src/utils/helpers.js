var daysMap = {
  '0': 'Domingo',
  '1': 'Segunda',
  '2': 'Terça',
  '3': 'Quarta',
  '4': 'Quinta',
  '5': 'Sexta',
  '6': 'Sábado',
};

var monthsMap = {
  '0': 'Jan',
  '1': 'Fev',
  '2': 'Mar',
  '3': 'Abr',
  '4': 'Mai',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Ago',
  '8': 'Set',
  '9': 'Out',
  '10': 'Nov',
  '11': 'Dez',
};

function convertTemp(kelvin) {
  return parseInt((kelvin - 273.15) * 1.8 + 32.0, 10);
}

function getDate(unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var day = daysMap[date.getDay()];
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertTemp: convertTemp,
  getDate: getDate,
  toCelcius: (kelvin) => parseInt(kelvin - 273.15, 10),
};
