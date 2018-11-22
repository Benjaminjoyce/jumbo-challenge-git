import React, { Component } from 'react';
import { loadComics } from '../actions';
import { connect } from 'react-redux';

class ComicInfo extends Component {
  render() {
    if (!this.props.comics[this.props.val.resourceURI]) {
      return (
        <div>
          <span>something</span>

          <button
            onClick={() => {
              console.log(this.props.val.resourceURI);
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
      id
    } = this.props.comics[this.props.val.resourceURI];
    return (
      <div key={id}>
        <span>pageCount:{pageCount}</span>
        <div>
          <span>Prices</span>
          {prices.map(x => (
            <div>
              <span>
                {x.type}:{x.price}
              </span>
            </div>
          ))}
        </div>
        {/* <div onclick={handleClick => handleClick(images)} /> */}

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
