import React, { useState } from "react";
import Nav from "../components/Nav";
import HomeCard from "../components/HomeCard";
import Screen from "../components/Screen";
import TabNav from "../components/TabNav";
import Post from "../components/Post";
import { usePost } from "../context/postContext";
import PostGrid from "../components/PostGrid";
import LoadingPostGrid from "../components/LoadingPostGrid";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("lost");
  const { lost, found, loading } = usePost();
  
  const [searchResults, setSearchResults] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const onTabChange = () => {
    let tab = activeTab === "lost" ? "found" : "lost";
    setActiveTab(tab);
    setSearchResults(null);
    setIsSearchActive(false);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearchActive(true);
  };

  const handleSearchEnd = () => {
    setSearchResults(null);
    setIsSearchActive(false);
  };

  // Determine which posts to display
  const postsToDisplay = isSearchActive 
    ? searchResults 
    : (activeTab === "found" ? found : lost);

  const postList = postsToDisplay?.map((post) => (
    <Post
      key={post._id}
      id={post._id}
      userName={post.userName}
      userPhone={post.userPhone}
      createdAt={post.createdAt}
      area={post.area}
      city={post.city}
      name={post.name}
      category={post.category}
      color={post?.color}
      description={post.description}
      image={post?.image}
      password={post.password}
      type={post.type}
    />
  ));

  return (
    <Screen>
      <Nav />
      <HomeCard />
      <SearchBar 
        type={activeTab}
        onSearchResults={handleSearchResults}
        onSearchEnd={handleSearchEnd}
      />
      <TabNav activeTab={activeTab} onTabChange={onTabChange} />

      {isSearchActive && searchResults?.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>لا توجد نتائج للبحث</p>
        </div>
      )}
      
      {(loading || !found || !lost) && !isSearchActive && <LoadingPostGrid />}
      
      <PostGrid>{postList}</PostGrid>
      <Footer />
    </Screen>
  );
}