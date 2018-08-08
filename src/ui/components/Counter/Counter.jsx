import React, { Component } from 'react'

import s from './Counter.module.css'


export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    const { counter } = this.state
    this.setState({
      counter: counter + 1,
    })
  }

  render() {
    const { counter } = this.state
    return (
      <h3 className={s.counter}>Counter: {counter}</h3>
    )
  }
}
