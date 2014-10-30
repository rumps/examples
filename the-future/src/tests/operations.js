import operations from 'operations';
import expect from 'expect.js';

describe('operations', () => {
  it('has four properties', () => {
    expect(Object.keys(operations).length).to.be(4);
  });

  it('has four correctly named properties', () => {
    expect(operations.add).to.be.a('function');
    expect(operations.sub).to.be.a('function');
    expect(operations.mult).to.be.a('function');
    expect(operations.div).to.be.a('function');
  });
});
