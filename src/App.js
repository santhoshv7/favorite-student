
import { useState } from 'react'
function App() {

  const [students] = useState(['Bharath','Praveen','Kumar','Ramya','Monica'])
  const [favorites, setFavorites] = useState([])

   function changeButton(student){
    if(favorites.includes(student)){
     setFavorites(favorites.filter((fav) => fav !==student))
    }
    else
    {
      setFavorites([...favorites,student])
    }
  
  }

  return (
    <>
    <div className='container'>
      <div className='list-container'>
        <h2>List of Students</h2>
        <ul>
          {students.map((student,index)=>(
            <li key={student} class="student-item"><span className='student-number'>{index + 1}.</span><span className='student-name'>{student}</span><button onClick = {()=>changeButton(student)} className={favorites.includes(student) ? 'remove-btn':'add-btn'}>{favorites.includes(student)? 'Remove from Favorite' : 'Add to Favorite'}</button></li>
          ))}

        


        </ul>

      </div>

      <div className = 'favorite-container'>
        <h2>Favorite Students</h2>
        <ul>
          {
            favorites.map((student,index)=>(
              <li key={student} className='student-item'><span className='student-number'>{index+1}.</span><span className='student-name'>{student}<button onClick={()=>changeButton (student)} className='remove-btn'>Remove</button></span></li>
            ))
          }
        </ul>

      </div>


    </div>
    </>
    
  );
}

export default App;
