import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { CharacterList } from '../components/CharacterList';
import { Link } from 'react-router-dom';
import {
  relevantCharactersSelector,
  pageTotalSelector
} from '../middleware/reselect';

import PaginationBar from '../components/PaginationBar';

class CharactersPage extends Component {
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

  nextUrlId = (a, b) => {
    if (a) {
      return this.setState({ path: a });
    }
    return (Number(this.props.match.params.id) + b).toString();
  };

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    const { total, results } = this.props;
    const nextUrl = (a, b) => this.nextUrlId(a, b);
    return (
      <div>
        <Link to={Number(this.props.match.params.id) + 1}>
          <button>next</button>
        </Link>
        <div id="index-container">
          <CharacterList results={results} />
        </div>
        <PaginationBar total={total} path={this.state.path} nextUrl={nextUrl} />
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
)(CharactersPage);
