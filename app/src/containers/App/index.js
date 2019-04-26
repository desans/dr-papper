import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'


// Components
import MenuBar from "../../components/MenuBar"
import NavigationBar from "../../components/NavigationBar"
import TagBar from '../../components/TagBar'

// Containers
import PapperBoard from "../PapperBoard"

// Test Code
import Test from "../../components/Tests"

const INITIAL_STATE = {
    "boardMode": "to-read",
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE,
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationBar />
                    <MenuBar />
                    <TagBar />
                    <PapperBoard />
                </div>
                <hr/>
                <div>
                    <Test/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;