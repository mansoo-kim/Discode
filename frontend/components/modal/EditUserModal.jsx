import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EditUserModal = ({ type, userErrors, currentUser, closeModal, updateUser, resetUserErrors }) => {
  const { register, formState: { errors, isDirty }, handleSubmit, getValues } = useForm({
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
    defaultValues: { username: currentUser.username, email: "", password: "" }
  });

  useEffect(() => {
    return () => resetUserErrors();
  }, [])

  const checkThenSubmit = (e) => {
    if ((!isDirty && type ==='username') || (type === 'email' && getValues("email") === currentUser.email)) {
      e.preventDefault();
      closeModal();
    } else {
      handleSubmit(onSubmit)(e);
    }
  }

  const onSubmit = (data) => {
    const user = type === 'username' ? {
      username: data.username,
      password: data.password,
      email: currentUser.email
    } : {
      username: currentUser.username,
      password: data.password,
      email: data.email
    }
    updateUser(currentUser.id, user)
      .then(
        () => closeModal())
  }

  const inputToChange = type === 'username' ? (
    <div>
      <label>USERNAME { errors.username?.message } { userErrors.username }</label>
      <input type="text" {...register("username", { required: "- This field is requred" })} /> #{currentUser.tag}
    </div>
  ) : (
    <div>
      <label>EMAIL { errors.email?.message } { userErrors.email }</label>
      <input type="text" {...register("email", { required: "- This field is requred" })} />
    </div>
  )

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form onSubmit={checkThenSubmit}>
        { type === 'username' ? <h2>Change your username</h2> : <h2>Enter an email address</h2> }
        <p>Enter a new {type === 'username' ? "username" : "email address"} and your existing password.</p>

        { inputToChange }

        <div>
          <label>CURRENT PASSWORD { userErrors.password }</label>
          <input type="password" {...register("password")} />
        </div>
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
