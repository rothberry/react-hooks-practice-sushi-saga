import React, { useState } from "react"

function Sushi({ id, img_url: image, name, price, eaten = false, eatHandler }) {
	// const image = props.img_url

	return (
		<div className="sushi">
			<div className="plate" onClick={() => eatHandler(id, price, eaten)}>
				{/* Tell me if this sushi has been eaten! */}
				{eaten ? null : <img src={image} alt={name} width="100%" />}
			</div>
			<h4 className="sushi-details">
				{name} - ${price}
			</h4>
		</div>
	)
}

export default Sushi
