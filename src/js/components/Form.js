import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

function ConnectedForm(props) {
    const [state, setState] = useState({ title: '' })
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       title: ""
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    function handleChange(event) {
        setState({ [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addArticle(state);
        setState({ title: "" });
    }

    // const { title } = state;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={state.title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
}
// function mapDispatchToProps(dispatch) {
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     };
// }
const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;
