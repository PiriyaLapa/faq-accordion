import { Component, ReactNode } from "react";

export default class ButtonCircle extends Component {
  render(): ReactNode {
    return (
      <svg
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.3125C10.5895 0.3125 8.23322 1.02728 6.22899 2.36646C4.22477 3.70564 2.66267 5.60907 1.74022 7.83604C0.817781 10.063 0.576428 12.5135 1.04668 14.8777C1.51694 17.2418 2.67769 19.4134 4.38214 21.1179C6.08659 22.8223 8.2582 23.9831 10.6223 24.4533C12.9865 24.9236 15.437 24.6822 17.664 23.7598C19.8909 22.8373 21.7944 21.2752 23.1335 19.271C24.4727 17.2668 25.1875 14.9105 25.1875 12.5C25.1835 9.26891 23.8981 6.17131 21.6134 3.88659C19.3287 1.60186 16.2311 0.316531 13 0.3125ZM17.6875 13.4375H13.9375V17.1875C13.9375 17.4361 13.8387 17.6746 13.6629 17.8504C13.4871 18.0262 13.2486 18.125 13 18.125C12.7514 18.125 12.5129 18.0262 12.3371 17.8504C12.1613 17.6746 12.0625 17.4361 12.0625 17.1875V13.4375H8.3125C8.06386 13.4375 7.82541 13.3387 7.64959 13.1629C7.47378 12.9871 7.375 12.7486 7.375 12.5C7.375 12.2514 7.47378 12.0129 7.64959 11.8371C7.82541 11.6613 8.06386 11.5625 8.3125 11.5625H12.0625V7.8125C12.0625 7.56386 12.1613 7.3254 12.3371 7.14959C12.5129 6.97377 12.7514 6.875 13 6.875C13.2486 6.875 13.4871 6.97377 13.6629 7.14959C13.8387 7.3254 13.9375 7.56386 13.9375 7.8125V11.5625H17.6875C17.9361 11.5625 18.1746 11.6613 18.3504 11.8371C18.5262 12.0129 18.625 12.2514 18.625 12.5C18.625 12.7486 18.5262 12.9871 18.3504 13.1629C18.1746 13.3387 17.9361 13.4375 17.6875 13.4375Z"
          fill="#AD28EB"
        />
      </svg>
    );
  }
}
