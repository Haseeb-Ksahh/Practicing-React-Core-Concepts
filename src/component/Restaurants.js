import { useParams } from "react-router-dom";


const Restaurants = () => {

    const {id} = useParams()

    return(
        <h1>Restaurant component...id id = {id}</h1>
    )
}

export default Restaurants;