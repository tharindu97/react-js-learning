import React from "react";

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

 
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                This is: {this.state.date.toISOString()}
            </div>
        )
    }

}

export default Clock;