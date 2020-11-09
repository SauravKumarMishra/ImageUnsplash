import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImagesList from "../components/ImagesList";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // const res = await Axios.get("https://api.unsplash.com/search/photos", {
    //   params: { query: term },
    //   headers: {
    //     Authorization: "Client-ID pjN9XsW2jr5axJ0OuAjqGEyjvAfrtuMYrwyXNwX76Jk",
    //   },
    // });

    //OR

    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}
