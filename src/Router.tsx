import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import MyLibrary from "./routes/MyLibrary";
import BookCalendar from "./routes/BookCalendar";
import ServiceNavbar from "./components/ServiceNavbar";
import Book from "./components/Book";
import TeamLibrary from "./routes/TeamLibrary";
import MyPage from "./routes/MyPage";
import { UserData } from "./atoms";
import { useRecoilValue } from "recoil";
import FindLogin from "./routes/FindLogin";
import ErrorPage from "./components/ErrorPage";
function Router() {
  const userData = useRecoilValue(UserData);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findLogin" element={<FindLogin />} />
      {userData.memberId === null ? null : (
        <Route path="/library" element={<ServiceNavbar />}>
          <Route index element={<MyLibrary />} />
          <Route path="calendar" element={<BookCalendar />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      )}

      <Route path="/book/:id" element={<Book />} />
      <Route path="/teamlibrary" element={<TeamLibrary />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
