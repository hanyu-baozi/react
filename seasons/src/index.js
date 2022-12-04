import React from 'react';
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// import Spinner  from './Spinner';
class App extends React.Component {

    state= { lat:null,errorMessage: '' };

    componentDidMount(){//组件挂载后立即调用
        // this.state.lat = 37;
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude }),//显示纬度
                // this.state.lat = position.coords.latitude 
            err =>this.setState({errorMessage:err.message})
        );
    }

    renderContent() {//更新后立即调用
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
        } 

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')

)