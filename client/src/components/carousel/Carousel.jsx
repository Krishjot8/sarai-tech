import { useState , useEffect} from "react"
import './Carousel.css';
const images = [

    'src/assets/carousel-images/ai-image-sarai-tech.jpg',
    'src/assets/carousel-images/algorithm-code-sarai-tech.jpg',
    'src/assets/carousel-images/globe-image-sarai-tech.jpg'
];


function Carousel(){

    const [currentIndex, setCurrentIndex] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

},8000);

return()=>clearInterval(interval);
},[])

return (
    <div className="carousel">
        {images.map((image,index) =>(
           <div 
           className={`carousel-item ${index === currentIndex ? 'active': ''}`} 
           key={index}
           >
            <img src={image} alt={`Slide ${index + 1}`} />
            </div>
        ))}
    </div>
  )   
}





export default Carousel