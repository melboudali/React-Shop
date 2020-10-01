import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectSections } from '../../Redux/Home/HomeSelectors';
import { SelectAllItems } from '../../Redux/Shop/ShopSelectors';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import Loading from '../../Components/ShopPageComponents/Loading/Loading';

import Grid from '@material-ui/core/Grid';
import SliderContainer from '../../Components/HomePageComponents/Slider/SliderContainer/SliderContainer';
import MenuItem from '../../Components/HomePageComponents/MenuItem/MenuItem';
import Title from '../../Components/SectionTitle/SectionTitle';
import CollectionContainer from '../../Components/ShopPageComponents/Collections/CollectionsContainer/CollectionsContainer';
import PropTypes from 'prop-types';

const Home = ({ Sections, AllItems, isLoading }) => {
  useEffect(() => console.log(AllItems), [AllItems]);
  return (
    <Fragment>
      <SliderContainer />
      <Title title='shop by categories' />
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        {Sections.map(({ id, ...Sections }) => (
          <Grid
            item
            key={id}
            xs={12}
            sm={id > 2 ? 12 : 6}
            md={id > 2 ? 12 : 6}
            lg={id > 3 ? 6 : 4}
            xl={id > 3 ? 6 : 4}>
            <MenuItem {...Sections} />
          </Grid>
        ))}
      </Grid>
      {!isLoading && AllItems && (
        <CollectionContainer
          title='popular this week'
          items={[...new Map(AllItems.map(item => [item['name'], item])).values()].sort(
            (a, b) => b.orders - a.orders
          )}
        />
      )}
      {!isLoading && AllItems && (
        <CollectionContainer
          title='new arrivals'
          items={[...new Map(AllItems.map(item => [item['name'], item])).values()].sort((a, b) =>
            a.id > b.id ? -1 : 1
          )}
        />
      )}
    </Fragment>
  );
};

Home.prototype = { Sections: PropTypes.array };

const mapStateToProps = createStructuredSelector({
  Sections: SelectSections,
  AllItems: SelectAllItems,
  isLoading: SelectLoading
});

const Data = [
  [
    {
      id: 9,
      name: 'NEDEINS Women V Neck',
      description:
        'NEDEINS Women V Neck Split Dress Floral Print Long Summer Spaghetti Strap Party Pink Chiffon Elegant Casual Maxi Dresses Beach',
      colors: ['blue', 'light-blue', 'yellow-pink', 'white'],
      size: ['s', 'm', 'l', 'xl'],
      oldPrice: 58.0,
      newPrice: 31.85,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/H0ab8999218c8490f8b5e44a1222e7591J/NEDEINS-Women-V-Neck-Split-Dress-Floral-Print-Long-Summer-Spaghetti-Strap-Party-Pink-Chiffon-Elegant.jpg_640x640.jpg',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H918322a6c14845589357ea363d70cc30l/NEDEINS-Women-V-Neck-Split-Dress-Floral-Print-Long-Summer-Spaghetti-Strap-Party-Pink-Chiffon-Elegant.jpg_640x640.jpg',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/Hafa0f790d8624a22b3a424d2089400cb4/NEDEINS-Women-V-Neck-Split-Dress-Floral-Print-Long-Summer-Spaghetti-Strap-Party-Pink-Chiffon-Elegant.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/Ha080adaa6d594414af1accf0c53fb8d3P/NEDEINS-Women-V-Neck-Split-Dress-Floral-Print-Long-Summer-Spaghetti-Strap-Party-Pink-Chiffon-Elegant.jpg_640x640.jpg',
      rate: 4.7,
      orders: 1466
    },
    {
      id: 10,
      name: 'Harajuku Open Back',
      description:
        'Women Sexy Harajuku Open Back T-shirt Long Sleeve Top Cropped Tops Women T-shirt Summer Casual Tops White Fashion T-shirt 2020',
      colors: ['black', 'beige', 'white'],
      size: ['s', 'm', 'l'],
      oldPrice: 38.73,
      newPrice: 24.8,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/Hcdf35e69bb294b39b1c7f98cbec4e8d4o/Women-Sexy-Harajuku-Open-Back-T-shirt-Long-Sleeve-Top-Cropped-Tops-Women-T-shirt-Summer.jpg_640x640.jpg',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H0c13ac01a5d640c89e033534022828bdv/Women-Sexy-Harajuku-Open-Back-T-shirt-Long-Sleeve-Top-Cropped-Tops-Women-T-shirt-Summer.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H4cc6592ef03e4691a23dabb9fdeb5d9ab/Women-Sexy-Harajuku-Open-Back-T-shirt-Long-Sleeve-Top-Cropped-Tops-Women-T-shirt-Summer.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/H261f6e6a11e847b685d85a60133d4a280/Women-Sexy-Harajuku-Open-Back-T-shirt-Long-Sleeve-Top-Cropped-Tops-Women-T-shirt-Summer.jpg_Q90.jpg_.webp',
      rate: 4.4,
      orders: 2863
    },
    {
      id: 11,
      name: 'Vestidos',
      description:
        'NEDEINS 2020 Summer Beach Print Dress Women Fashion Casual Boho Long Sleeve Party Sexy Elegant Vintage Dress Vestidos',
      colors: ['yellow', 'pink'],
      size: ['s', 'm', 'l'],
      oldPrice: 42.8,
      newPrice: 24.6,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/He35bd577bfca46319fcb9a9473d61331I/NEDEINS-2020-Summer-Beach-Print-Dress-Women-Fashion-Casual-Boho-Long-Sleeve-Party-Sexy-Elegant-Vintage.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/He9bcb0fd8e8e4590b5f47d4821aae9b0q/NEDEINS-2020-Summer-Beach-Print-Dress-Women-Fashion-Casual-Boho-Long-Sleeve-Party-Sexy-Elegant-Vintage.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H134a22f28aa94b4699842ea6c2c19be7w/NEDEINS-2020-Summer-Beach-Print-Dress-Women-Fashion-Casual-Boho-Long-Sleeve-Party-Sexy-Elegant-Vintage.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/Hc1043a4efced44969fa03c7fac1202ddH/NEDEINS-2020-Summer-Beach-Print-Dress-Women-Fashion-Casual-Boho-Long-Sleeve-Party-Sexy-Elegant-Vintage.jpg_Q90.jpg_.webp',
      rate: 4.9,
      orders: 5389
    },
    {
      id: 12,
      name: 'NEDEINS Women Winter Coat',
      description:
        "NEDEINS Women Winter Coat Jacket Thicken Long sleeve Outwear PU Leather Jacket warm Coats For Women Autumn Women's Clothing",
      colors: ['black', 'green', 'orange', 'blue'],
      size: ['S', 'M', 'L', 'XL'],
      oldPrice: 89.87,
      newPrice: 73.51,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/H8d6c5d2a0e90476ea09cd45a603d7572u/NEDEINS-Women-Winter-Coat-Jacket-Thicken-Long-sleeve-Outwear-PU-Leather-Jacket-warm-Coats-For-Women.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/Haa1f84961cd2456082e704a3efc4b931c/NEDEINS-Women-Winter-Coat-Jacket-Thicken-Long-sleeve-Outwear-PU-Leather-Jacket-warm-Coats-For-Women.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/He7b314d052a94fb9aeeff6fcd5fb410cU/NEDEINS-Women-Winter-Coat-Jacket-Thicken-Long-sleeve-Outwear-PU-Leather-Jacket-warm-Coats-For-Women.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/Hce53414364944e12be408186f6990baa1/NEDEINS-Women-Winter-Coat-Jacket-Thicken-Long-sleeve-Outwear-PU-Leather-Jacket-warm-Coats-For-Women.jpg_Q90.jpg_.webp',
      rate: 4.7,
      orders: 3394
    },
    {
      id: 13,
      name: 'Raffia Bow Sun Hat',
      description:
        'Parent-child 100%Raffia Bow Sun Hat Wide Brim Floppy Summer Hats For Women Beach Panama Straw Dome Bucket Hat Femme Shade Hat',
      colors: ['black', 'khaki', 'pink', 'ornge', 'brown'],
      size: [],
      oldPrice: 11.65,
      newPrice: 6.99,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/HTB1KqZNSFzqK1RjSZFCq6zbxVXa7/Parent-child-100-Raffia-Bow-Sun-Hat-Wide-Brim-Floppy-Summer-Hats-For-Women-Beach-Panama.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/HLB1aTZARMHqK1RjSZFgq6y7JXXa7/Parent-child-100-Raffia-Bow-Sun-Hat-Wide-Brim-Floppy-Summer-Hats-For-Women-Beach-Panama.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/HTB17ZMERQvoK1RjSZFNq6AxMVXaL/Parent-child-100-Raffia-Bow-Sun-Hat-Wide-Brim-Floppy-Summer-Hats-For-Women-Beach-Panama.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/HTB1J97CRQzoK1RjSZFlq6yi4VXaQ/Parent-child-100-Raffia-Bow-Sun-Hat-Wide-Brim-Floppy-Summer-Hats-For-Women-Beach-Panama.jpg_640x640.jpg',
      rate: 4.8,
      orders: 944
    },
    {
      id: 14,
      name: 'Beanies Rabbit Hair Winter Hats',
      description:
        'Female Beanies Rabbit Hair Winter Hats For Women Casual Autumn Knitted Beanie Girl Fashion High Quality Bonnet Cap Soft Wool Hat',
      colors: ['white', 'black', 'red', 'dark grey', 'light pink'],
      size: [],
      oldPrice: 17.95,
      newPrice: 8.8,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/HTB17YO5X6fguuRjSszcq6zb7FXaE/Female-Beanies-Rabbit-Hair-Winter-Hats-For-Women-Casual-Autumn-Knitted-Beanie-Girl-Fashion-High-Quality.jpg_640x640.jpg',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H2117a6d503f84115a11353efe912102cB/Female-Beanies-Rabbit-Hair-Winter-Hats-For-Women-Casual-Autumn-Knitted-Beanie-Girl-Fashion-High-Quality.jpg_640x640.jpg',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/HTB1mQwMG3mTBuNjy1Xbq6yMrVXab/Female-Beanies-Rabbit-Hair-Winter-Hats-For-Women-Casual-Autumn-Knitted-Beanie-Girl-Fashion-High-Quality.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/HTB1DFvLb4tnkeRjSZSgq6xAuXXa6/Female-Beanies-Rabbit-Hair-Winter-Hats-For-Women-Casual-Autumn-Knitted-Beanie-Girl-Fashion-High-Quality.jpg_640x640.jpg',
      rate: 5.0,
      orders: 1533
    },
    {
      id: 15,
      name: 'SUCHCUTE PU zaraing',
      description:
        'SUCHCUTE PU women leather jacket autumn coat zaraing 2020 streetwear black women Jacket y2k esthetic gothic vintage 90s outfits',
      colors: ['black'],
      size: ['s', 'm', 'l'],
      oldPrice: 77.78,
      newPrice: 58.33,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/H93d1d4f316524bfc9e579b4e8daf6d01F/SUCHCUTE-PU-women-leather-jacket-autumn-coat-zaraing-2020-streetwear-black-women-Jacket-y2k-esthetic-gothic.jpg_640x640.jpg',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H6d1604b81c114ebdaddc918b1f66e8d1p/SUCHCUTE-PU-women-leather-jacket-autumn-coat-zaraing-2020-streetwear-black-women-Jacket-y2k-esthetic-gothic.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H4e6e6c3054e0489fbf8aea23c3f25e89f/SUCHCUTE-PU-women-leather-jacket-autumn-coat-zaraing-2020-streetwear-black-women-Jacket-y2k-esthetic-gothic.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/H5ff1fc5f133c47538ebcab109e3d0c4d8/SUCHCUTE-PU-women-leather-jacket-autumn-coat-zaraing-2020-streetwear-black-women-Jacket-y2k-esthetic-gothic.jpg_Q90.jpg_.webp',
      rate: 4.9,
      orders: 6235
    },
    {
      id: 16,
      name: 'Streetwear Party',
      description:
        'Short Sleeve Letters Print Sexy Ctop Tops Women Fashion Streetwear Party Club Female T-shirts 2019 Summer',
      colors: ['black'],
      size: ['s', 'm', 'l'],
      oldPrice: 49.5,
      newPrice: 25.22,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/HTB1zS9uaq5s3KVjSZFNq6AD3FXaX/Short-Sleeve-Letters-Print-Sexy-Ctop-Tops-Women-Fashion-Streetwear-Party-Club-Female-T-shirts-2019.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/HTB1aXGlav1H3KVjSZFHq6zKppXai/Short-Sleeve-Letters-Print-Sexy-Ctop-Tops-Women-Fashion-Streetwear-Party-Club-Female-T-shirts-2019.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/HTB1RiCnaBWD3KVjSZKPq6yp7FXaF/Short-Sleeve-Letters-Print-Sexy-Ctop-Tops-Women-Fashion-Streetwear-Party-Club-Female-T-shirts-2019.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/HTB1g2SsaBGw3KVjSZFDq6xWEpXaC/Short-Sleeve-Letters-Print-Sexy-Ctop-Tops-Women-Fashion-Streetwear-Party-Club-Female-T-shirts-2019.jpg_Q90.jpg_.webp',
      rate: 4.8,
      orders: 7409
    }
  ],
  [
    {
      id: 9,
      name: 'Streetwear Jean Jackets',
      description:
        "Men's Jean Jackets Streetwear Hip Hop Bomber Jacket Denim Jacket Men Brand Ripped Denim Jackets Casual Fashion Coat",
      colors: ['blue'],
      size: ['m', 'l', 'xl'],
      oldPrice: 59.99,
      newPrice: 41.99,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/HTB1AfmwelCw3KVjSZR0q6zcUpXau/Men-s-Jean-Jackets-Streetwear-Hip-Hop-Bomber-Jacket-Denim-Jacket-Men-Brand-Ripped-Denim-Jackets.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/HTB1Ek1neoWF3KVjSZPhq6xclXXaZ/Men-s-Jean-Jackets-Streetwear-Hip-Hop-Bomber-Jacket-Denim-Jacket-Men-Brand-Ripped-Denim-Jackets.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/HTB1H2moek9E3KVjSZFGq6A19XXah/Men-s-Jean-Jackets-Streetwear-Hip-Hop-Bomber-Jacket-Denim-Jacket-Men-Brand-Ripped-Denim-Jackets.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/HTB1FP5uelGw3KVjSZFDq6xWEpXaO/Men-s-Jean-Jackets-Streetwear-Hip-Hop-Bomber-Jacket-Denim-Jacket-Men-Brand-Ripped-Denim-Jackets.jpg_Q90.jpg_.webp',
      rate: 4.9,
      orders: 2009
    },
    {
      id: 10,
      name: 'Mens Ethnic Printed',
      description:
        '2020 England Style Mens Ethnic Printed Stand Collar Stripe Short Sleeve Loose Hawaiian Henley Shirt hawaiian Shirt S-3XL',
      colors: ['orange', 'black', 'white'],
      size: ['s', 'm', 'l', 'xl'],
      oldPrice: 40.99,
      newPrice: 36.99,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/H31d5877fe36947ba8bbfdab6ff6d48a2M/2020-England-Style-Mens-Ethnic-Printed-Stand-Collar-Stripe-Short-Sleeve-Loose-Hawaiian-Henley-Shirt-hawaiian.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H75e996589715498b94862813b6d7cca83/2020-England-Style-Mens-Ethnic-Printed-Stand-Collar-Stripe-Short-Sleeve-Loose-Hawaiian-Henley-Shirt-hawaiian.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H1e17162cc4b84d27a1a2145245c34b2fH/2020-England-Style-Mens-Ethnic-Printed-Stand-Collar-Stripe-Short-Sleeve-Loose-Hawaiian-Henley-Shirt-hawaiian.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/H4597ea404ca348a9b59ca22e56489729e/2020-England-Style-Mens-Ethnic-Printed-Stand-Collar-Stripe-Short-Sleeve-Loose-Hawaiian-Henley-Shirt-hawaiian.jpg_640x640.jpg',
      rate: 4.8,
      orders: 6330
    },
    {
      id: 11,
      name: 'Fuxx home',
      description:
        "Men's High Top Fashion Leather Sneakers Trend Hot Sale Comfortable Man Casual Shoes Outdoor Non-slip Breathable Men Shoes",
      colors: ['white-red', 'white', 'black-red', 'black', 'red'],
      size: [8.5, 9.5, 10, 11],
      oldPrice: 74.58,
      newPrice: 70.44,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/HTB18260dSSD3KVjSZFKq6z10VXaY/Men-s-High-Top-Fashion-Leather-Sneakers-Trend-Hot-Sale-Comfortable-Man-Casual-Shoes-Outdoor-Non.jpg_640x640.jpg',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/HTB1156LcAxz61VjSZFrq6xeLFXas/Men-s-High-Top-Fashion-Leather-Sneakers-Trend-Hot-Sale-Comfortable-Man-Casual-Shoes-Outdoor-Non.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/HTB1qiD1dUuF3KVjSZK9q6zVtXXaU/Men-s-High-Top-Fashion-Leather-Sneakers-Trend-Hot-Sale-Comfortable-Man-Casual-Shoes-Outdoor-Non.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/HTB1asz6dRGw3KVjSZFDq6xWEpXao/Men-s-High-Top-Fashion-Leather-Sneakers-Trend-Hot-Sale-Comfortable-Man-Casual-Shoes-Outdoor-Non.jpg_640x640.jpg',
      rate: 4.6,
      orders: 8920
    },
    {
      id: 12,
      name: 'Hirigin Winter',
      description:
        'Hirigin Winter Men Casual Birtish Style Faux Fur Lapel Long puffy Jacket Long Thicken Parka Lot Warm Coat',
      colors: ['black', 'brown', 'grey'],
      size: ['m', 'l', 'xl', 'xxl'],
      oldPrice: 65.59,
      newPrice: 50.13,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/Hf8380880e38842c5830e68da2f0f29acZ/Hirigin-Winter-Men-Casual-Birtish-Style-Faux-Fur-Lapel-Long-puffy-Jacket-Long-Thicken-Parka-Lot.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H296e63a2173a40a98e451fffa273bf8bj/Hirigin-Winter-Men-Casual-Birtish-Style-Faux-Fur-Lapel-Long-puffy-Jacket-Long-Thicken-Parka-Lot.jpg_640x640.jpg',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H074c4ef626c34f4c992a776927d59643A/Hirigin-Winter-Men-Casual-Birtish-Style-Faux-Fur-Lapel-Long-puffy-Jacket-Long-Thicken-Parka-Lot.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/H559bc4e5f6fe4d23bbabfb4747ad1052u/Hirigin-Winter-Men-Casual-Birtish-Style-Faux-Fur-Lapel-Long-puffy-Jacket-Long-Thicken-Parka-Lot.jpg_640x640.jpg',
      rate: 4.5,
      orders: 4088
    },
    {
      id: 13,
      name: 'Trendyol Male T-Shirt',
      description: 'Trendyol Male T-Shirt TMNSS20TS1297',
      colors: ['beige'],
      size: ['s', 'm'],
      oldPrice: 25.48,
      newPrice: 17.74,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/Ua05306040eb7488792c8a667ad63d72dG/Trendyol-Male-T-Shirt-TMNSS20TS1297.jpeg_Q90.jpeg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/U91eb6dab83064af4b21cb525a90f0e3eC/Trendyol-Male-T-Shirt-TMNSS20TS1297.jpeg_Q90.jpeg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/U5c2730664e7a43688eba4f8d78949bdbT/Trendyol-Male-T-Shirt-TMNSS20TS1297.jpeg_Q90.jpeg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/U0b8c40ca3e314d50984c51fe7553ba46x/Trendyol-Male-T-Shirt-TMNSS20TS1297.jpeg_Q90.jpeg_.webp',
      rate: 4.4,
      orders: 2509
    },
    {
      id: 14,
      name: 'hawaiian shirt streetwear',
      description:
        '2020 Fashion Casual Button Hawaii Print Beach Short Sleeve Quick Dry Top Blouse M-3XL hawaiian shirt streetwear',
      colors: ['white'],
      size: ['s', 'm', 'l', 'xl'],
      oldPrice: 45.42,
      newPrice: 23.26,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/He857640549194939a13853ebb9296903h/2020-Fashion-Casual-Button-Hawaii-Print-Beach-Short-Sleeve-Quick-Dry-Top-Blouse-M-3XL-hawaiian.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/H453dd02200e041609b734da8d34364edn/2020-Fashion-Casual-Button-Hawaii-Print-Beach-Short-Sleeve-Quick-Dry-Top-Blouse-M-3XL-hawaiian.jpg_Q90.jpg_.webp',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H5d713d37a59c43f1ba30a8cd3d40d4cez/2020-Fashion-Casual-Button-Hawaii-Print-Beach-Short-Sleeve-Quick-Dry-Top-Blouse-M-3XL-hawaiian.jpg_Q90.jpg_.webp',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/He9f492cb018344daac81b496dc200430g/2020-Fashion-Casual-Button-Hawaii-Print-Beach-Short-Sleeve-Quick-Dry-Top-Blouse-M-3XL-hawaiian.jpg_Q90.jpg_.webp',
      rate: 4.6,
      orders: 535
    },
    {
      id: 15,
      name: 'Pattern Tracksuit',
      description:
        "Pattern Tracksuit Men Summer Beachwear Men's Set 2020 Mens Notched T Shirts +Shorts Two Piece Sets Floral Beach Swaet Suit 5XL",
      colors: ['gold-blue', 'orange-blue', 'blue-white'],
      size: ['s', 'm', 'l', 'xl'],
      oldPrice: 72.64,
      newPrice: 53.05,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/Hccb4a3e0a45644c7b20eded3f57d3644n/Pattern-Tracksuit-Men-Summer-Beachwear-Men-s-Set-2020-Mens-Notched-T-Shirts-Shorts-Two-Piece.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/Ha05482fe52714a8fa5724d5cfea437f9b/Pattern-Tracksuit-Men-Summer-Beachwear-Men-s-Set-2020-Mens-Notched-T-Shirts-Shorts-Two-Piece.jpg_640x640.jpg',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/Hc6c62637e5a645cbabd89ec6ee45de2ba/Pattern-Tracksuit-Men-Summer-Beachwear-Men-s-Set-2020-Mens-Notched-T-Shirts-Shorts-Two-Piece.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/Hfbb25beb06154c48939e4cd85b18c640i/Pattern-Tracksuit-Men-Summer-Beachwear-Men-s-Set-2020-Mens-Notched-T-Shirts-Shorts-Two-Piece.jpg_640x640.jpg',
      rate: 4.7,
      orders: 5300
    },
    {
      id: 16,
      name: 'Jumper Male',
      description:
        'Autumn Casual Solid O Neck Sweater Men Pullover Sweaters Casual Jumper Male Knitted',
      colors: ['beige', 'orange', 'black', 'white'],
      size: ['s', 'm', 'l'],
      oldPrice: 33.85,
      newPrice: 23.13,
      firstImageUrl:
        'https://ae01.alicdn.com/kf/H260cda00f2274b7e8ce93cd05b63aa1c9/Autumn-Casual-Solid-O-Neck-Sweater-Men-Pullover-Sweaters-Casual-Jumper-Male-Knitted.jpg_Q90.jpg_.webp',
      secondImageUrl:
        'https://ae01.alicdn.com/kf/Hb30fe12161294cd4bb3bc55a616d7c6dV/Autumn-Casual-Solid-O-Neck-Sweater-Men-Pullover-Sweaters-Casual-Jumper-Male-Knitted.jpg_640x640.jpg',
      thirdImageUrl:
        'https://ae01.alicdn.com/kf/H30f32377fd2543a19e8923079bb7ce96D/Autumn-Casual-Solid-O-Neck-Sweater-Men-Pullover-Sweaters-Casual-Jumper-Male-Knitted.jpg_640x640.jpg',
      fourthImageUrl:
        'https://ae01.alicdn.com/kf/Hae23293057c34abe8cce43923f9037b0J/Autumn-Casual-Solid-O-Neck-Sweater-Men-Pullover-Sweaters-Casual-Jumper-Male-Knitted.jpg_Q90.jpg_.webp',
      rate: 4.3,
      orders: 4227
    }
  ]
];
export default connect(mapStateToProps)(Home);
