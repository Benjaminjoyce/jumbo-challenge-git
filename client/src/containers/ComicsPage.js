
import React, { Component } from 'react';
import { loadComics } from '../actions';
import { connect } from 'react-redux';
import ComicsList from '../components/ComicsList';
import PaginationBar from '../components/PaginationBar';
import {
  pageTotalSelector,
  relevantComicSelector
} from '../reselect/comic_reselector';

class ComicsPage extends Component {
  componentDidMount() {
    this.props.loadComics(this.props.match.params.id);
    console.log('mounted');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadComics(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    const currentPage = Number(this.props.match.params.id);
    const { total, results } = this.props;
    console.log(this.props);
    return (
      <div>
        <div id="index-container">
          <ComicsList results={results} />
        </div>
        <PaginationBar total={total} currentPage={currentPage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: relevantComicSelector(state),
    total: pageTotalSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { loadComics }
)(ComicsPage);
