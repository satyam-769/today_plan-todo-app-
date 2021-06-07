import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './plan'
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
  
    this.state={
      items: [],
      text:""
  }
  }
  handleChange=(event)=> {
    this.setState({text: event.target.value})
  }

  handleAdd=(event)=>{
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text: ''});
    }
    event.preventDefault()
  }

  handleDelete= (id)=>{
    // alert("Item Deleted", id)
    console.log("Item Deleted", id)
    const oldItems =[...this.state.items]
    console.log("oldItems",oldItems)
    const items= oldItems.filter((element, i)=>{
      return i !== id
    })
    console.log(items)
    this.setState({items: items})
    
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Today Plan</h2>
              <div className="row">
                <div className="col-9">
                  <input className="form-control" type="text" placeholder="Enter Your Plan Here" value={this.state.text} onChange={this.handleChange}/>
                </div>
                <div className="col-2">
                  <button className="btn btn-success px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid">
                  <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value,i)=>{
                      return <Plan key={i} id={i} value={value} deleteItem={this.handleDelete}/>
                    })
                  }
                  </ul>
                  {/* <ul className="list-unstyled row m-5">
                  <Plan  VALUE={this.state.items} deleteItem={this.handleDelete}/>
                  </ul> */}
                </div>
              </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default App;