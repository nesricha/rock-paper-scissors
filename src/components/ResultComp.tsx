import { useEffect, useState } from "react"

type Props = {
    yourChoice: string
}

export default function ResultComp(prop: Props) {
    const choices = ["rock", "paper", "scissors"]
    const [compChoice, setCompChoice] = useState<string>("")

    const calcRes = (opt1: string, opt2: string) => {
        const winCase = (opt1 === 'rock' && opt2 === 'scissors') || (opt1 === 'paper' && opt2 === 'rock') || (opt1 === 'scissors' && opt2 === 'paper')
        if (opt1 === opt2) {
            return "It's a tie!"
        } else if (winCase){
            return 'Congratulations! You won!'
        } else {
            return 'You lost... Better luck next time.'
        }
    }

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * choices.length)
        setCompChoice(choices[randomIndex])
    }, [])


    return (<div className="flex flex-col items-center py-10 mx-auto">
        <p className="font-semibold text-3xl py-5">{calcRes(prop.yourChoice, compChoice)}</p>
        <div className="flex justify-evenly md:w-9/12 mx-auto my-5 p-3">
            <div className={`flex flex-col items-center`}>
                <p className="font-semibold text-xl py-5"> You </p>
                <div className="w-5/12 p-2 min-w-[100px] overflow-hidden ">
                    <img src={`/${prop.yourChoice}.png`} alt={prop.yourChoice} />
                </div>
            </div>
            <div className={`flex flex-col items-center`}>
                <p className="font-semibold text-xl py-5"> Computer </p>
                <div className="w-5/12 p-2 min-w-[100px] overflow-hidden ">
                    <img src={`/${compChoice}.png`} alt={compChoice} />
                </div></div>
        </div>
    </div>)
}