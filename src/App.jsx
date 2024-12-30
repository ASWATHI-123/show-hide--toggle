import React from "react";
function App(){
  const [isVisible,setVisible] = useState(true);
  const toggleVisibility = () =>setVisible(!isVisible);

  return(
    <div>
      <h1>Show/hide</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide text":"show Text"}
      </button>
      {isVisible && <p>This is the text you can toggle</p>}
    </div>
  );

}
export default App;