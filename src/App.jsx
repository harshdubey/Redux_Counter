import { useDispatch, useSelector } from "react-redux";
import { typeIncrement, typeDecrement } from "../src/app_redux/actions/index";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const updatedNumber = useSelector((state) => state.upDownReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MOUNTING DONE!");
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99,
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false,
    });

    return () => {
      AOS.refresh();
      console.log("UNMOUNTING DONE!");
    };
  }, []);
  return (
    <>
      <div className="container">
        <h3>Increment/Decrement using Redux</h3>
        <div className="quantity">
          <button
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            onClick={() => dispatch(typeDecrement())}
          >
            -
          </button>
          <br />
          <span>{updatedNumber}</span>
          <br />
          <button
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            onClick={() => dispatch(typeIncrement())}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
