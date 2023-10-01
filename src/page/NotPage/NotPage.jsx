import React from 'react';

import picture from '../../images/money-pig.webp';
import { NotPageSection, NotPageStyled, ImgPig } from './NotPage.styled';
import { Link } from 'react-router-dom';

const NotPage = () => {
  return (
    <NotPageSection>
      <NotPageStyled className="text404">
        <p>Oops! 404 page not found</p>
        <Link to={'/'} className="link404">
          GO HOME?
        </Link>
      </NotPageStyled>
      <div>
        <ImgPig src={picture} alt="logoImg" width="300" />
      </div>
    </NotPageSection>
  );
};

export default NotPage;
