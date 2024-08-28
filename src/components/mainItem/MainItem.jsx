/* eslint-disable react/jsx-no-undef */
import { Component } from "react";
import Items from "../items/Items";

import './MainItem.css'

class MainItem extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">

                    <Items date="12.04.2024" title="Night laser show" tags="#hiphop" description="We are Happy" imageUrl="https://www.kvantlasers.sk/cdn/shop/articles/1_1a8820df-7657-4508-ab38-20cf84814eae.jpg?v=1585222172&width=2048" />
                    <Items date="13.04.2024" title="Hello" tags="#code" description="We are Happy" imageUrl="https://www.kvantlasers.sk/cdn/shop/articles/1_1a8820df-7657-4508-ab38-20cf84814eae.jpg?v=1585222172&width=2048" />
                    <Items date="13.04.2024" title="How are you?" tags="#code" description="We are Happy" imageUrl="https://www.kvantlasers.sk/cdn/shop/articles/1_1a8820df-7657-4508-ab38-20cf84814eae.jpg?v=1585222172&width=2048" />

                </div>
            </div>
        )
    }

}

export default MainItem;