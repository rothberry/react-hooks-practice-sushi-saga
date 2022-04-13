import { useState, useEffect, useRef } from "react"

const WalletForm = ({ addToWallet }) => {
	const [money, setMoney] = useState(0)

	const submitHandler = (event) => {
		event.preventDefault()
		addToWallet(money)
		setMoney(0) // with the value field
        // event.target.reset()
        // debugger
	}

	useEffect(() => {
		console.log(money)
	}, [money])

	const changeHandler = (event) => {
		setMoney(event.target.value)
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type="number"
				placeholder="money"
				onChange={changeHandler}
				value={money}
			/>
		</form>
	)


    // // !ALT WAY FOR REF
    // const moneyRef = useRef(0)

    // // useEffect(() => {
    // // })
    
    // const submitHandler = event => {
    //     event.preventDefault()
    //     console.log(moneyRef.current.value)
    //     addToWallet(Number(moneyRef.current.value))
    //     event.target.reset()
    // }

    // return (
	// 	<form onSubmit={submitHandler}>
	// 		<input
	// 			type="number"
	// 			placeholder="money"
	// 			ref={moneyRef}
	// 		/>
	// 	</form>
	// )
}

export default WalletForm
