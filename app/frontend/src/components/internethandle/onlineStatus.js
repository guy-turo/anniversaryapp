import React from 'react'
import isReachable from 'is-reachable'

const URL='google.com:403'
const EVERY_SECOND=1000

export default class App extends React.PureComponent{
  _isMounted=true
  state={online:false}
  componentDidMount(){
    setInterval(async()=>{
      const online=await isReachable(URL)
      if (this._isMounted){
        this.setState({online})
      }
    },EVERY_SECOND)
  }
  componentWillUnmount(){
    this._isMounted=false
  }
  render(){
    return(
      <div>
        {this.state.online?"you\re online":"you\re offline"}
      </div>
    )
  }
}