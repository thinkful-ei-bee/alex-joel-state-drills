import React, {Component} from 'react';

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
        const listItems = this.props.sections.map((section,index)=>
                (
                    <li>
                        <button onClick={() => this.handleButtonClick(index)}>
                            {section.title}
                        </button>
                        {thisSection===index && <p>{section.content}</p>}
                    </li>
                ))
        return(
            <ul className=''>
               {listItems}
            </ul>
        )
    }
};

export default Accordion;