import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

const SushiContainer = ({ fourSushis, setStartingIndex, startingIndex, addPlate}) => {
	// fourSushis = props.fourSushis

	const renderSushis = () => {
		// iterate over the four sushis and render each sushi comp with the correct data
		return fourSushis.map((oneSushi) => {
			return <Sushi oneSushi={oneSushi} key={oneSushi.id} addPlate={addPlate} />
		})
	}

  // const somefunc = () => {
  //   used the setStartingIndex...
  // }
	return (
		<div className="belt">
			{/* Render Sushi components here! */}
			{renderSushis()}
			<MoreButton
				setStartingIndex={setStartingIndex}
				startingIndex={startingIndex}
			/>
		</div>
	)
}

export default SushiContainer
