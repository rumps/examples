import assert from 'assert';
import add from 'operations/add';

describe('add operation', () => {
  it('can add', () => {
    assert(add(1, 1) === 2);
    assert(add(2, 2) === 4);
    assert(add(3, 5) === 8);
  });
});
