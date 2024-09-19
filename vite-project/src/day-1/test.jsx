import { useEffect, useState } from "react";
import styled from "styled-components";

const SidebbarBox = styled.div`
  background-color: #000;
  width: 500px;
  height: 100vh;
  display: flex;
  position: absolute;
  right: 0;
`;

const SideBarComponent = () => {
  const [clickButton, setClickButton] = useState(false);

  useEffect(() => {
    const escFunction = (event) => {
      console.log("Inside the ESC Functon", event);
      if (event.key === "Escape") {
        console.log("Escape key Pressed");
        setClickButton(true);
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(clickButton));
  }, [clickButton]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("item"));
    console.log("GetData: ", getData);
  
      setClickButton(getData);
    
  }, []);

  return (
    <>
      {clickButton && (
        <SidebbarBox>
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            Here is the Sidebar Component
          </h1>
        </SidebbarBox>
      )}

      <button onClick={() => setClickButton((prev) => !prev)}>
        {clickButton ? "Open Sidebar" : "Close Sidebar"}
      </button>
    </>
  );
};

export default SideBarComponent;
