import React from "react";

function Square(props) {

  return (
    <section>
      <div className="square" style={{ backgroundColor: props.color }}></div>
    </section>

  )
}

export default Square
  // <section className="square">Here</section>