import React, {useState} from 'react'

const TodoItem = ({text}) => {
    const [cross, setCross] = useState(false);

    function handleCross() {
        cross?setCross(false):setCross(true)
    }
    let style = {
        textDecoration: "line-through"
    }

  return (
      <div onClick={()=> handleCross()}>
          <li style={cross ? style : null}>{text}</li>
      </div>
  )
}

export default TodoItem;