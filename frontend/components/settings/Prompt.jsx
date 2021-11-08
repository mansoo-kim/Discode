const Prompt = ({ promptBackground, handleReset, handleSubmit }) => {
  return (
    <div style={{ background: promptBackground }} className={`save-prompt`}>
      Careful - you have unsaved changes!

      <div className="buttons">
        <div className="button reset" type="button" onClick={handleReset}>
          Reset
        </div>

        <div className="button save">
          <div className="inner-save" type="button" onClick={handleSubmit}>Save Changes</div>
        </div>
      </div>
    </div>
  )
}

export default Prompt
