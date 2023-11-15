import React, { useState } from 'react';


const InfoContainer = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="info-container">
          <p className="moving-text" >PAGOS CONTRAENTREGA</p>
          <button id="buttonClose"onClick={handleClose}>&times;</button>
        </div>
      )}
    </>
  );
};

export default InfoContainer;