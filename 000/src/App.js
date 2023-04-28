import Navbar from './Companents/Navbar'
import UserList from './Companents/UserList';

import React, { Component } from 'react'
import Search from './Companents/Search';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading:false,
       users:[]
    }
  }

 searchUsers=(keyword)=>{
  this.setState({loading:true});
  fetch("https://api.github.com/search/users?q="+keyword)
  .then(response=>response.json())
  .then(data=>this.setState({users:data.items,loading :false}),1000);
 }
  render() {
    
    return (
      <>
    <Navbar  />
    <Search searchUsers={this.searchUsers}/>
    <div className='container mt-3'>
    <UserList users={this.state.users} loading={this.state.loading}/>
    </div>
    
    </>
    );
   
  }
}

export default App
