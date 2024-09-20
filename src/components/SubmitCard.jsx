import React from "react";

export default function SubmitCard({rating}) {
    return (
        <div className="card justify-center items-center">
            <img className="w-32 h-24 my-6" src="./images/illustration-thank-you.svg" alt=""/> 
            <div className="rounded-full bg-neutral-lightGrey/10 flex flex-row justify-center items-center h-6 w-40">
                <p className="text-primary-orange/50 tracking-tight text-xs">You selected {rating} out of 5</p>
            </div>
            <p className="text-white text-2xl pt-9 pb-4">Thank you!</p>

            <p className="text-xs text-white/40 pl-1 pr-2.5 text-center mb-4">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
    )
}