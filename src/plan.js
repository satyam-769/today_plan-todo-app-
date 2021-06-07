import React from 'react'

const Plan = (props) => {
    return (
        <div>
            <h1 className="shadow p-2 my-2 col-sm-9">{props.value}</h1>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.deleteItem(props.id)}}>X</button>
        </div>
    )
}
export default Plan;