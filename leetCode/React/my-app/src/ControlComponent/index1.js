import React, { Component, PureComponent } from 'react'
class App extends PureComponent {
      state = {
        items: [1, 2, 3]
      }
      handleClick = () => {
        const { items } = this.state
        // items.pop()
        this.setState({ 
			items
		})
      }
      render () {
        return (<div>
          <ul>
            {this.state.items.map(i => <li key={i}>{i}</li>)}
          </ul>
          <button onClick={this.handleClick}>delete</button>
        </div>)
      }
    }

export default App;