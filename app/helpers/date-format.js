import Ember from 'ember';

export function dateFormat(params) {
  var getDate = params[0],
      clearDate = new Date(getDate);
      let year = clearDate.getFullYear(),
    			month = ('0' + (clearDate.getMonth()+1)).slice(-2),
    			day = ('0' + (clearDate.getDate())).slice(-2),
    			hour = ('0' + (clearDate.getHours())).slice(-2),
			    min = ('0' + (clearDate.getMinutes())).slice(-2),
			    sec = ('0' + (clearDate.getSeconds())).slice(-2),
    			formatted = `${day}.${month}.${year} ${hour}:${min}:${sec}`;
  return formatted;
}

export default Ember.Helper.helper(dateFormat);