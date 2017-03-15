(function() {
    'use strict';


    describe('math modlue', function() {
      describe('um function', function() {
        it('should give the sum when provided two numbers', function() {
          let result = window.calc.sum([1,2]);
          expect( result ).to.be.a('number');
          expect( result ).to.equal(3);
        });
      });
    });




})();
