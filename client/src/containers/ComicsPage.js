import React, { Component } from 'react';
import { loadComics } from '../actions';
import { connect } from 'react-redux';
import ComicsList from '../components/ComicsList';
import { pageTotalSelector } from '../middleware/reselect';

class ComicsPage extends Component {
  componentDidMount() {
    this.props.loadComics(this.props.match.params.id);
    console.log('mounted');
  }

  render() {
    if (!this.props) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div id="index-container">
          <h1>something here</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { loadComics }
)(ComicsPage);
