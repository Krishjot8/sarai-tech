import './Home.css'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    
   <div>
<Carousel/>
  
   <div className="intro-page">
 <h2 className="heading">Why Sarai Tech?</h2>
 <div className="intro-paragraph">
 At Sarai Tech, we pride ourselves on being a versatile, forward-thinking technology
 consultancy dedicated to empowering your business with innovative 
 solutions. Our team of skilled consultants
  specializes in a wide array of services, 
  including mobile application development, 
  artificial intelligence solutions, cloud services,
   and comprehensive programming work tailored to 
   your needs. Whether you’re looking to develop a
    robust mobile app to expand your digital 
    presence, harness the power of AI to optimize
     operations, or migrate to efficient cloud 
     platforms, we’ve got you covered. Our goal 
     is to provide strategic guidance, technical 
     expertise, and seamless execution to help your
      business stay ahead of the curve. By partnering
       with Sarai Tech, you gain access to a 
       dedicated team that collaborates closely with
        you, ensuring that every solution is 
        customized, scalable, and future-ready. No 
        matter how complex or unique your 
        technological challenge is, we are here to 
        make it achievable. At Sarai Tech, your
         vision drives our innovation, and your 
         success is our mission.
         </div>
 </div>
   </div>
  )
}

export default Home