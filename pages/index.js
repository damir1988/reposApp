import React from 'react'
import "../css/flexboxgrid.min.css";
import "../css/styles.css";
import {getAllRepos} from '../api/api';

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            fetching: false,
        }
    }

    getUserRepos = () => {
        getAllRepos(this.state.username);
    }

    setUserName = (username) => {
        this.setState({
            username: username,
        })
    }

    render(){
        return(
            <div className="page-container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1 className="pageTitle">reposApp</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid excepturi explicabo fuga sed soluta, unde? Aliquam atque blanditiis eaque earum, expedita facilis, illo ipsum, minus quos repudiandae sed sit voluptatum.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="getuser-container text-center">
                            <p>Enter username to get user <strong>public repositories</strong> on github.</p>
                            <input type="text" name={"username"} id={"username"} className={"form-control text-center"} onChange={(e) => this.setUserName(e.target.value)} />
                            <div className="text-center">
                                <button type={"button"} className={"button"} onClick={() => {this.getUserRepos()}}>Get repositories</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index