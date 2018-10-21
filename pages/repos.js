import React from 'react'
import {withRouter} from 'next/router'
import Link from 'next/link'
import "../css/flexboxgrid.min.css";
import "../css/styles.css";
import {getReposDetails} from '../api/api';

const Repos = withRouter((props) => (

    <div className="page-container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
                <h1 className="pageTitle">repos<span className={"mainColor"}>App</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid excepturi explicabo fuga sed soluta, unde? Aliquam atque blanditiis eaque earum, expedita facilis, illo ipsum, minus quos repudiandae sed sit voluptatum.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <ul className="repositoriesList">
                    <li>
                        <div className="row">
                            <div className="col-sm-2">
                                <strong>Repository owner:</strong>
                            </div>
                            <div className="col-md-10">
                                <p className={"repository-desc"}>{props.repoInfo.owner.login}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-sm-2">
                                <strong>Repository name:</strong>
                            </div>
                            <div className="col-md-10">
                                <p className={"repository-desc"}>{props.repoInfo.name}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-sm-2">
                                <strong>Description:</strong>
                            </div>
                            <div className="col-md-10">
                                <p className={"repository-desc"}>{props.repoInfo.description}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-sm-2">
                                <strong>URL:</strong>
                            </div>
                            <div className="col-md-10">
                                <Link href={props.repoInfo.html_url}>
                                    <a>{props.repoInfo.html_url}</a>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
))

Repos.getInitialProps = async function (context) {
    const { title, username } = context.query
    const repoInfo = await getReposDetails(username, title);
    console.log(repoInfo);
    return { repoInfo }
}

export default Repos