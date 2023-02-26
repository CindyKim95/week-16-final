// This will allow to submit and display what is typed in input value
// This comment-section.js is not used
import React from "react";

export default class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.displayData = [];

        this.state = {
            showReview: this.displayData,
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.appendReview = this.appendReview.bind(this);
    }

    appendReview() {
        this.displayData.push(<div className='display-review'><p>{this.state.inputValue}</p></div>);
        this.setState ({
            showReview: this.displayData,
            inputValue: ''
        });
    }

    handleChange(event) {
        let getTextAreaValue = event.target.value;
        this.setState({
            inputValue: getTextAreaValue
        });
    }

    handleSubmit(event) {
        const inputVal = this.state.value;
        inputVal.value = '';
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <h6>Write A Comment Below</h6>

                    <input value={this.state.inputValue} onChange={this.handleChange}></input>
                    
                    <button type='button' className="btn btn-dark" id='submit-btn' onClick={this.appendReview}>Submit</button>
                    
                    <div className='display-review'>{this.displayData}</div>
                </form>
            </div>
            
        );
    }
}