import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../parts/Header';
import PortfolioDetail from '../parts/PortfolioDetail';
import Footer from '../parts/Footer';

import Data from '../json/landingPage.json';

const ProjectDetailPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailData = Data.portfolio.filter((item) => item.id === id);

  return (
    <>
      <Header {...props} />
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
