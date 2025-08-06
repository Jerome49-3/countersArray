import { useState, useEffect, useLayoutEffect } from "react";

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
  const [total, setTotal] = useState(() => {
    const isInStorage = localStorage.getItem("count");
    console.log("isInStorage:", isInStorage);

    if (isInStorage) {
      return JSON.parse(isInStorage);
    } else {
      return [];
    }
  });
  useLayoutEffect(() => {
    let newEl = 0;
    {
      count.forEach((el, index) => {
        console.log("elCount:", el);
        newEl = newEl + el;
        setTotal(newEl);
      });
    }
  }, [count]);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("total", JSON.stringify(total));
  }, [count, total]);

  return (
    <>
      <div className="addSuppCounter">
        <div className="addACount">
          {count.length < 3 ? (
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
      </div>
      <div className="containerMapCounters">
        {count.map((counter, index) => {
          console.log("count in counter.map:", count);
          console.log("counter in counter.map:", counter);

          return (
            <div key={index} className="boxCounters">
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
              <div className="btnReset">
                <button
                  className="btnReset"
                  onClick={() => {
                    const newCount = [...count];
                    newCount[index] = 0;
                    setCount(newCount);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">{total}</div>
    </>
  );
};

export default Counter;
