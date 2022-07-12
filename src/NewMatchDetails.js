const NewMatchDetail = () => {
  const styler = {
    color: 'Green',
    border: 'solid',
    marginLeft: 135,
    marginRight: 135
  }

    return (
      <div className="NewMatchDetail">
        <h1 style={styler}>Add Match Details</h1>
        <form className="FormMatchDetail">
          <div className="fteam">
            <label name="fteam">Enter the first team name: </label>
            <select for="fteam">
              <option>Targaryens</option>
              <option>Lennisters</option>
              <option>Starks</option>
            </select>
          </div>
          <div className="steam">
            <label name="steam">Enter the second team name: </label>
            <select for="steam">
              <option>Targaryens</option>
              <option>Lennisters</option>
              <option>Starks</option>
            </select>
          </div>
        </form>
      </div>
      
      );
}
 
export default NewMatchDetail;