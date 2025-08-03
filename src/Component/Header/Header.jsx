import "./Header.css"
const Header = ()=> {
    return (
        <div className="headercontainer">
            <div className="headercontainer2">
                <div className="logoholder">
                    <a href="logolink">
                        <div className="logorap">
                            <img src="https://thehub.io/_nuxt/img/462d7eb.png" alt="the hub logo" />
                        </div>
                    </a>
                </div>
                <div className="linkholder">
                    <ul className="navbarall">
                        <li className="navitem">
                            <a href="jobs" className="title">
                                <span className="title">Find jobs</span>
                            </a>
                        </li>

                        <li className="navitem">
                            <a href="startups" className="titles">
                                <span className="titles">Browse startups</span>
                            </a>
                        </li>

                        <span className="navbarspace"></span>

                        <li className="navitem">
                            <a href="pricing" className="pricing">
                                <span className="pricing">Pricing</span>
                            </a>
                        </li>

                        <li className="navitem">
                            <a href="scouts" className="scout-link">
                                <span className="scout">Scout</span>
                                <div className="headerbarnew">NEW</div>
                            </a>
                        </li>

                        <li className="navitem">
                            <a href="forstartups" className="forstartups">
                                <span className="forstartup">For Startups</span>
                            </a>
                        </li>

                        <span className="navbarspace"></span>
                    </ul>

                    <ul className="singup">
                        <li className="navitem2">
                            <a href="signup" className="navitem2">
                                <span className="signup">Sign up</span>
                            </a>
                        </li>

                        <li className="navitem2">
                            <a href="login" className="navitem2">
                                <span className="login">Log in</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    );
}

export default Header;