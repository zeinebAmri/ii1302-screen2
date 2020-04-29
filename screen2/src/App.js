import React, { Component } from 'react';
import firebase from 'firebase';


/* Edit these lines to reflect your IoT platform config. */

class app extends Component{
 
    constructor(props){
      super(props);
      const databaseConfig = {
        apiKey: "AIzaSyCv3rnRNfUOEBh5Ol1ZiGwXr6pD9cRotYU",
        authDomain: "msg-dlb.firebaseapp.com",
        databaseURL: "https://msg-dlb.firebaseio.com",
        projectId: "msg-dlb",
        storageBucket: "msg-dlb.appspot.com",
        messagingSenderId: "58422300991",
        appId: "1:58422300991:web:217d5889656b004a85c38a",
        measurementId: "G-B9KDZXM7JZ"
      };
    
      this.app = firebase.initializeApp(databaseConfig);
      this.db = this.app.database().ref().child('msg');
      
      this.state ={
        message: ""
      }
    }
    componentDidMount(){
      this.db.on('message', send=>{
        this.setState({
          message: send.val()
        })
      });
/*componentWillMount(){
setInterval(() => {
  device.Push('getMessage');
  var msg = device.getCurrentMessage()
  this.setState({
    message: msg
  })
}, 5000);
*/
}
render(){
  return(
    <React.Fragment>
    <div className="App">
      <header className="App-header">
      <p>display</p>
        <div className="screen">
        
        <div id="text">{this.state.message}</div>
        </div>
      </header>
    </div>
    </React.Fragment>
  )
}
}

export default app;


