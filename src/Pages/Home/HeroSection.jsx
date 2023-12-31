export default function  HeroSection() {
return(

    <section id="heroSection" className="hero--section">
<div className="hero--section--content--box">
    <div className="hero--section--content">
     <p className="section--title">Hey, here is Messi</p>
     <h1 className="hero--section--title">
        <span className="hero--section--title--color">Professional</span>{""}
        <br />
        Footballer
     </h1>
     <p className="hero--section-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing.
     </p>

    </div >
    <button className="btn btn-primary">Get In Touch</button>
</div>
<div className="hero--section--img"><img src="./img/messi_img.png" alt="Hero Section" /></div>
    </section>
)
}