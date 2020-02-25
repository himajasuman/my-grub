import fetch from 'node-fetch';
import React from "react";
import { Link } from "gatsby";
import queryString from 'query-string';
import Layout from "../components/layout";
import './restaurant.css';
import restaurantsData from '../data';

class RestaurantPage extends React.Component {

  render() {

    const res_id = queryString.parse(this.props.location.search).id;
    const restaurantDetails = restaurantsData
      .restaurants
      .find(({restaurant}) => restaurant.id === res_id )
      .restaurant;


    return (
      <Layout>
      {
        restaurantDetails ?
        <div className="restraunt">
          <div className="restraunt-header">
            <img src={restaurantDetails.thumb}></img>
            <div>
              <h4>{restaurantDetails.name}</h4>
              <i></i>
              <p> {restaurantDetails.location.address} </p>
              <h5>{restaurantDetails.timings}</h5>
            </div>
            <span className="ratings">
              {restaurantDetails.user_rating.aggregate_rating}
            </span>
          </div>
          <div className="images">
            <h4>Images</h4>
            {
              restaurantDetails.photos.slice(0, 10).map(
                ({photo}, index) => (
                  <img key={`restaurant${index}`} src={photo.thumb_url}/>
                )
              )
            }
          </div>
        </div>
        : <div className="loading">
          <img src="https://icon-library.net//images/gif-loading-icon/gif-loading-icon-17.jpg" />
        </div>
      }
      <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default RestaurantPage
