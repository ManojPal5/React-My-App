import useFetch from "./useFetch";
import {useNavigate} from 'react-router-dom';

const MatchesDetails = () => {
    const { data, isPending, error } = useFetch ("http://localhost:8000/matches");
    const navigate = useNavigate();

    const handleAddMatchDetail = ()=>{
        console.log("We can add match details here");
        navigate("../AddMatchDetail");
    }

    return (    
        <div>        
            <div className='matchesdetails'>
                <h2>Matches Details: </h2>
                {isPending && <div>Data Loading...</div>}
                {error && <div>{error}</div>}
                {data  && data.map((item)=>(
                    <div className ='matchDetail' key={item.id}>
                        <h4>Match {item.id}: {item.title} :</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='AddMatchDetails'>
                    <button onClick={()=>{handleAddMatchDetail()}}>Add Match Detail</button>
            </div>
        </div>
    );
}
 
export default MatchesDetails;