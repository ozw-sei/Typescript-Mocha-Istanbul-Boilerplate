import * as assert from 'power-assert';

import { Point } from './Point';

describe( 'Point', function() {

    describe( 'constructor()', function() {

        it( 'Should keep the given coordinates', function() {
            var iPoint = new Point( 15, 16 );
            assert( iPoint.x == 15 );
            assert( iPoint.y == 16 );
        });

    });

});
