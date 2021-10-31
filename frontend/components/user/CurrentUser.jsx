import { connect } from 'react-redux'

const CurrentUser = ({ currentUser }) => {
  return (
    <div>
      { currentUser.username }
      #{ currentUser.tag }
    </div>
  )
}

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP)(CurrentUser);
