import React, {Component} from 'react';
import students from "./students.json";

class NewVision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            threshold: 0
        };
    }

    componentDidMount() {
        console.log(students);
    }

    render() {
        return(
            <div>test</div>
        )
    }
}

export default NewVision;