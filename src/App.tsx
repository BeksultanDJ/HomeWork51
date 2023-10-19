import { useState } from 'react'
import './App.css'
import LotteryBall from './LotteryBall';

function App() {
    const initialNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState(initialNumbers);

    const generateRandomNumbers = () => {
        const randomNumbers: number[] = [];
        while (randomNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }
        randomNumbers.sort((a, b) => a - b);
        setNumbers(randomNumbers);
    };

    return (

        <div>
            <div className="App">
                <h1>Лотерея "5 из 36"</h1>
                <div className="lottery-balls">
                    {numbers.map((number, index) => (
                        <LotteryBall key={index} number={number} />
                    ))}
                </div>
                <button onClick={generateRandomNumbers}>New numbers</button>
            </div>
        </div>

    )
}

export default App
