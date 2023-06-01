import React from "react"

function MoreButton({ setIdx, totalSushis, displayAmount }) {
	const moreSushiHandler = (e) => {
		setIdx((prevIdx) => {
			const newIdx = prevIdx + displayAmount
      // debugger
			if (newIdx < totalSushis) {
				return newIdx
			} else {
				return 0
			}
		})
	}
	return <button onClick={moreSushiHandler}>More sushi!</button>
}

export default MoreButton
