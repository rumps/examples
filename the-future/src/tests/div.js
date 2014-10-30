import div from 'operations/div';
import expect from 'expect.js';

describe('div operation', () => {
  it('can div', () => {
    expect(div(1, 1)).to.be(1);
    expect(div(2, 2)).to.be(1);
    expect(div(3, 5)).to.be(0.6);
  });
});
