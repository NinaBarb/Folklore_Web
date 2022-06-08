import React from "react";
import { useEffect, useState } from "react";

import { Stories, TrendingStories, SearchBox } from "../../Components";
import EndPoints from "../../constants/endPoints";

import { NotificationContainer } from 'react-notifications';
import { default as createNotification } from "../../Utils/createNotification";



var getStoriesEndPoint = EndPoints.getStoriesEndPoint

function Home() {
    // stories, setStores, filteredStories, setFilteredStories
    const [filter, setFilter] = useState("")
    const [stories, setStores] = useState([])


    useEffect(() => {
        import('react-notifications/lib/notifications.css');
        import('./home.css')
        fetch(getStoriesEndPoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setStores(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <div className="home">
            <TrendingStories />
            <SearchBox filter={filter} setFilter={(filter) => setFilter(filter)}
            />
            <Stories createNotification={(type, message) => createNotification(type, message)} stories={stories} filter={filter} />
            <NotificationContainer />
        </div>
    );
}

export default Home;