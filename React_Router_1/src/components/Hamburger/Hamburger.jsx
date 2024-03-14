import "../Hamburger/Hamburger.css";
export default function ({ extended, setExtended }) {
  return (
    <>
      <div
        onClick={() => {
          setExtended(!extended);
        }}
        id="menuToggle"
        style={{
          width: "80px",
        }}
      >
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div id="menu"></div>
      </div>
    </>
  );
}
