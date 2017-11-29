const main = require('../main/main');

describe('taxi fee', function () {
    it('should return a low fee', function() {
        let inputs = [2, 0 ];
        let summary = main(inputs);
        let expected =6
            expect(summary).toEqual(expected)
        });

    it('should return a mid fee', function() {
        let inputs = [5, 1.5];
        let summary = main(inputs);
        let expected =8
            expect(summary).toEqual(expected)
        });

    it('should return a high fee', function() {
        let inputs = [10,1];
        let summary = main(inputs);
        let expected = 12
        expect(summary).toEqual(expected)
        });
// write your tests here...
});
