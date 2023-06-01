import React, { useState } from "react"

const AddCash = ({ setAmount }) => {
	const [cash, setCash] = useState(0)
  const handleSubmit = e => {
    e.preventDefault()
    setAmount(prevAmount => prevAmount + cash)
  }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Add Cash..."
					type="number"
					onChange={(e) => setCash(Number(e.target.value))}
				/>
				<input type="submit" value="Add Cash" />
			</form>
		</div>
	)
}

export default AddCash
