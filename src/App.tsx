import './App.scss'; // CSS

import { Suspense , lazy , useEffect } from 'react';
import { Routes , Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';

// import { useGetAllAttractionQuery } from './services/users';
// import { RootState , addUser } from './services/users';
// import { showUser } from './services/users';

// Complete Tutorial
// import { useSelector , useDispatch } from 'react-redux';
// import { increment , decrement } from './services/users';

// components
import Loading from './components/Loading/Loading';
import ToggleLangBar from './components/ToggleLangBar/ToggleLangBar';
import BackToHome from './components/BackToHome/BackToHome';

// pages
const Homepage = lazy(() => import("./pages/Home/Home"));
const LayoutPage = lazy(() => import("./pages/Layout/LayoutPage"));
const ConnectApiPage = lazy(() => import("./pages/ConnectApi/ConnectApi"));
const ConnectByIdPage = lazy(() => import("./pages/ConnectApi/ConnectById"));
const FormTablePage = lazy(() => import("./pages/FormTable/FormTable"));

function App() {

  const { t } = useTranslation();
  // const { data, error, isLoading } = useGetAllAttractionQuery();

  // Complete Tutorial
  // const count = useSelector((state) => state.counter.value);
  // const name = useSelector((state) => state.counter.name);
  // const dispatch = useDispatch();

  // Complete Tutorial
  // const incrementCount = () => {
  //     dispatch(increment());
  // };

  // const decrementCount = () => {
  //     dispatch(decrement());
  // };

  useEffect(() => {
    {!localStorage.getItem("LANGUAGE") ? localStorage.setItem("LANGUAGE" , "th") : null}
    // {!localStorage.getItem("users") ? localStorage.setItem("users" , "") : null}
  },[]);

  return (
    <Suspense fallback={<Loading />} >
      <ConfigProvider
        theme={{
          token : {
            fontFamily : "var(--fontTH)"
          }
        }}
      >
        <ToggleLangBar />
        <BackToHome t={t} />
        <Routes>
          <Route path='/' element={<Homepage t={t} />} />
          <Route path='/layout' element={<LayoutPage t={t} />} />
          <Route path='/connectapi' element={<ConnectApiPage t={t} />} />
          <Route path='/connectapi/:id' element={<ConnectByIdPage t={t} />} />
          <Route path='/form' element={<FormTablePage t={t} />} />
        </Routes>
      </ConfigProvider>
    </Suspense>
  )
}

export default App;
