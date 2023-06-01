import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, eatHandler }) {
	const [startingIdx, setIdx] = useState(0)
	const displayAmount = 4

	const displaySushis = () => {
		// slice(startingIdx, startingIdx + 4)
		return sushis
			.slice(startingIdx, startingIdx + displayAmount)
			.map((sushi) => {
				return <Sushi {...sushi} key={sushi.id} eatHandler={eatHandler}/>
				// return <Sushi sushi={sushi} />
			})
	}
	return (
		<div className="belt">
			{displaySushis()}
			<MoreButton
				setIdx={setIdx}
				totalSushis={sushis.length}
				displayAmount={displayAmount}
			/>
		</div>
	)
}

export default SushiContainer
