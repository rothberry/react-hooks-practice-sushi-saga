import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import AddCash from "./AddCash"

const API = "http://localhost:3001/sushis"

function App() {
	const [sushis, setSushis] = useState([])
	const [amount, setAmount] = useState(30)

	useEffect(() => {
		fetchAllSushis()
	}, [])

	const fetchAllSushis = () => {
		fetch(API)
			.then((res) => res.json())
			.then((allSushiArray) => {
				console.log(allSushiArray)
				setSushis(allSushiArray)
			})
	}

	const eatHandler = (id, price, eaten) => {
		if (amount - price >= 0 && !eaten) {
			setSushis((prevSushis) => {
				return prevSushis.map((sushi) => {
					if (sushi.id === id) {
						return { ...sushi, eaten: true }
					} else {
						return sushi
					}
				})
			})
			setAmount((prevAmount) => prevAmount - price)
		} else {
			alert("YOU DON'T HAVE THE CASH")
		}
	}

	const tablePlates = () => sushis.filter(({ eaten }) => eaten)

	return (
		<div className="app">
			<SushiContainer sushis={sushis} eatHandler={eatHandler} />
			<Table plates={tablePlates()} amount={amount} setAmount={setAmount} />
		</div>
	)
}

export default App
