import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{

//constructor(props){
   // super(props); // super is reference for  parent constructor functions

   // this.state={ lat:null,errorMessage:''}; //That is state object. It's going to eventually contain some different pieces of data some different properties that are very important and relevant to our component that we're putting together. So like I mentioned previously Right now the most relevant piece of data that we have is our latitude. So we might want to initialize our state object to include a property called Latitude.
  // }

state={lat:null,errorMessage:''}; //b/c babel can use and initialize constructor for us. its equivalent to the constructor


componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position=> this.setState({lat:position.coords.latitude}),            //we call setstate to update our set object. its a func which put on app comp automatically when we extended react.component 

           
        err=>this.setState({errorMessage:err.message})
        
    );
}

renderContent(){  //helper function
    if(this.state.errorMessage && this.state.lat){
        return <div>Error:{this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage&& this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>  // so we are taking property from state of app component and passing as prop down into season display. so we take state from one component and pass as a prop down as child 

    }
    return <Spinner message="please accept location request"/>;

}

    render(){
      return <div className="border red">{this.renderContent()}</div>;
            
        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));