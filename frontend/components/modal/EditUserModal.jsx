import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EditUserModal = ({ userErrors, currentUser, closeModal, updateUser, resetUserErrors }) => {
  const { register, formState: { errors, isDirty }, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { username: currentUser.username, password: "" }
  });

  useEffect(() => {
    return () => resetUserErrors();
  }, [])

  const checkThenSubmit = (e) => {
    if (!isDirty) {
      e.preventDefault();
      closeModal();
    } else {
      handleSubmit(onSubmit)(e);
    }
  }

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      password: data.password,
      email: currentUser.email
    }
    updateUser(currentUser.id, user)
      .then(
        () => closeModal())
  }

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form onSubmit={checkThenSubmit}>
        <h2>Change your username</h2>
        <p>Enter a new username and your existing password.</p>

        <label>USERNAME { errors.username?.message } { userErrors.username }</label>
        <input type="text" {...register("username", { required: "- This field is requred" })} /> #{currentUser.tag}

        <label>CURRENT PASSWORD { userErrors.password }</label>
        <input type="password" {...register("password")} />

        <button>Done</button>
      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUser, resetUserErrors } from '../../actions/user_actions';

const mSTP = (state) => ({
  userErrors: state.errors.user,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  resetUserErrors: () => dispatch(resetUserErrors())
});

export default connect(mSTP, mDTP)(EditUserModal);
