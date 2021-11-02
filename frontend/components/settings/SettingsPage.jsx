import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SettingsPage = ({ toggleSettings, subject, type, updateSubject, deleteSubject, history }) => {
  if (!subject) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { subjectName: subject.name }
  });

  const [showRed, setShowRed] = useState(false);
  const watchName = watch("subjectName");

  const handleDelete = () => {
    deleteChannel(channel.id)
    .then(() => {
      if (history.location.pathname !== `/channels/${subject.serverId}`) history.push(`/channels/${channel.serverId}`)
    })
    .then(() => toggleSettings(null))
  }

  const checkThenExit = () => {
    if (isDirty) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const onSubmit = (data) => (
    updateSubject(subject.id, { name: data.subjectName})
      .then(() => {
        setShowRed(false);
        reset({ subjectName: watchName});
      })
  );

  const prompt = (
    <div className={`save-prompt ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!
      <button onClick={() => {
        setShowRed(false);
        reset();
      }}>
        Reset
      </button>
      <button>Save Changes</button>
    </div>
  )

  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          # { watchName }
          <ul>
            <li>
              Overview
            </li>
            <li onClick={handleDelete}>
              Delete Channel
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          <h2>OVERVIEW</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label>CHANNEL NAME { errors.subjectName?.message }</label>
              <input type="text" placeholder={subject.name} {...register("subjectName", { required: "This field is required" })} />
            </div>

          { isDirty && prompt }
          </form>

        </div>
      </div>

      <div className="close-settings">
        <button onClick={checkThenExit}>X</button>
      </div>
    </div>
  )
}

export default SettingsPage;
