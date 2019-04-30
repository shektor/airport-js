describe("Weather", function() {
  describe("isStormy", function() {
    it("can be stormy", function() {
      var weather = new Weather();
      spyOn(weather, 'getRandom').and.returnValue(0.8);
      expect(weather.isStormy()).toEqual(true);
    });
    it("can not be stormy", function() {
      var weather = new Weather();
      spyOn(weather, 'getRandom').and.returnValue(0.5)
      expect(weather.isStormy()).toEqual(false);
    });
  });
});
