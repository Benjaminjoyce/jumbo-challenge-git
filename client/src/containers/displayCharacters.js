import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderCharacterList } from '../components/render_character_list';
import {
  relevantCharactersSelector,
  pageTotalSelector
} from '../middleware/reselect';
import { pageNumbers } from '../components/pageNumbers';
import PaginationBar from './paginationBar'

class DisplayCharacters extends Component {
  constructor() {
    super();
    this.state = {
      path: 1
    };
  }
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.path !== this.props.path) {
      let newPath = this.props.path;
      this.setState({ path: this.props.path });
      this.props.loadCharacters(newPath);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.path) {
      return { path: nextProps.match.params.id };
    }
    return null;
  }

  handleLoadMoreclick = () => {
    this.setState({ path: this.props.match.params.id });
  };

  nextUrlId = a => {
    if (a) {
      return this.setState({ path: a });
    }
    return (Number(this.props.match.params.id) + 1).toString();
  };

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to={this.nextUrlId()} onClick={() => this.handleLoadMoreclick()}>
          <button>load more </button>
        </Link>
        <div id="index-container">
          {renderCharacterList(this.props.results)}
        </div>
        <Link to={this.nextUrlId()} onClick={() => this.handleLoadMoreclick()}>
          <button>load more </button>
        </Link>

        <ul className="pagination grey darken-4">
        {console.log(this.state.path)}
          {pageNumbers(this.props.total.data.total,this.state.path)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    results: relevantCharactersSelector(state),
    total: pageTotalSelector(state),
    path: props.match.params.id
  };
};

export default connect(
  mapStateToProps,
  { loadCharacters }
)(DisplayCharacters);
