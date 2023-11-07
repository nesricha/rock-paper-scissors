import { useEffect, useState } from "react"
import ResultComp from "./ResultComp"


export default function OptionsComp() {

    const [choice, setChoice] = useState<string>()
    const [play, setPlay] = useState<boolean>(false)
    const options = ["rock", "paper", "scissors"]

    const handleClick = (option: string) => {
        !play && setChoice(option)
    }

    return (<div className="flex flex-col items-center justify-evenly py-2">
        <div className="flex flex-wrap justify-evenly md:w-9/12 mx-auto my-5 p-3">
            {options.map((opt, i) => <a key={i}
                href={play ? undefined : "#"}
                id={`${opt}`}
                onClick={e => {
                    e.preventDefault()
                    handleClick(e.currentTarget.id)
                }}
                className={`w-3/12 p-2 min-w-[100px] border border-yellow-200 overflow-hidden ${!play && `hover:bg-yellow-400 hover:shadow-lg`} focus:bg-yellow-400 focus:scale-105 focus:shadow-2xl`}>
                <img src={`/${opt}.png`} alt={`${opt}`} />
            </a>)}


        </div>

        <button onClick={(e) => {
            e.preventDefault()
            choice && setPlay(clicked => !clicked)
            play && setChoice(undefined)
        }} className={`font-bold text-3xl text-white ${play ? `bg-blue-500 hover:bg-blue-600` : `bg-green-500 hover:bg-green-600 disabled:bg-green-300`} py-3 px-8`}
        disabled={!choice}>{!play ? `PLAY` : `RESTART`}</button>

        {play && choice ? <>
            <ResultComp yourChoice={`${choice}`} options={options} />
            <p className="py-5">Press "RESTART" to play again</p>
        </> : <p className="py-5">{!choice && `(You must select an option in order to play)`}</p>}
    </div>)
}