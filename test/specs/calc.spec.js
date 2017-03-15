(function() {
    'use strict';


    describe('math module', function() {
      describe('sum function', function() {
        it('should give the sum when provided two numbers', function() {
          let result = window.calc.sum([1,2]);
          expect( result ).to.be.a('number');
          expect( result ).to.equal(3);
        });
        it('should handle no arguments', function() {
          let result = window.calc.sum();
          expect( result ).to.be.NaN;
        });

      });

    });




})();
