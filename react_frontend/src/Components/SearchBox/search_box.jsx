import { useEffect, useState } from "react";
import { default as AutocompleteBox } from "./autocomplete_box";
import { useNavigate } from 'react-router-dom';
import EndPoints from "../../constants/endPoints";



var getSearchItemsEndPoint = EndPoints.getSearchItemsEndPoint

function Search_Box({ filter, setFilter }) {

    const [selectedItem, setSelectedItem] = useState({})
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        import('./searchBox.css');
        fetch(getSearchItemsEndPoint)
            .then(res => res.json())
            .then(
                (result) => {
                    items.length = 0
                    for (const user of result[0]) {
                        items.push({ IDUser: user.IDUser, Username: user.Username, isUser: true })
                        // setItems(items => [...items, user.Username]);
                    }
                    for (const story of result[1]) {
                        items.push({ IDStory: story.IDStory, StoryName: story.StoryName, Summary: story.Summary, Username: story.Username, isUser: false })
                        // setItems(items => [...items, story.Summary]);
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const selectItem = (selectedItem) => {
        setSelectedItem(selectedItem)
        const value = selectedItem.isUser ?
            selectedItem.Username :
            selectedItem.StoryName + " by " + selectedItem.Username;
        setFilter(value.toLowerCase())
        setFilteredItems(items.filter(item => item.isUser ?
            item.Username.toLowerCase().includes(value.toLowerCase()) :
            item.StoryName.toLowerCase().includes(value.toLowerCase())))
    }

    const select = () => {
        if (selectedItem.isUser) {
            console.log("selected user")
            console.log(selectedItem)
            //REDIRECT TO USER PROFILE
        } else if (!selectedItem.isUser) {
            console.log("selected story")
            console.log(selectedItem)
            navigate("/postFullscreen/" + selectedItem.IDStory)
            //REDIRECT TO FULL POST
        }
    }

    const onChange = (e) => {
        // event.stopPropgation()
        setSelectedItem({})
        setFilter(e.target.value.toLowerCase())
        setFilteredItems(items.filter(item => item.isUser ?
            item.Username.toLowerCase().includes(e.target.value.toLowerCase()) :
            item.StoryName.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <div className="wrapper">
            <div className="searchInput">
                <div>
                    <input type="text" id="searchBox" placeholder="Type to search.." value={filter} onChange={(e) => onChange(e)} autoComplete="off" />
                    {filter !== "" && <AutocompleteBox selectItem={selectItem} filteredItems={filteredItems} />}
                </div>
                <i className="fas fa-search" id="btnSearch" onClick={select}></i>
            </div>
        </div>
    );
}

export default Search_Box;