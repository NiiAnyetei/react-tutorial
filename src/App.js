import React, {Component} from "react";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const {characters} = this.state
        
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character]})
    }

    render() {

        const {characters} = this.state

        return (
            <div className='container'>
                <h1>Hello, React!</h1>
                
                <br/>

                <Table charactersData={characters} removeCharacter={this.removeCharacter} />

                <br/>

                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;