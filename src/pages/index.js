import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/ui/navbar';
import News from '../components/news.jsx';
import { API_KEY } from '../constants/news';
import { getNewsHeadlineAction } from '../actions/news';

export const Index = props => {
  return (
    <div>
      <Header />
      {props.allNews.totalResults !== 0
        ? props.allNews.articles.map(data => (
            <News
              key={data.title}
              title={data.title}
              contents={data.description}
              link={data.url}
              date={data.publishedAt}
              urlToImage={data.urlToImage}
            />
          ))
        : null}
    </div>
  );
};

Index.getInitialProps = async ctx => {
  const params = {
    // q: 'trump',
    // from: '2020-08-26',
    // to: '2020-09-1',
    sortBy: 'publishedAt',
    country: 'id',
    // category: 'business', //business entertainment general health science sports technology
    // sources: '',
  };
  const apiKey = API_KEY;
  ctx.store.dispatch(getNewsHeadlineAction(apiKey, params));
};

const mapStateToProps = state => {
  return {
    allNews: state.allNews.allNews,
    params: state.allNews.params,
    isloading: state.allNews.isLoadingGetNews,
    issuccess: state.allNews.isSuccessGetNews,
    isfailure: state.allNews.isErrorGetnews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getAllNews: (apiKey, params) => dispatch(getNewsHeadlineAction(apiKey, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
