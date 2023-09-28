import React from "react";

const QuickFilter = (props) => {

  return (


    <div className="w-full overflow-x-auto mt-1" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
      <div className="flex text-xs md:text-base lg:text-base">

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold p-2 rounded-lg">
          Assigment
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold p-2 rounded-lg">
          Experiment
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          PYQ
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Lecture Slides
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Reference Book
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Notes
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-1
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-2
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-3
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-4
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-5
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Subject-6
        </button>




      </div>
      <br />
    </div>

  );
};

export default QuickFilter;