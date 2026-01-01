import React, { useState } from "react";
import Nav from "../components/Nav";
import HomeCard from "../components/HomeCard";
import Screen from "../components/Screen";
import TabNav from "../components/TabNav";
import Post from "../components/Post";

export default function Home() {
  const [activeTab, setActiveTab] = useState("lost");

  const onTabChange = () => {
    let tab = activeTab === "lost" ? "found" : "lost";
    setActiveTab(tab);
  };

  return (
    <Screen>
      <Nav />
      <HomeCard />
      <TabNav activeTab={activeTab} onTabChange={onTabChange} />
      <Post />
    </Screen>
  );
}
