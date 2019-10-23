describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  // it('handles an empty array2', function(){
  //   expect( bubbleSort(['a']) ).toEqual( ['a'] );
  // });

  // it('handles single item array', function(){
  //   // expect( bubbleSort(inputArr).length ).toEqual( 1 );
  //   // expect( bubbleSort(inputArr)).toEqual( ['a'] );
  //   //expect( bubbleSort(['a']).length ).toEqual( 1 );
  //   expect( bubbleSort(['a'])).toEqual( ['a'] );
  // });

});

describe('Bubble Sort1', function(){
  let inputArr = [];
  let newArr;
  let newArrSwaps;
  let newArrNum;
  let newArrSym;

  beforeEach(() => {
    inputArr = ['a'];
    newArr = ['a', 'd', 'b', 'c'];
    newArrSwaps = 0;
    newArrNum = ['10', '3', '4', '1'];
    newArrSym = ['20', '40', 'a', '&'];
  })


    it('handles single item array', function(){
      expect( bubbleSort(inputArr).length ).toEqual( 1 );
      expect( bubbleSort(inputArr)).toEqual( ['a'] );
      // expect( bubbleSort(['a']).length ).toEqual( 1 );
      // expect( bubbleSort(['a'])).toEqual( ['a'] );
    });

    it('handles multi-item array', function(){
      expect( bubbleSort(newArr).length ).toBeGreaterThan(1);
      expect( bubbleSort(newArr)).toEqual( ['a', 'b','c', 'd'] )
      expect( newArrSwaps ).toEqual( 2 )
      expect( bubbleSort(newArrNum)).toEqual( ['1', '3','4', '10'] );
      expect( bubbleSort(newArrSym)).toEqual( ['&', 'a','20', '40'] );
    });

});
