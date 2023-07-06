import  Posts   from '../../components/posts/Posts'
import Share from '../../components/share/Share'
import   Stories  from '../../components/stories/Stories'
import Update from '../../components/update/Update'
import './Home.scss'

const Home = () => {

   

  return (
    <div className='home animate__fadeIn'>
       
      <Stories/>
      <Share/>
      <Posts/>
    </div>
   
  )
}

export default Home
