import { Link, useLocation } from "react-router-dom";

const Works = () => {
    const location = useLocation();
    console.log("location :>>", location);
    return (
        <div>
            <div>
                {`현재 페이지 :  ${location.pathname.slice(1)}`}
                <Link to="/contact">contact 페이지로 이동하기</Link>
                <Link to="/todolist">todolist 페이지로 이동하기</Link>
            </div>
        </div>
    );
};

export default Works;