import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import GoUp from './GoUp'

function Template({children}) {
  return (
    <>
      <Navbar />
      <div className="row body">
        {children}
      </div>
      <Footer />
      <GoUp />
    </>
  )
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
