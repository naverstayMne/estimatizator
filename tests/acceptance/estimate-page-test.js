import { test } from 'qunit';
import moduleForAcceptance from 'estimatizator/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | estimate page');

test('visiting /estimate-page', function(assert) {
  visit('/estimate-page');

  andThen(function() {
    assert.equal(currentURL(), '/estimate-page');
  });
});
