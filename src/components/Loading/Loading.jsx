import { ColorRing } from "react-loader-spinner";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#005eb8", "#005eb8", "#005eb8", "#005eb8", "#005eb8"]}
      />

      <span>Submitting your form</span>
    </div>
  );
};

export default Loading;
