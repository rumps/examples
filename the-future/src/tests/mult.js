import assert from 'assert';
import mult from 'operations/mult';

describe('mult operation', () => {
  it('can mult', () => {
    assert(mult(1, 1) === 1);
    assert(mult(2, 2) === 4);
    assert(mult(3, 5) === 15);
  });
});
