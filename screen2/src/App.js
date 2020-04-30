import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css'

/* Edit these lines to reflect your IoT platform config. */

class App extends Component{
 

    constructor(props){
      super(props);
      this.state ={
        message: ""
      }
      var databaseConfig = {
        apiKey: "AIzaSyCv3rnRNfUOEBh5Ol1ZiGwXr6pD9cRotYU",
        authDomain: "msg-dlb.firebaseapp.com",
        databaseURL: "https://msg-dlb.firebaseio.com",
        projectId: "msg-dlb",
        storageBucket: "msg-dlb.appspot.com",
        messagingSenderId: "58422300991",
        appId: "1:58422300991:web:217d5889656b004a85c38a",
        measurementId: "G-B9KDZXM7JZ"
      };
      if(!firebase.apps.length){
      firebase.initializeApp(databaseConfig);
      }
      this.db = firebase.database().ref('message');
     // this.db.on('value', gotData, gotErr);
    }
      
      componentDidMount(){
        try{
          this.db.on('value', data =>{
          var m = Object.values(data.val())
          this.setState({
              message: m
          })
      })
    }catch(error){
      console.log("error")
      console.log(error)
    }
    }
    /*  gotDat =(data)=>{
        //console.log(data.val())
        var message = data.val();
       /* for (let [key,value] of Object.entries(message)){
          console.log(` ${value}`)
          let msg = ` ${value}`;
          //return msg;
        }*/
       /* var m= Object.values(message);
        console.log(m)
        this.setState({
          message: m
        })
      }
      gotErr = (err)=>{
        console.log("error")
        console.log(err)*/
      
render(){
  return(
    <div className="App">
      <header className="App-header">
            <h2>Display</h2>      
        <div className="screen">
        
        <div id="text">{this.state.message}</div>
        
        </div>
        </header>
    </div>

  )
}
}

export default App;


