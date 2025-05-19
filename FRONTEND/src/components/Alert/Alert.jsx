//import css
import "./alertStyle.css"

//component export
export default function Alert({ message, setIsAlerts }) {

  function closeAlert() {
    setIsAlerts(false);
  }

  return (
    <>
      <div className="alert-container">
        <div className={`alert alert-primary d-flex justify-content-between align-items-center`}>
          {message}
          <i className="bi bi-x" onClick={closeAlert}></i>
        </div>
      </div>
    </>
  );
}