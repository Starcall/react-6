import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());
  mapboxgl.accessToken = "pk.eyJ1Ijoic3RhcmNhbGwiLCJhIjoiY2wzNjN5ZHk3MGNmdjNrbnd5ZGljcmdxZSJ9.VmcAhfqBzMTQVOtE1-DOZA";
  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [37.61192, 55.76199],
      zoom: 10
    })
  }, [])


  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
