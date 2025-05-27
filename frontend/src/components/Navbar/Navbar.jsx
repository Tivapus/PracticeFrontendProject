import "./NavStyles.css";

function Navbar() {
  return (
    <section id="navbar">
        <div className="-logo">
            <div className="-logo-text">Internship</div>
        </div>
        <div className="-end">
            <div className="-company">Company</div>
            <div className="-profile">
                <img src = "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt = "" />
            </div>
        </div>
    </section>
  )
}

export default Navbar