import React, {Component} from 'react'
import ButtonContainer from '../containers/ButtonContainer'
class Footer extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
           <div>
               show:
               <ButtonContainer filter="SHOW_ALL" >all</ButtonContainer>
               <ButtonContainer filter="SHOW_ACTIVE" >active</ButtonContainer>
               <ButtonContainer filter="SHOW_COMPLETED">completed</ButtonContainer>
           </div>
        )
    }

}

export default Footer
