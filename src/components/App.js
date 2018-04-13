import React, {Component} from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodoContainer from '../containers/AddTodoContainer'
import Footer from '../components/Footer'
class App extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <AddTodoContainer />
            <VisibleTodoList />
                <Footer />
                </div>
        )
    }

}

export default App