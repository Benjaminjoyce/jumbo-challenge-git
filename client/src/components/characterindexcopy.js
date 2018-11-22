import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderCharacterList } from './render_character_list';
import { relevantCharactersSelector } from '../middleware/reselect';
import DisplayCharacters from './displayCharacters';

class CharactersIndex extends Component {
  constructor() {
    super();
    this.state = {
      path: 1
    };
  }

  componentDidMount() {
    this.setState({ path: this.props.match.params.id });
  }

  handleLoadMoreclick = () => {
    this.setState({ path: this.props.match.params.id });
  };

  render() {
    if (!this.state.path) {
      {
      }
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link
          to={(Number(this.props.match.params.id) + 1).toString()}
          onClick={() => this.handleLoadMoreclick()}
        >
          <button>load more </button>
        </Link>
        <DisplayCharacters path={this.state.path} />
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
