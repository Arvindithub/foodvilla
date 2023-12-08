import React, { useEffect, useState } from 'react';

export const Body = () => {
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
    return restaurantData=== 0 ? ("Loading"):(
        <div>

            <h1>restaurants list and their cuisines</h1>
            <ul>
                {restaurantData.map((restaurant) =>(
                    <li key={restaurant.info.id}>
                      name:{restaurant.info.name}
                      {/* <img src={`https://www.swiggy.com/${restaurant.info.map(ele => ele.imageId).join(',')}`} alt={`Restaurant ${restaurant.info.id}`} /> */}
                    </li>
                )
                )}
            </ul>                    

        </div>
    );
};

// .card.card.imageGridCards


