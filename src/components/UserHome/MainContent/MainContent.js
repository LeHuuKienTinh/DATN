import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MainContent.scss";
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.webp';
import banner4 from '../../../assets/banner4.webp';
import banner5 from '../../../assets/banner5.webp';
import { IoIosArrowForward } from "react-icons/io";
import { TbMinusVertical } from "react-icons/tb";


import banner6 from '../../../assets/banner6.webp';
import banner7 from '../../../assets/banner7.webp';
import banner8 from '../../../assets/banner8.webp';
import { Link } from "react-router-dom";
// import banner9 from '../../../assets/banner9.webp';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 4// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageUrl = [
    {
        url:
            banner1
    },
    {
        url:
            banner2
    },
    {
        url:
            banner3
    },
    {
        url:
            banner4
    },
    {
        url:
            banner5
    },
    {
        url:
            banner6
    },
    {
        url:
            banner7
    },
    {
        url:
            banner8
    }
];


const MainContent = () => {
    return (
        <div className="parent">
            <div className="container">
                <Link className="header-content">
                    <h3><TbMinusVertical /></h3>
                    <h3 className="title-content"> Phim lẻ</h3>
                    <h4><IoIosArrowForward /></h4>
                </Link>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    // showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider-userhome" key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="container">
                <Link className="header-content">
                    <h3><TbMinusVertical /></h3>
                    <h3 className="title-content"> Phim lẻ</h3>
                    <h4><IoIosArrowForward /></h4>
                </Link>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    // showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider-userhome" key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="container">
                <Link className="header-content">
                    <h3><TbMinusVertical /></h3>
                    <h3 className="title-content"> Phim lẻ</h3>
                    <h4><IoIosArrowForward /></h4>
                </Link>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    // showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider-userhome" key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="container">
                <Link className="header-content">
                    <h3><TbMinusVertical /></h3>
                    <h3 className="title-content"> Phim lẻ</h3>
                    <h4><IoIosArrowForward /></h4>
                </Link>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    // showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider-userhome" key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default MainContent;