const { SearchOptimiserBinary, SearchOptimiserDict } = require( 'search-optimized' );

let studentSectionList = [];
let studentList = [];

function initilizeList() {
    studentList = [];
    studentSectionList = [];
    for ( let i = 5000; i >= 1; i-- ) {
        studentSectionList.push( { id: i, parentStudent: i } );
    }
    for ( let i = 5000; i >= 1; i-- ) {
        studentList.push( { id: i } );
    }
    // console.log( 'ss: ', studentSectionList );
}

initilizeList();

const startTime1 = new Date();
studentSectionList = studentSectionList.map( ss => {
    const res = { ...ss, parentStudentInstance: studentList.find( s => s.id == ss.parentStudent ) };
    // console.log( res );
    return res;
} );
const endTime1 = new Date();
console.log( 'time diff without optimization: ', endTime1 - startTime1 );

//---------------- Optimized ----------------
initilizeList();
const startTime2 = new Date();
const studentListForSearch = new SearchOptimiserBinary( studentList, ( a, b ) => a.id - b.id );
studentSectionList = studentSectionList.map( ss => {
    const res = { ...ss, parentStudentInstance: studentListForSearch.find( { id: ss.parentStudent } ) };
    return res;
} );
const endTime2 = new Date();
console.log( 'time diff with optimization: ', endTime2 - startTime2 );


//---------------- Optimized Dict----------------
initilizeList();
const startTime3 = new Date();

const studentListForSearchDict = new SearchOptimiserDict( studentList, 'id' );
studentSectionList = studentSectionList.map( ss => {
    const res = { ...ss, parentStudentInstance: studentListForSearchDict.find( { id: ss.parentStudent } ) };
    return res;
} );

const endTime3 = new Date();
console.log( 'time diff with optimization dict: ', endTime3 - startTime3 );