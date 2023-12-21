import React, { Component } from "react";

type Props = {};

type State = {};

export default class Pointer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
        >
          <g filter="url(#filter0_d_1_34)">
            <path
              d="M7.45613 8.7498V13.6248C7.30392 13.4799 5.30097 11.5775 5.10412 11.504C4.90727 11.4305 4.69757 11.3976 4.48766 11.4072C4.27774 11.4168 4.07195 11.4688 3.88264 11.56C3.69334 11.6512 3.52445 11.7798 3.38613 11.938C3.1313 12.2289 2.99375 12.6041 3.00022 12.9908C3.00669 13.3774 3.15672 13.7478 3.42113 14.03L9.36313 20.368C9.74213 20.771 10.2691 21 10.8221 21H15.4561C17.8561 21 19.4561 19 19.4561 17V8.429"
              fill="black"
            />
            <path
              d="M7.45613 8.7498V13.6248C7.30392 13.4799 5.30097 11.5775 5.10412 11.504C4.90727 11.4305 4.69757 11.3976 4.48766 11.4072C4.27774 11.4168 4.07195 11.4688 3.88264 11.56C3.69334 11.6512 3.52445 11.7798 3.38613 11.938C3.1313 12.2289 2.99375 12.6041 3.00022 12.9908C3.00669 13.3774 3.15672 13.7478 3.42113 14.03L9.36313 20.368C9.74213 20.771 10.2691 21 10.8221 21H15.4561C17.8561 21 19.4561 19 19.4561 17V8.429"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4561 9V8.429C16.4561 6.143 19.4561 6.143 19.4561 8.429M13.4561 9V7.286C13.4561 5 16.4561 5 16.4561 7.286V9M10.4561 9V6.5C10.4561 4.214 13.4561 4.214 13.4561 6.5V9M7.45605 13.571V2.5C7.45605 2.10218 7.61409 1.72064 7.89539 1.43934C8.1767 1.15804 8.55823 1 8.95605 1C9.78405 1 10.4561 1.67 10.4561 2.499V9"
              fill="black"
            />
            <path
              d="M19.4561 8.429C19.4561 6.143 16.4561 6.143 16.4561 8.429V9V7.286C16.4561 5 13.4561 5 13.4561 7.286V9V6.5C13.4561 4.214 10.4561 4.214 10.4561 6.5V9V2.499C10.4561 1.67 9.78405 1 8.95605 1C8.55823 1 8.1767 1.15804 7.89539 1.43934C7.61409 1.72064 7.45605 2.10218 7.45605 2.5V13.571"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_34"
              x="0.5"
              y="0.5"
              width="21.4562"
              height="25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_34"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_34"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}
