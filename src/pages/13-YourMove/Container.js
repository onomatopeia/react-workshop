import { connect } from 'react-redux'
import { addMessage } from './actions'
import MessageSender from './components/MessageSender'

const mapStateToProps = (state) => ({ messages: state.messages })
const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageSender)
