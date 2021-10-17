import React from 'react';

class FormCreation extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: ' '
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //<input type="text" name="nickname" />

    handleSubmit(event){
        event.preventDefault();
        let response =fetch("http://localhost:8000/game/",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "accept": "application/json", 
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                    },

                body: JSON.stringify(this.state)
            }).then(data => console.log(data));
        
        response = fetch("http://localhost:8000/game/")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            });

        console.log(response);
        alert('A name was submitted: ' + this.state.matchName);
       
    }

    handleChange(event){
        this.setState({name: event.target.value});
        
        
}

render(){
    return(
        <div className = "FormCreation">
            <h1> Create new match</h1>
            <form  onSubmit = {this.handleSubmit}>
                <label>
                    Match name:
                    <input type="text" 
                            name="matchName" 
                            value = {this.state.value}
                            onChange={this.handleChange}
                              />
                </label>
                <label>
                    Nickname:
                </label>
                
                <button type ="submit" value="Submit"> Start Game </button>
            </form>
        </div>
    );
    }
}




export default FormCreation;