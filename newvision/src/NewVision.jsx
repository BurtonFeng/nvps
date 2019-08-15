import React, {Component} from 'react';
import students from "./students.json";

class NewVision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            thresholdData: [],
            threshold: 60
        };

        this.updateResults = this.updateResults.bind(this);
        this.updateThreshold = this.updateThreshold.bind(this);
    }

    componentDidMount() {
        // Mounted, populate our data with the students
        this.setState({data: students}, ()=>this.updateResults());
    }

    updateResults() {
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

    // Threshold value changed, lets update it!
    updateThreshold(e) {
        this.setState({threshold: e.target.value}, ()=>this.updateResults());
    }

    render() {
        return(
            <div>
                <h1>New Vision for Public Schools</h1>
                <hr />

                <div>
                    <label htmlFor="customRange2">Threshold: {this.state.threshold}</label>
                    <br />
                    <input type="range" className="custom-range w-50" min="0" max="100" id="customRange2" value={this.state.threshold} onChange={this.updateThreshold} />
                </div>
                
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Attendance</th>
                                <th scope="col">Home Number</th>
                                <th scope="col">Passed Regents?</th>
                                <th scope="col">Guidance Counselor Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.thresholdData.map(item => (
                                <tr key={item.studentId}>
                                    <th scope="row">{item.studentId}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.attendancePercentage}</td>
                                    <td>{item.homePhoneNumber}</td>
                                    <td>{String(item.hasPassedRegents)}</td>
                                    <td>{item.guidanceCounselorEmail}</td>
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