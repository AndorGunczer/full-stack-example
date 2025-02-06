import { useState } from 'react';



export default function Picture() {
  const [bgState, setBgState] = useState("inactive")
  return (
    <div 
      className={bgState === "active" ? "background background--active" : "background"}
      onclick={() => {setBgState("active")}}
      >
      <img
        className={bgState === "active" ? "picture" : "picture picture--active"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onclick={() => {
          setBgState("inactive");
        }}
      />
    </div>
  );
}
