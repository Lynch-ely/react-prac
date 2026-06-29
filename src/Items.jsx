import React from 'react'

function Items() {
    const fruits = [
        {
            id: 1,
            name: 'Banana',
            calories: 165,
        },
        {
            id: 2,
            name: 'Apple',
            calories: 230,
        },
        {
            id: 3,
            name: 'Orange',
            calories: 50,
        },
        {
            id: 4,
            name: 'Cherry',
            calories: 130,
        },
        {
            id: 5,
            name: 'Watermelon',
            calories: 99,
        },
    ];

    
    /*---------------------------------SORTING ELEMENTS--------------------------------------

    fruits.sort();   To sort a single element in an array
    fruits.sort((a,b) => a.name.localeCompare(b.name));     Alphabetical
    fruits.sort((a,b) => b.name.localeCompare(a.name));     Reverse Alphabetical
    fruits.sort((a,b) => a.calories - b.calories);          Numeric
    fruits.sort((a,b) => b.calories - a.calories);          Reverse Numeric

    const ListItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)

    ------------------------------------------------------------------------------------ */



    /* ---------------LOW CALORIES---------------
    
    const lowCalories = fruits.filter(fruit => fruit.calories < 100);  To return fruits with less than a hundred calories 

    const ListItems = lowCalories.map(lowCalorie => <li key={lowCalorie.id}>{lowCalorie.name}: &nbsp; <b>{lowCalorie.calories}</b></li>)
    
    */


    /* ---------------HIGH CALORIES SORT---------------
    
    const highCalories = fruits.filter(fruit => fruit.calories > 100);  

    const highCaloSort = highCalories.sort((a,b) => a.name.localeCompare(b.name));
    
    const ListItems = highCaloSort.map(highCaloSort => <li key={highCaloSort.id}>{highCaloSort.name}: &nbsp; <b>{highCaloSort.calories}</b></li>)
    
    */
    

  return (
    <div className='min-h-screen flex justify-center'>
        <ol className='list-decimal'>{ListItems}</ol>
    </div>
  )
}

export default Items
