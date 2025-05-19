import { useState } from "react";

//component export
export default function Alert() {

  const [alertData, setAlertData] = useState('');

  function closeAlert() {
    setAlertData('');
  }

  return (
    <>
      <div className="alert-container">
        <div className={`alert`}>
          {message}
          <i class="bi bi-x" onClick={closeAlert}></i>
        </div>
      </div>
    </>
  );
}