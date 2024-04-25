import {useNavigate, useParams} from "react-router-dom"

export default function Posts() {
    const navigate = useNavigate();
    const params = useParams();

    console.log(params, 'params');

    
    return(
        <div>Posts</div>
    )
}