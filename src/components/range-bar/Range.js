import React from 'react'
import "./styles.css"

function Range({name, max, min, rangeValue, setRangeValue}) {
  return (
    <div data-testid="range" className='range-holder'>
      <span id="rangeValue">{rangeValue}</span>
      <input 
          data-testid="range-input"
          max={max} 
          value={rangeValue}
          min={min} 
          name={name} 
          type="range" 
          className="range" 
          onChange={setRangeValue} 
          onMouseMove={setRangeValue} />
    </div>
  )
}

export default Range;