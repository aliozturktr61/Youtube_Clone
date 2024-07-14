import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { categories } from "../constants";

//* 1)Context temelini oluştur.
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  useEffect(() => {
    //* seçilen type belirle
    const type = selectedCategory.type;
    //* seçilen kategorinin type ı menü ise fonksiyonu durdur
    if (type === "menu") return;
    //* yüklemeyi trueya çek
    setIsLoading(true);
    //* İstek atacağımız urli belirledik
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name} `
        : "";
    //* api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => setVideos(res.data?.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);//api yeniden istek at
  return (
    <VideoContext.Provider
      value={{
        videos,
        error,
        isLoading,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
