import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {makeRequest} from '../../axios.js'
import "./comments.scss";
import moment from "moment";
import { CircularProgress } from "@mui/material";

const Comments = ({postId}) => {
  const [description, setDescription] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ description, postId });
    setDescription("");
  };
  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input type="text" placeholder="Escribe un comentario" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button onClick={handleClick}>Comentar</button>
      </div>
      {   isLoading ? <CircularProgress  color="secondary" /> : data.map((comment) => (
        <div className="comment">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <div className="info">
          <span>{comment.name}</span>
          <p>{comment.description}</p>
        </div>
        <span className="date">
          {moment(comment.createdAt).fromNow()}
        </span>
      </div>
      ))} 
    </div>
  );
};

export default Comments;