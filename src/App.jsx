import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, getapiConfiguration } from "./store/homeslice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/details/Detail";
import Search from "./pages/searchresult/Search";
import Explore from "./pages/explore/Explore";
import Notfound from "./pages/404/Notfound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { fetchDataFromApi } from "./utils/api";
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    apitesting();
    genrescall()
  }, []);
  const apitesting = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };
      dispatch(getapiConfiguration(url));
    });
  };
  const genrescall=async()=>{
    let promises=[]
    let endpoints=["tv","movie"]
    let allgenres ={}
    endpoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data.map(({genres})=>{
      return genres.map((item)=>(allgenres[item.id]=item))
    })
    dispatch(getGenres(allgenres))
  }
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
