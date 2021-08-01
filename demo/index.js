const { SearchOptimiser } = require( 'search-optimized' );

so = new SearchOptimiser( [ 3, 2, 4, 1, 5 ] );
console.log( so.find( 4 ) );