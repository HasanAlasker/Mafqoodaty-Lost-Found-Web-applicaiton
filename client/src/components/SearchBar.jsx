import React, { useState } from "react";
import { searchPosts } from "../api/posts";

export default function SearchBar({
  type,
  onSearchResults,
  onSearchEnd,
}) {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!search || search.trim().length < 2) {
      alert("الرجاء إدخال حرفين على الأقل للبحث");
      return;
    }

    setIsSearching(true);

    const typeInArabic = type === "lost" ? "مفقود" : "موجود";

    const result = await searchPosts({
      q: search.trim(),
      type: typeInArabic,
      status: "active",
    });

    setIsSearching(false);

    if (result.ok) {
      onSearchResults?.(result.data.data);
    } else {
      alert("حدث خطأ أثناء البحث: " + result.error);
      onSearchEnd?.();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearch("");
    onSearchEnd?.();
  };

  return (
    <div className="searchCont">
      <div className="inputAndCancel">
        <input
          type="text"
          className="searchbox"
          placeholder="ابحث عن اسم، لون، أو وصف..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isSearching}
        />
        {search && (
          <button
            className="clear-button"
            onClick={handleClear}
            style={{ marginLeft: "5px" }}
          >
            ✕
          </button>
        )}
      </div>

      <button
        className="searchBtn"
        onClick={handleSearch}
        disabled={isSearching}
      >
        {isSearching ? "جاري البحث..." : "بحث"}
      </button>
    </div>
  );
}
