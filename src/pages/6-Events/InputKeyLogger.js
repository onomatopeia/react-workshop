import React from 'react'

const InputKeyLogger = props => (
  <div>
    <label htmlFor="input-key-logger">Make me log key code on type</label>
    <div>
      <input type="text" id="input-key-logger" onKeyPress={(event) => console.log(event.key + "(" + event.which + ")")}/>
    </div>
  </div>
)

export default InputKeyLogger
