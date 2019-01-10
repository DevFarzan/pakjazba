import React, { Component } from 'react';
import { Rate } from 'antd';

class ProductInformation extends Component{
  render(){
    return(
      <div class="container" style={{width:"85%"}}>
        <h4><strong>Product Information</strong>  </h4>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td><strong> RAM </strong></td>
              <td>128 GB</td>
            </tr>
            <tr>
              <td><strong>Brand Name</strong></td>
              <td>Samsung</td>
            </tr>
            <tr>
              <td><strong>Item model number</strong></td>
              <td>MB-ME128GA/AM</td>
            </tr>
            <tr>
              <td><strong>Item Weight</strong></td>
              <td>0.48 ounes</td>
            </tr>
            <tr>
              <td><strong>Product Dimension</strong></td>
              <td>0.6 x 0.4 x 0.6 inches</td>
            </tr>
            <tr>
              <td><strong>ASIN</strong></td>
              <td>B06XWZWYVP</td>
            </tr>
            <tr>
              <td><strong>Customer Reviews</strong></td>
              <td>
              <span> 4 out of 5 stars </span>
              <br/>
              <span>
                <Rate allowHalf defaultValue={2.5} /> 11, 213 customer reviews
              </span>
              </td>
            </tr>
            <tr>
              <td><strong>Best Sellers Rank</strong></td>
              <td>#1 in Cell Phones & Accessories</td>
            </tr>
            <tr>
              <td><strong>Shipping Weight</strong></td>
              <td>0.59 x 0.43 x 0.59 inches</td>
            </tr>
            <tr>
              <td><strong>Date First Available</strong></td>
              <td>April 9, 2017</td>
            </tr>

          </tbody>
        </table>
    </div>

    )
  }
}

export default ProductInformation;
