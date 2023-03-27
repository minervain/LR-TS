import React, { Component } from 'react'

export class User extends Component {
   
    render() {
        const {avatar_url,login,github_Url}=this.props.user;
        return (
            <div className='card-3'>
                <div className="row g-0">
                    <div className='col-md-3'>
                        <img className='img-fluid rounden-start avatar' src={avatar_url} alt={login} />
                    </div>
                    <div className='col-md-9'>
                        <div className='card-body'>
                            <h3 className='card-title'>{login}</h3>
                            <a target='_blank' href={github_Url} className="btn btn-primary">Github Profili</a>
                            
                        </div>


                    </div>
                </div>
            </div>


        )
    }
}

export default User