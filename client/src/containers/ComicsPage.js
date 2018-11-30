
import React, { Component } from 'react';
import { loadComics } from '../actions';
import { connect } from 'react-redux';
import {CardInfoList} from '../components/CardInfoList';
import PaginationBar from '../components/PaginationBar';
import {
  pageTotalSelector,
  relevantComicSelector
} from '../reselect/comic_reselector';

class ComicsPage extends Component {
  componentDidMount() {
    this.props.loadComics(this.props.match.params.id);

  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadComics(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.comics) {
      return <div>Loading...</div>;
    }
    const currentPage = Number(this.props.match.params.id);
    const { total, comics } = this.props;

    return (
      <div>
      <div id="index-container">
           {CardInfoList(comics)}
        </div>
        <PaginationBar total={total} currentPage={currentPage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comics: relevantComicSelector(state),
    total: pageTotalSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { loadComics }
)(ComicsPage);
