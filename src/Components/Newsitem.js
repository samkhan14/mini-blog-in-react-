import React, { Component } from 'react'

export default class Newsitem extends Component {


    render() {
     let {title, description, imgUrl, newsurl } = this.props
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsurl} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
