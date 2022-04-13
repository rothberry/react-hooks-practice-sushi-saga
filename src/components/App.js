import { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"
// const API = "http://localhost:3001/sushis/5?limit=4"

const App = () => {
	const [sushis, setSushis] = useState([])
	const [startingIndex, setStartingIndex] = useState(0)
  const [eaten, setEaten] = useState([])
  const [wallet, setWallet] = useState(30)

	// Only runs when the component mounts
	useEffect(() => {
		fetchAllSushis()
	}, [])

	// fetch all the sushi data from our db
	const fetchAllSushis = () => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setSushis(data)
			})
	}

	const selectFourSushis = () => {
		// sushis[0..3]
		// return sushis[0] + ...
		return sushis.slice(startingIndex, startingIndex + 4)
	}

  const addPlate = oneSushi => {
    // need to also subtract the price from the wallet
    const newWallet = wallet - oneSushi.price
    if (newWallet > 0) {
      setEaten([...eaten, oneSushi])
      setWallet(wallet - oneSushi.price)
      return true
    }
    return false
  }

	return (
		<div className="app">
			<SushiContainer
				fourSushis={selectFourSushis()}
				setStartingIndex={setStartingIndex}
				startingIndex={startingIndex}
        addPlate={addPlate}
        // setEaten={setEaten}
        // eaten={eaten}
			/>
			<Table plates={eaten} wallet={wallet}/>
		</div>
	)
}

export default App
