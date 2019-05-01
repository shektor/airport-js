describe("Airport", function() {
  var plane;
  var weather;
  var airport;

  beforeEach(function() {
    // weather = {
    //   isStormy: function() {
    //     return null;
    //   }
    // };

    weather = jasmine.createSpyObj('weather', ['isStormy']);
    weather.isStormy = function(){return false};
    plane = jasmine.createSpy('plane');
    airport = new Airport(weather);
  });

  it("starts with an empty hanger", function() {
    expect(airport._hanger.length).toEqual(0);
  });

  describe("land", function() {
    it("can land a plane", function() {
      airport.land(plane);
      expect(airport._hanger).toContain(plane);
    });
    it("prevents landing when stormy", function() {
      // spyOn(weather, 'isStormy').and.returnValue(true);
      weather.isStormy = function(){return true};
      console.log(weather.isStormy())
      expect(function () {
        airport.land(plane)
        }).toThrow('Storm');
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
