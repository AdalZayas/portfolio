import React, { useState, useEffect } from "react";
import LottieScreen from "./LottieScreen";

const App = () => {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      setTimeout(() => {
        setcompleted(true);
      }, 1500);
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <LottieScreen animation="loading-bar1" />
          ) : (
            <LottieScreen animation="success" />
          )}
        </>
      ) : (
        <div className="bg-blue-dark border-b-12 px-52 border-green flex">
          <div className=" bg-gray-dark m-4 p-2 rounded-sm">
            <h1 className="text-xl text-blue-baby font-roboto-mono">
              [Adal Zayas]
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
