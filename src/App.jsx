import React, { useState } from "react";
import SubmitCard from "./components/SubmitCard"; 


export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [rating, setRating] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating !== null) { // Rating is submitted 
      setShowContent(true); // Hide original card and show the SubmitCard
    }

  };

  return (
    <div>
      {!showContent ? ( <div className="card">
        <div className=" bg-neutral-lightGrey/10 rounded-full w-10 h-10 flex flex-col justify-center items-center mb-8">
        <img className="w-4 h-4" src="./images/icon-star.svg" alt="star icon"/>
      </div>
      <h1 className="text-xl font-bold text-white mb-5 tracking-wider">How did we do?</h1>
      <div>
      <p className="text-white/40 text-xs mb-5">Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      </div>
      <div className="flex flex-row mb-6">
        {[1, 2, 3, 4, 5].map((num) => ( // Rating array that we use the map function to iterate through and store value  
          <button 
            key={num}
            className={`w-circle h-circle rounded-full flex justify-center items-center mr-4 text-xs font-bold transition-colors duration-300
                  ${rating === num ? 'bg-white text-neutral-darkBlue' : 'bg-neutral-lightGrey/10 text-white/50 hover:bg-primary-orange hover:text-neutral-darkBlue'}`} 
            onClick={() => setRating(num)}>
              {num}
            </button>
        ))}
      </div>
    
      {/* The form with the submit button */}
      <form 
      className="bg-primary-orange flex flex-row justify-center items-center rounded-full h-9  active:bg-white transition cursor-pointer" onSubmit={handleSubmit}> 
      <button type="submit" className="uppercase tracking-wide text-sm font-bold text-neutral-veryDarkBlue/90">Submit</button>
      </form>
      </div>
      ) : (
        // Conditionally show SubmitCard after submission
           <SubmitCard rating={rating}/>
           )}
    </div>
  );
}
