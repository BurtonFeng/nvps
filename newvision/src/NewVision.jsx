import React, {Component} from 'react';
import students from "./students.json";

class NewVision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            thresholdData: [],
            threshold: 66
        };

        this.updateResults = this.updateResults.bind(this);
    }

    componentDidMount() {
        // Mounted, populate our data with the students
        this.setState({data: students});
    }

    updateResults(e) {
        // Empty the array to repopulate to reflect updated threshold values
        var temp = []
        
        // Loop through data and find student's whose attendance rate is equal or lower than the threshold
        for(var student in this.state.data) {
            if(this.state.data[student].attendancePercentage <= this.state.threshold)
                temp.push(this.state.data[student]);
        }

        // Update the state
        this.setState({thresholdData : temp});
    }

    render() {
        return(
            <div>
                <h1>New Vision for Public Schools</h1>
                <hr />

                <button onClick={this.updateResults}>test</button>
                
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.thresholdData.map(item => (
                                <tr key={item.studentId}>
                                    <th scope="row">{item.studentId}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.attendancePercentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default NewVision;