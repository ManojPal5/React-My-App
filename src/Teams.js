import useFetch from './useFetch';

const TeamsDetails = () => {
    const { data, isPending, error } = useFetch ("https://my-json-server.typicode.com/ManojPal5/demo/teamsdetails");
    const handleMouseEnter = (item, e)=>{
        console.log("Mouse enter in team " + item.id + " named as \"" + item.title +"\"")
        e.target.parentNode.classList.add("Highlighted");
    }

    const handleMouseLeave = (item, e)=>{
        console.log("Mouse left from team " + item.id + " named as \"" + item.title +"\"")
        e.target.parentNode.classList.remove("Highlighted");
    }

    return ( 
        (
            <div className = 'TeamsDetails'>
                <h2> Team Details </h2>
                {isPending && <div>data Loading...</div>}
                {error && <div>{error}</div>}
                {data &&  data.map(item =>(
                    <div className='TeamDetail' key={item.id} onMouseEnter = {(e)=>{handleMouseEnter(item, e)}} 
                                    onMouseLeave = {(e)=>{handleMouseLeave (item, e)}}>
                        <h4>Team Name: {item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        )
     );
}
 
export default TeamsDetails;