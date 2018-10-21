import React from 'react'
import "../css/flexboxgrid.min.css";
import "../css/styles.css";
import Link from 'next/link';
import {getAllRepos} from '../api/api';

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            fetching: false,
            repositories: []
        }
    }

    getUserRepos = async () => {
        this.state.username.length > 0 ? this.setState({ repositories: await getAllRepos(this.state.username) }) : alert('Please enter username');
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
                        <h1 className="pageTitle">repos<span className={"mainColor"}>App</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid excepturi explicabo fuga sed soluta, unde? Aliquam atque blanditiis eaque earum, expedita facilis, illo ipsum, minus quos repudiandae sed sit voluptatum.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="getuser-container text-center">
                            <p>Enter username to get users <strong>public repositories</strong> on github.</p>
                            <input type="text" name={"username"} id={"username"} className={"form-control text-center"} onChange={(e) => this.setUserName(e.target.value)} />
                            <div className="text-center">
                                <button type={"button"} className={"button"} onClick={() => {this.getUserRepos()}}>Get repositories</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <ul className={"repositoriesList"}>
                            {
                                this.state.repositories.map((repository) => {
                                    return(
                                        <li key={repository.id}>
                                            <Link as={`/title/${repository.name}/username/${repository.owner.login}`} href={`/repos?title=${repository.name}&username=${repository.owner.login}`}>
                                                <a>
                                                    <h2 className="repository-title">{ repository.name }</h2>
                                                </a>
                                            </Link>
                                            <p className={"repository-desc"}>{repository.description}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index