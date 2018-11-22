import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderCharacterList } from './render_character_list';
import { relevantCharactersSelector } from '../middleware/reselect';

console.log(renderCharacterList);
class CharactersIndex extends Component {
  constructor() {
    super();
    this.state = {
      path: 1
    };
  }

  componentDidMount() {
    this.setState({ path: this.props.match.params.id });
    this.props.loadCharacters(this.state.path);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('derived nextprops', nextProps);
    console.log('derived prevState', prevState);
    if (nextProps.match.params.id !== prevState.path) {
      return { path: nextProps.match.params.id };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ path: this.props.match.params.id });
    }
  }

  handleLoadMoreclick = () => {
    this.setState({ path: this.props.match.params.id });
  };

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {renderCharacterList(this.props.results)}
        <h3 id="index-header">Your Marvel Characters</h3>{' '}
        <Link
          to={(Number(this.props.match.params.id) + 1).toString()}
          onClick={() => this.handleLoadMoreclick()}
        >
          <button>load more </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: relevantCharactersSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersIndex);
