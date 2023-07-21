
import { useState } from "react";

export default function HookState() {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            {/* goback */}
            <a href="/hooks" className="btn btn-primary">
              <i className="bi bi-arrow-left"></i>
            </a>
          </div>
          <div className="col">useState</div>
        </div>
        <div className="row">
          <div className="col-12 p-3">
            {/* Make a button */}
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Click me</button>

            {/* Make a label  */}
            <label className="form-label">You clicked {count} times</label>
            {/* make a button to reset count */}
            <button className="btn btn-primary" onClick={()=>setCount(0)}>Reset</button>
          </div>          
        </div>
      </div>
    </>
  );
}
