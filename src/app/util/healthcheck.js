const mongoHealthcheck = require('mongo-healthcheck');
const mongoose = require('mongoose');

function fancyTimeFormat(time) {
  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  const secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? '0' : ''}`;
  }

  ret += `${mins}:${secs < 10 ? '0' : ''}`;
  ret += `${secs}`;
  return ret;
}

module.exports = {
  async healtCheck(req, res) {
    const uptime = fancyTimeFormat(process.uptime());
    let mongoResult;
    try {
      mongoResult = mongoHealthcheck(mongoose) === 'Connected' ? 'Online' : 'NotConnected/Offline';
    } catch (err) {
      mongoResult = 'NotConnected/Offline';
    }

    return res.status(200).json({
      database: `Mongo ${mongoResult}`,
      service: `online uptime: ${uptime}`,
    });
  },
};
