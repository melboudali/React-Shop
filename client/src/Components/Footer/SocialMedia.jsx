import React from 'react';
import { SocialMediaContainer, Title, SvgContainer, Link, Svg } from './Footer.Style';

const SocialMedia = () => (
  <SocialMediaContainer>
    <Title>connect with us</Title>
    <SvgContainer>
      {/* Facebook */}
      <Link href='#' target='_blank'>
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='#3b5999'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
        </Svg>
      </Link>
      {/* Twitter */}
      <Link href='#' target='_blank'>
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='#55acee'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z' />
        </Svg>
      </Link>
      {/* Instagram */}
      <Link href='#' target='_blank'>
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='#e4405f'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <rect x='4' y='4' width='16' height='16' rx='4' />
          <circle cx='12' cy='12' r='3' />
          <line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
        </Svg>
      </Link>
      {/* Pinterest */}
      <Link href='#' target='_blank'>
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='#bd081c'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <line x1='8' y1='20' x2='12' y2='11' />
          <path d='M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7' />
          <circle cx='12' cy='12' r='9' />
        </Svg>
      </Link>
    </SvgContainer>
  </SocialMediaContainer>
);

export default SocialMedia;
