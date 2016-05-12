import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'WolfgangHall',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+
            this.props.clientId+'&client_secret='+this.props.clientSecret,
            datatype:'json',
            cache: false,
            success: function(data){
                this.setState({userData : data});
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return(
            <div>
                <Profile userData = {this.state.userData} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '80a16cb43208f17891c9',
    clientSecret: 'c36abcc03f2db4ef7afa0456939d19b97eb8a033'
};

export default App