import React, {Component, Fragment} from 'react';

class AddANewRestaurant extends Component {
    state = {
        restaurant: ""
    };

    handleInputChange = event => {
        this.setState({
            restaurant: event.target.value
        });
    };

    handleFormSave = event => {
        event.preventDefault()
        console.log(this.state.restaurant)
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h4>Please input a restaurant name in order to save/search</h4>
                    <form>
                        <input
                            value={this.state.restaurant}
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <button onClick={this.handleFormSearch}
                            className="btn btn-dark mt-3">Search
                    </button>
                    <button onClick={this.handleFormSave}
                            className="btn btn-dark mt-3">Save
                    </button>
                    <br/> <br/>
                </div>
            </Fragment>
        )
    }
}

export default AddANewRestaurant;
