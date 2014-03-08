/* jasmine specs for primitives/SensingPrims.js go here */

describe ('SensingPrims', function() {
  var sensingPrims;
  beforeEach(function() {
    sensingPrims = SensingPrims;
    realDate = Date;
  });

  afterEach(function () {
    Date = realDate;
  });

  describe('primTimestamp', function(){
    beforeEach(function() {
      /* MonkeyPatching the built-in Javascript Date */
      var epochDate = new Date(2000, 0, 1);
      var nowDate = new Date(2014, 5, 16);
      Date = function () {
        return (arguments.length ? epochDate : nowDate);
      };
    });

    it('should return the days since 2000', function() {
      expect(sensingPrims.prototype.primTimestamp()).toEqual(5280.25);
    });
  });

  describe('primTimeDate', function(){
    beforeEach(function() {
      /* MonkeyPatching the built-in Javascript Date */
      Date = function () {
        return {
          'getFullYear' : function() { return 2014;},
          'getMonth' : function() { return 4;},
          'getDate' : function() { return 16;},
          'getDay' : function() { return 4;},
          'getHours' : function() { return 9;},
          'getMinutes' : function() { return 18;},
          'getSeconds' : function() { return 36;},
          'getTime' : function() {}
        };
      };
    });

    it('should return the year', function() {
      var block = {'args' : ['year']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(2014);
    });

    it('should return the month of the year', function() {
      var block = {'args' : ['month']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(5);
    });

    it('should return the day of the week', function() {
      var block = {'args' : ['day of week']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(5);
    });

    it('should return the hour of the day', function() {
      var block = {'args' : ['hour']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(9);
    });
    
    it('should return the minute of the hour', function() {
      var block = {'args' : ['minute']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(18);
    });

    it('should return the second of the minute', function() {
      var block = {'args' : ['second']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(36);
    });

    it('should return the 0 on year', function() {
      var block = {'args' : ['anythingElse']};
      expect(sensingPrims.prototype.primTimeDate(block)).toEqual(0);
    });
  });
});