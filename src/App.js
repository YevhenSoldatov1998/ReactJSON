import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash/lodash.min'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataJSON: [],
            show: null
        }
    }

    async componentDidMount() {
        const response = await fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName
    %7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
        const data = await response.json()

        this.setState({
            dataJSON: data,
            sort: 'ask'
        })
    }

    handleSort = (str) => {
        let {sort, dataJSON} = this.state

        if (str === 'id') {
            let dataID = sort == 'desk' ?
                (dataJSON.sort((a, b) => a.id > b.id ? 1 : -1))
                : (dataJSON.sort((a, b) => a.id < b.id ? 1 : -1))
            this.setState({
                dataJSON: dataID,
                sort: sort == 'desk' ? "asc" : "desk"
            })

        } else if (str === 'address.streetAddress') {
            let dataID = sort == 'desk' ?
                (dataJSON.sort((a, b) => a.address.streetAddress > b.address.streetAddress ? 1 : -1))
                : (dataJSON.sort((a, b) => a.address.streetAddress < b.address.streetAddress ? 1 : -1))
            this.setState({
                dataJSON: dataID,
                sort: sort == 'desk' ? "asc" : "desk"
            })
        } else if (str === 'lastName') {
            let dataID = sort == 'desk' ?
                (dataJSON.sort((a, b) => a.lastName > b.lastName ? 1 : -1))
                : (dataJSON.sort((a, b) => a.lastName < b.lastName ? 1 : -1))
            this.setState({
                dataJSON: dataID,
                sort: sort == 'desk' ? "asc" : "desk"
            })
        } else if (str === 'email') {
            let dataID = sort == 'desk' ?
                (dataJSON.sort((a, b) => a.email > b.email ? 1 : -1))
                : (dataJSON.sort((a, b) => a.email < b.email ? 1 : -1))
            this.setState({
                dataJSON: dataID,
                sort: sort == 'desk' ? "asc" : "desk"
            })
        } else if (str === 'phone') {
            let dataID = sort == 'desk' ?
                (dataJSON.sort((a, b) => a.phone > b.phone ? 1 : -1))
                : (dataJSON.sort((a, b) => a.phone < b.phone ? 1 : -1))
            this.setState({
                dataJSON: dataID,
                sort: sort == 'desk' ? "asc" : "desk"
            })
        }
    }
    handleShow(){
        let {show, dataJSON} = this.state
        console.log(show,dataJSON)
        if(show > dataJSON.length){
            this.setState({
                show: 5

            })
        }
        else{
            this.setState({
                show: this.state.show + 5
            })
        }


    }
    render() {
        return (

            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" onClick={() => this.handleSort('id')}>ID <span>{this.state.sort}</span></th>
                        <th scope="col" onClick={() => this.handleSort('address.streetAddress')}>ADDRESS</th>
                        <th scope="col" onClick={() => this.handleSort('lastName')}>LAST NAME</th>
                        <th scope="col" onClick={() => this.handleSort('email')}>EMAIL</th>
                        <th scope="col" onClick={() => this.handleSort('phone')}>PHONE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.dataJSON.map((item, index) => {
                        if (index > this.state.show) {
                            return false
                        }
                        else {
                            return (

                                <tr key={item.id + item.phone}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.address.streetAddress}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        }

                    })}

                        <button onClick={this.handleShow.bind(this)}>Show 5 items</button>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default App;
