
function Intern(props){
    const { name, address, num, email } = props;
    return <div className="card">
                <h2 className="cardName">Name:{name}</h2>
                <h2 className="cardAddress">Address:{address}</h2>
                <h2 className="cardNumber">Number:{num}</h2>
                <h4 className="cardEmail"><h2>Email:</h2><li>{email[0]}</li> <li>{email[1]}</li></h4>


        
            </div>
}

export default Intern;