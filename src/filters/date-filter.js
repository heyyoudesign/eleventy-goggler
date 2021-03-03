const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value).locale('it');
  // return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
  return `${dateObject.format('dddd DD')} ${dateObject.format('MMMM YYYY')}`;
};
