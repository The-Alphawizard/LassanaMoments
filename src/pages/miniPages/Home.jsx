import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/photographerDash");
  };
  const handleSeeMore2 = () => {
    navigate("/UserDash");
  };
  const handleSeeMore3 = () => {
    navigate("/EditProfile");
  };
  return (
    <>
      <div>
        <div
          id="home"
          className="w-full h-screen bg-green-300 flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold text-aliceBlue">Home</h1>

          <div>
            <Button
              name="Photographer Dashboard "
              // icon={<FaCircleChevronRight />}
              bgColor="#0057ff"
              width="350px"
              borderColor="#0057ff"
              iconBgColor=""
              borderRadius="20px"
              onClick={handleSeeMore}
            />
            <br />
            <br />
            <br />
            <Button
              name="User Dashboard "
              // icon={<FaCircleChevronRight />}
              bgColor="#0057ff"
              width="350px"
              borderColor="#0057ff"
              iconBgColor=""
              borderRadius="20px"
              onClick={handleSeeMore2}
            />
            <br />
            <br />
            <br />

            <Button
              name="User Dashboard "
              // icon={<FaCircleChevronRight />}
              bgColor="#0057ff"
              width="350px"
              borderColor="#0057ff"
              iconBgColor=""
              borderRadius="20px"
              onClick={handleSeeMore3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
