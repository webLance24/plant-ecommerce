import logo from "../../public/assets/logo.png";

const Loading = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
