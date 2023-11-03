import React, {useState} from 'react'

function SearchComponent(props) {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
   const newArr =  props.data.filter(e => {
      return e.username.includes(searchValue)
    })

    props.updateArr(newArr)
  }
  return (
    <div>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchComponent