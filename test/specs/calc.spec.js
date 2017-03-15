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
        it('should only handle 1 argument', function() {
          let result = window.calc.sum([11]);
          expect(result).to.be.a('number');
          expect(result).to.equal(11);
        });
        it('should convert strings to numbers for addition', function() {
          let result = window.calc.sum(['2', '8']);
          expect( result ).to.be.a('number');
          expect( result ).to.equal(10);
        });
        it('should indicate input is not a number', function() {
          let result = window.calc.sum('Jordan');
          expect( result ).to.be.undefined;

        });
      });

    });
    describe('second math module', function() {
      describe('factorial function', function() {
        it('should return the factorial for the given number', function() {
          let result = window.calc.factorial(6);
          expect( result ).to.be.a('number');
          expect( result ).to.equal(720);
        });
      });
    });



})();
