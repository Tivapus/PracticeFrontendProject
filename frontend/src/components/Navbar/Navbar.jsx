import "./NavStyles.css";

function Navbar() {
  return (
    <section id="navbar">
        <div className="-logo">
            <div className="-logo-text">Internship</div>
        </div>
        <div className="-end">
            <div className="-company">Company</div>
            <div className="-profile">Profile</div>
        </div>
    </section>
  )
}

export default Navbar