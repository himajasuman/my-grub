import React from "react"
import { Link } from "gatsby"
import restaurantsData from '../data';
import Layout from "../components/layout"
import './index.css';

const restaurants = restaurantsData.restaurants;
const IndexPage = () => (
  <Layout>
    <div className="restaurant-list">
      {restaurants.map(({restaurant}) => (
        <div className="restaurant-container" key={`restaurant${restaurant.id}`}>
          <span className="user-rating">{restaurant.user_rating.aggregate_rating}</span>
          <Link to={`/restaurant/?id=${restaurant.id}`}>
            <img src={restaurant.thumb} />
          </Link>
          <p>
            {restaurant.name}
          </p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
