import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';

const EditUserModal = ({ type, userErrors, currentUser, closeModal, updateUser, resetUserErrors }) => {

  const handleEscapeExit = (e) => {
    console.log("checking escape modal")

    if (e.keyCode === 27) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      console.log("in escape modal")
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeExit);
    return () => document.removeEventListener("keydown", handleEscapeExit);
   });

  const { register, formState: { errors, isDirty }, handleSubmit, getValues } = useForm({
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
    defaultValues: { username: currentUser.username, email: "", password: "" }
  });

  useEffect(() => {
    return () => resetUserErrors();
  }, [])

  const checkThenSubmit = (e) => {
    e.preventDefault();
    if ((!isDirty && type ==='username') || (type === 'email' && getValues("email") === currentUser.email)) {
      closeModal();
    } else {
      handleSubmit(onSubmit)(e);
    }
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("user[password]", data.password);
    if (type === "username" ) {
      formData.append("user[username]", data.username);
    } else {
      formData.append("user[email]", data.email);
    }
    updateUser(currentUser.id, formData)
      .then(
        () => closeModal())
  }

  const inputToChange = type === 'username' ? (
    <>
      <label className={`${errors.username || userErrors.username ? 'show-errors' : ''}`}>
        USERNAME <span>{ errors.username?.message } { userErrors.username }</span>
      </label>
      <div className="username-input">
        <input type="text" spellCheck={false} autoFocus className="text-input" {...register("username", { required: "- This field is requred",
          minLength: {
            value: 2,
            message: "- Must be between 2 and 32 in length"
          },
          maxLength: {
            value: 32,
            message: "- Must be between 2 and 32 in length"
          }
        })} />
        <div className="tag">
          #{currentUser.tag}
        </div>
      </div>
    </>
  ) : (
    <>
      <label className={`${errors.email || userErrors.email ? 'show-errors' : ''}`}>
        EMAIL <span>{ errors.email?.message } { userErrors.email }</span>
      </label>
      <input type="email" spellCheck={false} autoFocus className="text-input" {...register("email", { required: "- This field is requred" })} />
    </>
  )

  return (
    <div className="modal">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={checkThenSubmit}>

        <div className="modal-header">
          <h2>{ type === 'username' ? "Change your username" : "Enter an email address" }</h2>
          <p>Enter a new {type === 'username' ? "username" : "email address"} and your existing password.</p>
        </div>

        <div className="modal-content">

          { inputToChange }

          <div className="user-modal-spacer"></div>

          <label className={`${userErrors.password ? 'show-errors' : ''}`}>
            CURRENT PASSWORD <span>{ userErrors.password }</span></label>
          <input type="password" className="text-input" {...register("password")} />

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button blue-button">
            <div>Done</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { updateUser, resetUserErrors } from '../../actions/user_actions';

const mSTP = (state) => ({
  userErrors: state.errors.user,
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  resetUserErrors: () => dispatch(resetUserErrors())
});

export default connect(mSTP, mDTP)(EditUserModal);
