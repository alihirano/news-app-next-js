import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import { getNewsHeadlineAction } from '../../actions/news';
import { connect } from 'react-redux';
import { API_KEY, CATEGORY } from '../../constants/news';

const Header = props => {
  // console.log(props);
  const apiKey = API_KEY;
  const [search, setsearch] = useState('');

  const searchHandler = e => {
    setsearch(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (search.trim(' ') !== '') {
      const updateParams = { ...props.params, q: search };
      props.getAllNews(apiKey, updateParams);
    } else {
      alert('Please type something');
    }
  };

  const categoryHandler = e => {
    console.log(e.target.text);
    const category = e.target.text;
    if (category !== 'Category') {
      const updateParams = { ...props.params, category: category };
      props.getAllNews(apiKey, updateParams);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Codenimia-News</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            onClick={categoryHandler}
            title="Category"
            active
            id="collasible-nav-dropdown"
          >
            {CATEGORY.map(data => (
              <NavDropdown.Item type="button" key={data.value}>
                {data.value}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={submitHandler}>
          <FormControl
            onChange={searchHandler}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button type="submit" variant="outline-light" className="my-2">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    params: state.allNews.params,
    isloading: state.allNews.isLoadingGetNews,
    issuccess: state.allNews.isSuccessGetNews,
    isfailure: state.allNews.isErrorGetnews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllNews: (apiKey, params) => dispatch(getNewsHeadlineAction(apiKey, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
