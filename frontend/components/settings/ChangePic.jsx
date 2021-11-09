const ChangePic = ({ onFileChange, handleRemove, fileRef, imgSrc, imageable, type }) => {

  const abbreviation = imageable.name?.split(" ").map(word => word[0]).join('');
  const fontSize = abbreviation?.length < 4 ? 42 : 24;
  const img = <img src={imgSrc} />

  const usingDefault = imgSrc === 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png';

  return (
    <div className="icon-group">
      <div className="icon-left">

        <div className="icon-input-wrapper">
          <div className={`input-cover ${usingDefault ? 'default' : ''}`} style={{ fontSize }} onClick={() => fileRef.current.click()}>
            { imgSrc ? img : abbreviation }
          </div>
          <input type="file" accept=".jpg,.jpeg,.png,.gif" className="icon-input" spellCheck={false} onChange={onFileChange} ref={fileRef} />
        </div>

        { imgSrc && !usingDefault && <div className="remove-icon" onClick={handleRemove}>
          Remove
        </div>
        }
      </div>

      <div className="icon-right">
        <div className="upload-button" onClick={() => fileRef.current.click()}>
          { type ==="server" ? "Upload Image" : "Change Avatar" }
        </div>
      </div>
    </div>
  )
}

export default ChangePic
