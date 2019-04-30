var Airport = function () {
  this._hanger = [];
};

Airport.prototype.land = function (plane) {
  this._hanger.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  this._hanger = this._hanger.filter(function(ele) {
    return ele != plane;
  });
};

Airport.prototype.isInAirport = function (plane) {
  return this._hanger.includes(plane);
};
