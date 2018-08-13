import React from 'react'

export const FotoCard = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {props.title ? props.title : 'John Doe'}
            </h5>
            <div className="row">
                <div className="col-md-8">
                    <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto?</div>            
                </div>
                <div className="col-md-4 text-right">
                    <img src={props.image} alt="no images" className="img-fluid" style={{width: '40%'}}/>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <div className="row justify-content-center">
                <div className="col-md-1">
                    <button className="btn btn-primary">Save</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger">Edit</button>
                </div>
            </div>
        </div>
    </div>
)