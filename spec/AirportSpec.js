describe("Airport", function() {
  var plane;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
  });

  it("starts with an empty hanger", function() {
    var airport = new Airport();
    expect(airport._hanger.length).toEqual(0);
  });

  describe("Land", function() {



    it("can land a plane", function() {
      var airport = new Airport();
      airport.land(plane);
      expect(airport._hanger).toContain(plane);
    });
  });

  describe('taking off', function() {
    it('removes plane from hanger', function() {
      var airport = new Airport();
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport._hanger.length).toEqual(0);
    });
  });

  describe('is plane in airport?', function() {
    it('confirms that plane is in airport', function() {
      var airport = new Airport();
      airport.land(plane);
      expect(airport.isInAirport(plane)).toEqual(true);
    });
    it('confirms that plane is NOT in airport', function() {
      var airport = new Airport();
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.isInAirport(plane)).toEqual(false);
    });
  });
});
