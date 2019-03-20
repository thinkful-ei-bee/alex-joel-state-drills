import React, {Component} from 'react';
import './Accordion.css';

class Accordion extends Component{

    state={
        currSection:null,
    }

    handleButtonClick= (index) => {
        //console.log(index);
        this.setState({
            currSection:index,
        })
    }

    render(){
        const thisSection = this.state.currSection;
        //console.log(this.props.sections);
        let listItems;
        if(this.props.sections===undefined){
            listItems='';
        }
        else{
            listItems = this.props.sections.map((section,index)=>
                (
                    <li key={index}>
                        <button onClick={() => this.handleButtonClick(index)}>
                            {section.title}
                        </button>
                        {thisSection===index && <p>{section.content}</p>}
                    </li>
                ))
        }
        
        return(
            <ul className='listOfSections'>
               {listItems}
            </ul>
        )
    }
};

export default Accordion;