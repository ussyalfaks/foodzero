import BlogHeader from "../components/blog/BlogHeader";
import HeroBlog from "../components/blog/HeroBlog";
import BlogText from "../components/blog/BlogText";
import  Post from "../components/blog/Post";
 import Footer from "../components/Footer";
const ColumnPage = () =>{
  return (
    <>
        <BlogHeader /> 
        <HeroBlog/>
        <BlogText/> 
         <Post/>  
       <Footer/>  
    
    </>
  )
}

export default ColumnPage
