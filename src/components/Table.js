import React from "react"
import AddCash from "./AddCash"

function Table({ plates = [], amount, setAmount }) {
	// renders an empty plate for every element in the array
	const emptyPlates = plates.map((_, index) => (
		<div key={index} className="empty-plate" style={{ top: -7 * index }} />
	))

	return (
		<>
			<h1 className="remaining">You have: ${amount} remaining!</h1>
			<div className="table">
				<div className="stack">{emptyPlates}</div>
				<AddCash setAmount={setAmount} />
			</div>
		</>
	)
}

export default Table
