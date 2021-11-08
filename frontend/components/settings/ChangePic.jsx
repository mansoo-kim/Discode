const ChangePic = ({ onFileChange, handleRemove, fileRef, imgSrc, server }) => {

  const abbreviation = server.name.split(" ").map(word => word[0]).join('');
  const img = <img src={imgSrc} />

  const fontSize = abbreviation.length < 4 ? 42 : 24;

  return (
    <div className="icon-group">
      <div className="icon-left">

        <div className="icon-input-wrapper">
          <div className="input-cover" style={{ fontSize }}>
            { imgSrc ? img : abbreviation }
          </div>
          <input type="file" className="icon-input" spellCheck={false} onChange={onFileChange} ref={fileRef} />
        </div>

        { imgSrc && <div className="remove-icon" onClick={handleRemove}>
          Remove
        </div>
        }
      </div>

      <div className="icon-right">
        <div className="upload-button" onClick={() => fileRef.current.click()}>
          Upload Image
        </div>
      </div>
    </div>
  )
}

export default ChangePic
