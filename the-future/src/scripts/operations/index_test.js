import assert from 'assert';
import * as operations from '.';

describe('operations', () => {
  it('has four properties', () => {
    assert(Object.keys(operations).length === 4);
  });

  it('has four correctly named properties', () => {
    assert(typeof operations.add === 'function');
    assert(typeof operations.sub === 'function');
    assert(typeof operations.mult === 'function');
    assert(typeof operations.div === 'function');
  });
});
