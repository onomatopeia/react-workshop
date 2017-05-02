import React from 'react'
import './styles.css'

class Code extends React.Component {
  componentDidMount () {
    if (window.Prism) {
      window.Prism.highlightElement(this.code)
    }
  }

  render () {
    const language = this.props.language ? `language-${this.props.language}` : ''

    return (
      <pre className={'Pre ' + language} ref={(ref) => (this.code = ref)}>
        <code className='Code'>{this.props.children}</code>
      </pre>
    )
  }
}

export default Code
