import { useEffect, useState } from "react"
import ResultComp from "./ResultComp"


export default function OptionsComp() {

    const [choice, setChoice] = useState<string>()
    const [play, setPlay] = useState<boolean>(false)

    const handleClick = (option: string) => {
        !play && setChoice(option)
    }

    return (<div className="flex flex-col items-center justify-evenly py-2">
        <div className="flex flex-wrap justify-evenly md:w-9/12 mx-auto my-5 p-3">
            <a href={play ? undefined : "#"} id="rock" onClick={event => {
                event.preventDefault()
                handleClick(event.currentTarget.id)
            }} className={`w-3/12 p-2 min-w-[100px] overflow-hidden ${!play && `hover:bg-yellow-400 hover:shadow-lg`} ${choice && `focus:bg-yellow-400 focus:scale-105 focus:shadow-2xl`}`}>
                <img src="/rock.png" alt="rock" />
            </a>

            <a href={play ? undefined : "#"} id="paper" onClick={event => {
                event.preventDefault()
                handleClick(event.currentTarget.id)
            }} className={`w-3/12 p-2 min-w-[100px] overflow-hidden ${!play && `hover:bg-yellow-400 hover:shadow-lg`} ${choice && `focus:bg-yellow-400 focus:scale-105 focus:shadow-2xl`}`}>
                <img src="/paper.png" alt="paper" />
            </a>

            <a href={play ? undefined : "#"} id="scissors" onClick={event => {
                event.preventDefault()
                handleClick(event.currentTarget.id)
            }} className={`w-3/12 p-2 min-w-[100px] overflow-hidden ${!play && `hover:bg-yellow-400 hover:shadow-lg`} ${choice && `focus:bg-yellow-400 focus:scale-105 focus:shadow-2xl`}`}>
                <img src="/scissors.png" alt="scissors" />
            </a>

        </div>

        <button onClick={(e) => {
            e.preventDefault()
            choice && setPlay(clicked => !clicked)
        }} className={`font-bold text-3xl text-white ${play ? `bg-blue-500 hover:bg-blue-600` : `bg-green-500 hover:bg-green-600`} py-3 px-8`}>{!play ? `PLAY` : `RESTART`}</button>

        {play && choice ? <ResultComp yourChoice={`${choice}`} /> : <p className="py-5">(You must select an option in order to play)</p>}
    </div>)
}