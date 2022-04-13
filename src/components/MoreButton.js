import React from "react"

const MoreButton = ({ setStartingIndex, startingIndex }) => {

  const clickHandler = (event) => {
    // console.log(event.target)
    setStartingIndex(startingIndex + 4)
    // do something else...
  }
  
	return (
		<button onClick={clickHandler}>
		{/* <button onClick={() => setStartingIndex(startingIndex + 4)}> */}
			More sushi!
		</button>
	)
}

export default MoreButton
