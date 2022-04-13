import { useState } from "react"

const Sushi = ({ oneSushi, addPlate }) => {
	const [showSushi, setShowSushi] = useState(true)

	const eatHandler = (event) => {
		// add our current sushi to the eaten array
		// ! CAN"T DO THIS
		// // eaten.push(oneSushi)
		// setEaten([...eaten, oneSushi])
    // if (!eatSushi) {
    //   addPlate...
    // }

    
    // showSushi=true && addPlate=false => is False
    if (showSushi && addPlate(oneSushi)) {
      // addPlate(oneSushi)
      setShowSushi(false)
    }
    
    // ? alt...
    // ? could pass down the wallet, and check if wallet - price > 0
    // if (showSushi && wallet - price > 0) {
    //   addPlate(oneSushi)
    //   setShowSushi(false)
    // }

	}

	return (
		<div className="sushi">
			<div className="plate" onClick={eatHandler}>
				{/* Tell me if this sushi has been eaten! */}
				{showSushi ? (
					<img src={oneSushi.img_url} alt={oneSushi.name} width="100%" />
				) : null}
			</div>
			<h4 className="sushi-details">
				{oneSushi.name} - ${oneSushi.price}
			</h4>
		</div>
	)
}

export default Sushi
