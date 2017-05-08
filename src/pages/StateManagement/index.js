import React from 'react'
import Code from '../../components/Code'
import PageTitle from '../../components/PageTitle'
import Example from '../../components/Example'
import CounterPlain from './CounterPlain'
import CounterRedux from './CounterRedux'

const Page = (props) => (
  <div>
    <PageTitle text='State Management' />

    <p>
      blah, blah, blah, choose something
    </p>

    <Code language='jsx'>{`/* CounterPlain/index.js */
import React from 'react'

const increment = (state) => ({ count: state.count + 1 })
const decrement = (state) => ({ count: state.count - 1 })

class CounterPlain extends React.Component {
  state = { count: 0 }

  render () {
    return (
      <div>
        <div>{this.state.count}</div>
        <button type='button' onClick={() => this.setState(increment)}>+</button>
        <button type='button' onClick={() => this.setState(decrement)}>-</button>
      </div>
    )
  }
}

module.exports = CounterPlain`}</Code>

    <Example live>
      <CounterPlain />
    </Example>

    <PageTitle text='State management systems' />

    <p>Redux</p>

    <Example live>
      <CounterRedux />
    </Example>

    <p>MobX</p>
  </div>
)

export default Page
