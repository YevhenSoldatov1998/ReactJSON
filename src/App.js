import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataJSON: []
    }
  }
  async componentDidMount(){
    const response = await fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName
    %7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
    const data = await response.json()
    this.setState({dataJSON: data})
  }
  handleSort = (str)=>{
    console.log(str)
    console.log(this.state.dataJSON)
    for(let item in this.state.dataJSON){
      console.log(this.state.dataJSON.item)
    }
  }
  render() {
        return (

            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" onClick={this.handleSort.bind(null , 'id')}>ID</th>
                        <th scope="col" onClick={this.handleSort.bind(null , 'address.streetAddress')}>ADDRESS</th>
                        <th scope="col" onClick={this.handleSort.bind(null , 'lastName')}>LAST NAME</th>
                        <th scope="col" onClick={this.handleSort.bind(null , 'email')}>EMAIL</th>
                        <th scope="col" onClick={this.handleSort.bind(null , 'phone')}>PHONE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.dataJSON.map(item => (
                        <tr key={item.id+item.phone}>
                          <th scope="row">{item.id}</th>
                          <td>{item.address.streetAddress}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                        </tr>
                    ))}


                    </tbody>
                </table>
            </div>
        );
    }

}

export default App;
