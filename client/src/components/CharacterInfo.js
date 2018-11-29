/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import type{ Character } from '../flowTypes/characterTypes'

type Props ={
    character:Character
}

class CharacterInfo extends Component<Props>{
    render(){
        const {id,thumbnail,name,description} = this.props.character
        return (
            <div className="card small" key={id}>
              <div className="waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={`${thumbnail.path}/portrait_fantastic.${
                   thumbnail.extension
                    }`}
                  alt={name}
                />
                <hr />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {name}
                </span>
                <span>{description}</span>
                <p>
                  <Link to={`profile/${id}`}>Find Out More</Link>
                </p>
              </div>
            </div>
          );
    }
}
export default CharacterInfo