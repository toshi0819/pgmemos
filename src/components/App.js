import React from "react"
import {increment,decrement,click} from "../actions"
import {connect} from "react-redux"
import Header from "./header"
import Menu from "./Menu"
import "../css/frame.css"

class App extends React.Component{
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <Header/>
        <main id="main">
          <h2>main</h2>
        </main>
        <div id="sub">
          <Menu/>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { 
    count: state.countreducer,
    title: state.readreducer.title
  }
)
const mapDispatchToProps = ({ increment, decrement, click})

export default connect(mapStateToProps,mapDispatchToProps)(App)
