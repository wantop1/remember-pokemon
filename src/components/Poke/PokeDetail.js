import { useParams } from "react-router-dom";

const PokeDetail = () => {
    const params = useParams();
    
    return(
        <div>{params.id}</div>
    )
};

export default PokeDetail;