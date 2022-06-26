import React from "react";
import './style.css';

const App = () => {
    return (
        <div className="App">
           <Son />
        </div>
    )
};

class Son extends React.Component {
    constructor() {
        super();
        this.num = 0;
    }
    add() {
        this.setState(() => this.num += 1);
    }
    render() {
        return (
            <div className="Son">
                <button onClick={ () => {this.add()} }>+1</button>
                {this.num}
                <Grandson />
            </div>
        );
    } 
}

const Grandson = function() {
    const [num,setNum] = React.useState(5);
    return (
        <div className="Grandson">
            <button onClick={() => setNum(num + 2)}>+2</button>
            {num}
        </div>
    );

}


export default App;