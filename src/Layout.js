import {
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import Admin from './component/Admin/Admin';
import HomePage from './component/Home/HomePage';
import DashBoard from './component/Admin/content/DashBoard';
import ManageUser from './component/Admin/content/ManageUser';
import Login from './component/Auth/Login';
import { ToastContainer } from 'react-toastify';
import Register from "./component/Auth/Register";
import ListQuiz from "./component/User/ListQuiz";
import DetailQuiz from "./component/User/DetailQuiz";
import { Alert } from "react-bootstrap";
import ManageQuiz from './component/Admin/content/Quiz/ManageQuiz';
import Questions from "./component/Admin/content/Question/Questions";
import PrivateRoute from './routes/PrivateRoute';
import { Suspense } from "react";

const NotFound = () => {
    return (
        <Alert variant={'danger'} className="container mt-3">
            404 Not Found data with your current URL
        </Alert>
    )
}

const Layout = (props) => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="/users" element={
                        <PrivateRoute>
                            <ListQuiz />
                        </PrivateRoute>
                    } />
                </Route>

                <Route path="/quiz/:id" element={<DetailQuiz />} />

                <Route path="/admins" element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                    <Route path="manage-quizzes" element={<ManageQuiz />} />
                    <Route path="manage-questions" element={<Questions />} />
                </Route >

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/test" element={<PrivateRoute />} />
                <Route path="*" element={<NotFound />} />
            </Routes >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Suspense>
    )
}
export default Layout;