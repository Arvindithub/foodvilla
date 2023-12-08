import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const parents = [
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/318cab799713a9739a56dc9d24659a8e",
        caption: "",
        offer: "",
        brandname: ""
    },
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/07983e8a681a72d4b0d673f17c3a9aa2",
        caption: "",
        offer: "",
        brandname: ""
    },
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1fd881af04f881b20fca30dc50d038ad",
        caption: "",
        offer: "",
        brandname: ""
    },
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/c535e92c2f6a8c5041e8bc32d3032244",
        caption: "",
        offer: "",
        brandname: ""
    },
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/bf1e899572d124a924e96208c6f5cb1c",
        caption: "",
        offer: "",
        brandname: ""
    },
    {
        url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/963bb11935b088ad4b2666d91296ee70",
        caption: "",
        offer: "",
        brandname: ""
    }
];

export const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            const data = await response.json();
            // if (data.statusCode === 0) {
            //     const res = data.data;
            //     const cards = res.cards;
            //     const pageOffset = res.pageOffset;
            //     setRestaurantData(cards)
            // } else {
            //     console.error('request failed')
            // }
            console.log(data);
            setRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || {});
            console.log(restaurantData);
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };


    const settings = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false
                }
            }
        ]
    };

    return restaurantData === 0 ? ("Loading") : (
        <div>
            <div> <div style={{ marginLeft: "350px", marginTop: "20px" }}>
                        <input style={{ width: "300px" }} type="text" placeholder="Check your taste here!" />
                        <button style={{ marginLeft: "5px", width: "60px" }}>Search</button>
                    </div>
                    </div>
            <div>

                <h1>restaurants list and their cuisines</h1>
                <ul>
                    {restaurantData.map((restaurant) => (
                        <li key={restaurant.info.id}>
                            name:{restaurant.info.name}
                            {/* <img src={`https://www.swiggy.com/${restaurant.info.map(ele => ele.imageId).join(',')}`} alt={`Restaurant ${restaurant.info.id}`} /> */}
                        </li>
                    )
                    )}
                </ul>

            </div>
            <div>
                <div className="restaurant-list">
                    <div>

                    </div>
                </div>
                <div>
                    
                    <div style={{ marginTop: "30px", maxWidth: "90%", marginLeft: "40px" }}>
                        <Slider {...settings}>
                            {parents.map((parent, index) => (
                                <div key={index}>
                                    <img src={parent.url} alt={`slide ${index + 1}`} style={{ height: "150px", width: "100%", gap: "5px" }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};