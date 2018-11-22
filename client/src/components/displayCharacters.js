import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderCharacterList } from './render_character_list';
import { relevantCharactersSelector } from '../middleware/reselect';

class DisplayCharacters extends Component {
  constructor() {
    super();
    this.state = {
      path: 1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.path !== this.props.path) {
      let newPath = this.props.path;
      this.setState({ path: newPath });
      this.props.loadCharacters(newPath);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id !== prevState.path) {
      return { path: nextProps.id };
    }
    return null;
  }

  render() {
    console.log('display characters render', this.props);
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    return renderCharacterList(this.props.results);
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
)(DisplayCharacters);
