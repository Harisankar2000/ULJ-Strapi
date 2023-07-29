/*
 *
 * HomePage
 *
 */

import React, {memo} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {Layout,BaseHeaderLayout,ContentLayout } from "@strapi/design-system/Layout"
const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout
      title= "TimesPro Plugin"
      subtitle= "all your details in one place"
      as= "h2"
      />
      <ContentLayout>
        <p> Happy Strapi Journey....</p>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
