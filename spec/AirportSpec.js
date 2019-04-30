describe("Airport", function() {
  it("starts with an empty hanger", function() {
    var airport = new Airport();
    expect(airport._hanger.length).toEqual(0)
  });
  describe("Land", function() {

    var plane;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
  });

    it("can land a plane", function() {
        var airport = new Airport();
        airport.land(plane);
        expect(airport._hanger).toContain(plane)
    });
  });
});
