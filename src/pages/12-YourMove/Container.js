import { connect } from 'react-redux'
import { addMessage } from './actions'
import MessageBoard from './components/MessageBoard'

const mapStateToProps = (state) => ({ messages: state.messages })
const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard)
