import { useState, useEffect } from "react";

const Counter = (props) => {
  // const { classBoxCount } = props
  const [count, setCount] = useState(() => {
    const isInStorage = localStorage.getItem("count");
    console.log("isInStorage:", isInStorage);

    if (isInStorage) {
      return JSON.parse(isInStorage);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div className="addACount">
        {count.length <= 7 ? (
          <>
            <button
              onClick={() => {
                const newCounter = [...count];
                newCounter.push(0);
                setCount(newCounter);
              }}
            >
              add a counter
            </button>
          </>
        ) : (
          <>
            <div className="addACountFake"></div>
          </>
        )}
      </div>
      <div>
        {count.map((counter, index) => {
          console.log("count in counter.map:", count);
          console.log("counter in counter.map:", counter);

          return (
            <div key={index}>
              {counter <= 10 && counter > 0 ? (
                <>
                  <button
                    // className={counter <= 0 ? "hide" : "show"}
                    onClick={() => {
                      const newCount = [...count];
                      console.log("newCount1 in counter.map:", newCount);
                      newCount[index] = counter - 1;
                      console.log("newCount2 in counter.map:", newCount);
                      setCount(newCount);
                    }}
                  >
                    <p>-</p>
                  </button>
                </>
              ) : (
                <div className="btnFakeHide"></div>
              )}
              <p className={counter === 0 || counter === 10 ? "red" : "green"}>
                {counter}
              </p>
              {counter >= 0 && counter < 10 ? (
                <>
                  <button
                    className={counter > 9 ? "hide" : "show"}
                    onClick={() => {
                      const newCount = [...count];
                      console.log("newCount1 in counter.map:", newCount);
                      newCount[index] = counter + 1;
                      console.log("newCount2 in counter.map:", newCount);
                      setCount(newCount);
                    }}
                  >
                    <p>+</p>
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <div className="btnFakeHide"></div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="suppACounter">
        {count.length > 0 ? (
          <>
            <button
              onClick={() => {
                const newCounter = [...count];
                newCounter.pop(0);
                setCount(newCounter);
              }}
            >
              supp a counter
            </button>
          </>
        ) : (
          <>
            <div className="suppACounterFake"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Counter;
