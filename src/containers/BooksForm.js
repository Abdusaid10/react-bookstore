/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.categories = [
      '',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    this.initialState = {
      title: '',
      category: this.categories[0],
    };

    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    if (title && category) {
      createBook(this.state);
      this.setState({
        title: '',
        category: '',
      });
      e.target.reset();
    }
  }

  mapDispatchToProps(dispatch) {
    const book = this.props;
    return { createBook: () => dispatch(createBook(book)) };
  }

  render() {
    return (
      <div>
        <hr />
        <div id="add">Add new book</div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input
            type="text"
            name="title"
            placeholder="Book title"
            onChange={this.handleChange}
          />
          <select name="category" id="cat">
            <option value="Category" selected>
              Category
            </option>
            {this.categories.map(cat => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input type="submit" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
