import React, { Component } from 'react';
import { loadComics } from '../actions';
import { connect } from 'react-redux';

class ComicInfo extends Component {
  render() {
    if (!this.props.comics[this.props.val.resourceURI]) {
      return (
        <div>
          <button
            onClick={() => {
              this.props.loadComics(this.props.val.resourceURI);
            }}
          >
            LOAD MORE INFOR ABOUT THIS COMIC
          </button>
        </div>
      );
    }
    const {
      pageCount,
      series,
      images,
      characters,
      creators,
      prices,
      thumbnail,
      id
    } = this.props.comics[this.props.val.resourceURI];

    return (
      <div key={id}>
        <img
          className="activator"
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt={thumbnail.path}
        />
        <span>pageCount:{pageCount}</span>
        <div>
          <span>Prices</span>
          {prices.map(x => (
            <div>
              <span>
                {x.type}:{x.price}
              </span>
              {console.log(x.images)}
            </div>
          ))}
        </div>

        <span />
        <span />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comics: state.entities.comics
  };
}

export default connect(
  mapStateToProps,
  { loadComics }
)(ComicInfo);
