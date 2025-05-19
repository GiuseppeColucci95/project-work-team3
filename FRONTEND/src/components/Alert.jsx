import { useState } from "react";

//component export
export default function Alert({ message, setIsAlerts }) {

  const [alertData, setAlertData] = useState('');

  function closeAlert() {
    setAlertData('');
    setIsAlerts(false);
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