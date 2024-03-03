import React from "react"; 

function RadioGroup({ label, children }) {
    return (
      <fieldset className="RadioGroup">
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }

  export default RadioGroup; 