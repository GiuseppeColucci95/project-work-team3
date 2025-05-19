//component exports
export default function Loader() {

  //template
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h3 className="pb-5" style={{ color: "rgb(35, 25, 0)" }}>Your payment is being processed... 😌</h3>
      <div
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
      <video
        src="/video/payment-loader.mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left" // aggiungi questa riga
        }}
      />
      </div>
    </div>
  );
}