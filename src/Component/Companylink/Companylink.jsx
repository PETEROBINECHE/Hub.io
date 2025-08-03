import "./Companylink.css"

const images = [
  {
    img: "https://thehub.io/_nuxt/img/980a27e.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/ed19541.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/543fef2.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/9e1e551.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/318f8e6.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/6f8be3c.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/05d9597.webp",
  },
  {
    img: "https://thehub.io/_nuxt/img/95abc9e.webp",
  },
];
const Companylink = ()=>{
   return(
        <div className="subpictures-container">
      {images.map((item, idx) => (
        <img
          key={idx}
          src={item.img}
        //   alt={subpicture-`${idx}`}
          className="subpicture"
        />
      ))}
    </div>
   )  
}

export default Companylink;







