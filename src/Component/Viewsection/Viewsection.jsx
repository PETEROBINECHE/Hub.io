import "./Viewsection.css"
const Viewsection =()=>{
    return(
        <div className="picviewcontainer">
            <div className="picviewrapper">
                <img src="https://thehub.io/_nuxt/img/efa10c4.webp" alt="" className="picviewrapper2" />
            </div>

            <div className="tabviewcontainer">
                <div className="tabviewrapper">
                    <form className="tabviewholder">
                        <div className="tabview">
                            <div className="searchicon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>
                            </div>
                            <div className="inputtab">
                                <input type="text" className="inputtab2" placeholder=" Job title or Keyword"/>
                            </div>
                            <div className="tabview2">
                                <div className="locationicon">
                                    {/* <img src="" alt="" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="12" cy="6" r="4"/><path d="M5 16c-1.25.633-2 1.439-2 2.316C3 20.35 7.03 22 12 22s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316m-7-6v8"/></g></svg>
                                </div>
                                <div className="inputlocation">
                                    <input type="text" name="" className="inputlocation2" placeholder=" City area or select remote" />
                                </div>
                                <div className="buttonholder">
                                    <button className="button">
                                        <span className="eulink"> EU </span>
                                        <i>🔻</i>
                                    </button>
                                </div>
                                <div className="searchbutton">
                                    <button className="searchbutton2">Search
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            

        </div>
    )
}


export default Viewsection;