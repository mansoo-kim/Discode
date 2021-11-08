const ChangePic = ({ onFileChange, handleRemove, fileRef, imgSrc, imageable, type }) => {
  let img;
  let style;
  let abbreviation;

  if (type === "server") {
    abbreviation = imageable.name.split(" ").map(word => word[0]).join('');
    const fontSize = abbreviation.length < 4 ? 42 : 24;
    style = { fontSize }
    img = <img src={imgSrc} />
  } else {
    const imgSize = (imgSrc === 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png') ? {height: 45, width: 60} : {}
    img = <img src={imgSrc} style={imgSize}/>
  }

  return (
    <div className="icon-group">
      <div className="icon-left">

        <div className="icon-input-wrapper">
          <div className="input-cover" style={style}>
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
          { type ==="server" ? "Upload Image" : "Change Avatar" }
        </div>
      </div>
    </div>
  )
}

export default ChangePic
