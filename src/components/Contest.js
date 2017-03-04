/**
 * Created by Gili Belz on 04/03/2017.
 */
import React, { PropTypes } from 'react';

class Contest extends React.Component {
    render() {
        return (
          <div className="Contest">
              <div className="contest-description">
                {this.props.description}
              </div>
              <div className="home-link link"
                    onClick={this.props.contestListClick}>
                  Contest List
              </div>
          </div>
        );
    }
}

Contest.PropTypes = {
    description: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired
};

export default Contest;