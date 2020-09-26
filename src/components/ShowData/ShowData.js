import React from 'react';
import "./ShowData.css";

const ShowData = (props) => {
    // const location = useLocation();
    // const myParams = location.state.params;
    // const [count, setCount] = useState(0);
    return (
        <div >
            <div className="Room-data">
                <h5>{props.room.name}</h5>
                <h6>{props.room.roomInfo}</h6>
                <h6>{props.room.benefits}</h6>
                <p>{props.room.others}</p>
                <p>{props.room.ratings}</p>
                <p>{props.room.price}</p>

            </div>

        </div>
    );
};

export default ShowData;