import { useEffect, useState } from "react"

type Props = {
    yourChoice: string,
    options: string[]
}

export default function ResultComp(prop: Props) {
    const [compChoice, setCompChoice] = useState<string>("")

    const calcRes = (opt1: string, opt2: string) => {
        const winCase = (opt1 === prop.options[0] && opt2 === prop.options[2]) || (opt1 === prop.options[1] && opt2 === prop.options[0]) || (opt1 === prop.options[2] && opt2 === prop.options[1])
        if (opt1 === opt2) {
            return "It's a tie!"
        } else if (winCase) {
            return 'Congratulations! You won!'
        } else {
            return 'You lost... Better luck next time.'
        }
    }

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * prop.options.length)
        setCompChoice(prop.options[randomIndex])
    }, [prop.yourChoice])


    return (<div className="flex flex-col items-center py-8 px-3 mx-auto text-center">
        <p className="font-semibold text-3xl py-5">{calcRes(prop.yourChoice, compChoice)}</p>
        <div className="flex justify-evenly md:w-9/12 mx-auto my-5 p-3">
            <div className={`flex flex-col items-center`}>
                <p className="font-semibold text-xl py-5"> YOU </p>
                <div className="w-5/12 p-2 min-w-[100px] border border-yellow-200 overflow-hidden ">
                    <img src={`/${prop.yourChoice}.png`} alt={prop.yourChoice} />
                </div>
            </div>
            <div className={`flex flex-col items-center`}>
                <p className="font-semibold text-xl py-5"> COMPUTER </p>
                <div className="w-5/12 p-2 min-w-[100px] border border-yellow-200  overflow-hidden ">
                    <img src={`/${compChoice}.png`} alt={compChoice} />
                </div></div>
        </div>
    </div>)
}