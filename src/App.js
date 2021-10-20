import React from 'react';
import {
  InstantSearch,
  Hits,
  Stats,
  Pagination,
  RatingMenu,
  Highlight,
  Configure,
  connectSearchBox,
  connectRefinementList,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import withURLSync from './URLSync';
import './App.css';

const searchClient = algoliasearch(
  'HGFLOKUDTP',
  'cba81d10f83ffbed7c64b962732b0e52'
);

const App = (props) => (
  <InstantSearch
    searchClient={searchClient}
    indexName="demo_movies"
    searchState={props.searchState}
    createURL={props.createURL}
    onSearchStateChange={props.onSearchStateChange}
  >
    <Configure hitsPerPage={10} />
    <Header />
    <section>
        <div class="row">
          <div class="col-xs-4">
            <Facets />
          </div>
          <div class="col-xs-8">
            <Results />
          </div>
        </div>
    </section>
  </InstantSearch>
);

const Header = () => (
  <header>
    <SearchBox />
  </header>
);

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <div className="searchbox-container">
    <div className="input-group">
      <input
        type="search"
        value={currentRefinement}
        onChange={(e) => refine(e.target.value)}
        autoComplete="off"
        className="form-control"
        placeholder="Search here"
      />
    </div>
  </div>
));

const Facets = () => (
  <aside>
    <h2>Filter</h2>
    <Panel title="Genres" id="genres">
      <RefinementListLinks attribute="genre" />
    </Panel>
    <Panel title="Actors" id="actors">
      <RefinementListLinks attribute="actors" />
    </Panel>
    <Panel title="Year" id="year">
      <RefinementListLinks attribute="year" />
    </Panel>
  </aside>
);

const Panel = ({ title, children, id }) => (
  <div id={id} class="panel">
    <h5>{title}
    </h5>
    {children}
  </div>
);

const Star = ({ active }) => (
  <span className={`star${active ? '' : '__empty'}`} />
);
const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; ++i) {
    stars.push(i <= rating);
  }
  return (
    <span className="stars">
      {stars.map((active, idx) => (
        <Star key={idx} active={active} />
      ))}
    </span>
  );
};
const Genre = ({ name }) => <span className="badge">{name}</span>;
const Genres = ({ genres }) => (
  <p className="genre">
    {genres.map((genre, idx) => (
      <Genre name={genre} key={idx} />
    ))}
  </p>
);

const Hit = (hit) => {
  const { image, rating, year, genre } = hit.hit;
  return (
    <div className="hit media">
      <div className="media-left">
        <div
          className="media-object"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          <Highlight attribute="title" hit={hit.hit} />
          <Stars rating={rating} />
        </h4>
        <p className="year">{year}</p>
        <Genres genres={genre} />
      </div>
    </div>
  );
};

const Results = connectSearchBox(() => (
  <article>
    <div id="stats" className="text-right text-muted">
      <Stats />
    </div>
    <hr />
    <div id="hits">
      <Hits hitComponent={Hit} />
    </div>
    <div id="pagination" className="text-center">
      <Pagination />
    </div>
  </article>
));

const RefinementListLinks = connectRefinementList(
  ({ items, refine, createURL }) => {
    const hitComponents = items.map((item) => (
      <div className={item.isRefined ? ' active' : ''} key={item.label}>
        <a
          className="item"
          href={createURL(item.value)}
          onClick={(e) => {
            e.preventDefault();
            refine(item.value);
          }}
        >
          <span> {item.label}</span>
          <span className="badge pull-right">{item.count}</span>
        </a>
      </div>
    ));

    return <div className="nav nav-list">{hitComponents}</div>;
  }
);

export default withURLSync(App);
