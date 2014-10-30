import sub from 'operations/sub';
import expect from 'expect.js';

describe('sub operation', () => {
  it('can sub', () => {
    expect(sub(1, 1)).to.be(0);
    expect(sub(2, 2)).to.be(0);
    expect(sub(3, 5)).to.be(-2);
  });
});
