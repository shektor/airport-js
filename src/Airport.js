var Airport = function (weather) {
  this._hanger = [];
  this.weather = weather;
};

Airport.prototype.land = function (plane) {
  if (this.weather.isStormy()) {
    throw 'Storm';
  } else {
    this._hanger.push(plane);
  };
};

Airport.prototype.takeOff = function (plane) {
  this._hanger = this._hanger.filter(function(ele) {
    return ele != plane;
  });
};

Airport.prototype.isInAirport = function (plane) {
  return this._hanger.includes(plane);
};
