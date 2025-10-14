import { useState } from "react";
import { Pane } from "https://cdn.skypack.dev/tweakpane@4.0.4";

//Import for the showCard

export function Person({
  /*Person component props*/
  name,
  age,
  children,
  closable,
}) {
  let imgx = `src/assets/FullSizeRender.jpg`;
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <>
        <button className="showCardBtn" onClick={() => setVisible(true)}>
          <a class="fancy" href="#">
            <span class="top-key"></span>
            <span class="text">Buy Tickets</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
        </button>
      </>
    );
  }

  return (
    <>
      <div className="wrapper">
        {closable && (
          <div>
            <button
              className="button-close"
              onClick={() => {
                setVisible(false);
              }}
              aria-label="Close"
            ></button>
          </div>
        )}
        <img
          src={imgx}
          width={"150"}
          height={"150px"}
          style={{
            borderRadius: "100%",
            // border: "1px solid #4443438b",
            boxShadow:
              "0 4px 8px 0 rgba(52, 52, 52, 0.37), 0 6px 20px 0 rgba(199, 198, 198, 0.59)",
            cursor: "pointer",
          }}
          alt=""
          srcset=""
        />
        <p>
          {name} is {age} years old{" "}
        </p>
        <section className="buttonsArea">
          <button
            className="cta-facture"
            style={{
              margin: "1em",
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <span class="hover-underline-animation"> Gérer </span>

            <img
              width={20}
              height={20}
              position={"relative"}
              top={3}
              className="arrow"
              src="src/assets/reshot-icon-right-arrow-UCA8NGYZDJ.svg"
              alt=""
              srcset=""
            />
          </button>
          <button
            className="cta-facture"
            style={{
              margin: "1em",
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <span class="hover-underline-animation"> Facture </span>

            <img
              width={20}
              height={20}
              position={"relative"}
              top={3}
              className="arrow"
              src="src/assets/reshot-icon-right-arrow-UCA8NGYZDJ.svg"
              alt=""
              srcset=""
            />
          </button>
        </section>
      </div>
    </>
  );
}
