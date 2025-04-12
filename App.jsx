import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Feature from './Component/Feature';
import Testimonials from './Component/Testimonials';
import Pricing from './Component/Pricing';
import Contact from './Component/Contact';
import { Footer } from './Component/Footer';


export default function App() {
  return (
    <div className='min-h-screen  bg-white '>
    <Navbar/>

<div className='pt-16'>
  < Hero/>
  <Feature/>
  <Testimonials/>
  <Pricing/>
  <Contact/>
<Footer/>

</div>

   </div>
  )
} 