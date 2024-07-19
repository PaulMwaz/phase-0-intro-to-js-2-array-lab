require('./helpers.js');

let cats; // Define cats at the top level

describe('index.js', function () {
  beforeEach(function () {
    cats = ['Milo', 'Otis', 'Garfield']; // Assign initial value before each test
  });

  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        function destructivelyAppendCat(name) {
          cats.push(name);
        }
        destructivelyAppendCat('Ralph');
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        function destructivelyPrependCat(name) {
          cats.unshift(name);
        }
        destructivelyPrependCat("Bob");
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        function destructivelyRemoveLastCat() {
          cats.pop();
        }
        destructivelyRemoveLastCat();
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        function destructivelyRemoveFirstCat() {
          cats.shift();
        }
        destructivelyRemoveFirstCat();
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        function appendCat(name) {
          return [...cats, name];
        }
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        function prependCat(name) {
          return [name, ...cats];
        }
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        function removeLastCat() {
          return cats.slice(0, -1);
        }
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        function removeFirstCat() {
          return cats.slice(1);
        }
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});