import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Container } from './Product.Style';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Comments = ({ item: { colors, size } }) => {
  const Reviews = [
    {
      id: 0,
      image:
        'https://styles.redditmedia.com/t5_3nfln/styles/profileIcon_lwpk4z5gxsz41.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=f1c5211b1f92305813c29c1687aab628304feb76',
      name: 'Cathryn Mitchell',
      rate: 4.5,
      comment:
        'I order the third time, everything is fine, the fleece is warm inside, the outside is cotton!!! The quality is chic and the price is good! ',
      color: colors[0],
      size: size && size[0]
    },
    {
      id: 1,
      image:
        'https://d1hryyr5hiabsc.cloudfront.net/web2020/img/company/about/Headshots/angelo-headshot.jpg',
      name: 'Franco Walsh',
      rate: 4.5,
      comment:
        'Extremely satisfied I ordered it on 11/11 and received the 18/11. Very fast delivery (1 week) of very good quality, well packaged I highly recommend it looks like that of Zara',
      color: colors[1],
      size: size && size[1]
    },
    {
      id: 2,
      image:
        'https://www.internations.org/go/build/images/default/endorsement/avatar-3.1763ca66f7397a7f6a7ce8d7057e303f-256.jpg',
      name: 'Madisen Labadie',
      rate: 4.5,
      comment:
        "Oh, great. It has arrived very fast and very good packed. I recommend 100%. It's beautiful. ",
      color: colors[0],
      size: size && size[0]
    },
    {
      id: 3,
      image: 'https://up.quizlet.com/y35rz-7r7uA-256s.jpg',
      name: 'Alexa Franecki',
      rate: 4.5,
      comment: 'unbelievable, the shipping takes only 10 days to germany!!!',
      color: colors[0],
      size: size && size[0]
    },
    {
      id: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGX13gvH3YUcdxUkwiwUVVUAzgQ-artsKCQ&usqp=CAU',
      name: 'Reyes Pfeffer',
      rate: 4.5,
      comment:
        'Very good quality the leather is very good quality looks like genuine leather wahouuu I am impressed with the rendering I recommend because the seller deserves more than 5 stars. Delivered in 2 weeks. My daughter is very happy. ',
      color: colors[0],
      size: size && size[0]
    },
    {
      id: 5,
      image: 'https://secure.gravatar.com/avatar/af7652457d957bb923ccdc31e2062119?s=256&d=mm&r=g',
      name: 'Claudine Zboncak',
      rate: 4.5,
      comment:
        'The jacket conforms to the photos, it is thick, short, warm, and size well. I measure 1m75 and I make a size M for jackets because of my long arms and I am satisfied. The quality is good too there is no defect. I placed the order on 11/11 and I received it on 30/11 in Belgium as planned. ',
      color: colors[0],
      size: size && size[0]
    }
    // { id: 0, image: '', name: '', rate: 4.5, comment: '', color: colors[0], size: size && size[0] },
  ];

  return (
    <Container>
      <SectionTitle title='Customer Reviews' />
      {Reviews.map(({ id, ...review }) => (
        <Comment key={id} {...review} />
      ))}
    </Container>
  );
};

Comments.propTypes = {
  colors: PropTypes.array,
  size: PropTypes.array
};

export default Comments;
