var Weather = function () {
};

Weather.prototype.getRandom = function () {
  return Math.random();
};

Weather.prototype.isStormy = function () {
  return (this.getRandom() > 0.75);
};
