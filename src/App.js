import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      <div className='modal-container' onClick={this.props.modal}>
        <div className='modal-content'>
          is this a modal?
        </div>
      </div>, this.el
    )
  }
}


class App extends React.Component {
  constructor() {
    super()
    this.state = { showModal: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div className='before-modal'>
        <h1 onClick={this.handleClick}>Click Here!</h1>
        <p>poppin
to get (something) started
let's get shit poppin'</p>
        {this.state.showModal ? <Modal modal={() => this.handleClick()}/> : undefined}
      </div>
    )
  }
}

export default App;
