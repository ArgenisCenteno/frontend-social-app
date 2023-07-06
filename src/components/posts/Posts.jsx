import {  useQuery } from 'react-query';
import {makeRequest} from '../../axios.js'
import  Post   from './Post';
import './posts.scss';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext.js';
 
const Posts = () => {
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const { isLoading, error, data }  = useQuery(["posts"], ()=>
  makeRequest.get("/posts").then((res) =>{
 
    return res.data;
      
  } )
);
 
   return <div className="posts">
      {error ? "Lo sentimos, algo ha salido mal" 
      :isLoading 
      ? <CircularProgress color="secondary" />
      :data.map(post=>(<Post post={post} key={post.id}/>
      )) }
    </div>;
}

export default Posts; 