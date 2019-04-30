describe("Airport", function() {
  var plane;
  var airport;
  
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it("starts with an empty hanger", function() {
    expect(airport._hanger.length).toEqual(0);
  });

  describe("land", function() {
    it("can land a plane", function() {
      airport.land(plane);
      expect(airport._hanger).toContain(plane);
    });
  });

  describe('takeOff', function() {
    it('removes plane from hanger', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport._hanger.length).toEqual(0);
    });
  });

  describe('isInAirport', function() {
    it('confirms that plane is in airport', function() {
      airport.land(plane);
      expect(airport.isInAirport(plane)).toEqual(true);
    });
    it('confirms that plane is NOT in airport', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.isInAirport(plane)).toEqual(false);
    });
  });
});
