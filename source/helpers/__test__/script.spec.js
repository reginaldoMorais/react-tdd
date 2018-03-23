import sum from '../script';

describe('Script Test', () => {

  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

});
