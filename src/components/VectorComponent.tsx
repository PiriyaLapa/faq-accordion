import { Component, ReactNode } from "react";

export default class VectorLine extends Component {
  render(): ReactNode {
    return (
      <svg
        width="1440"
        height="320"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-676 -182C-454 -10 -396.863 71.8879 -197.5 143.5C-99 178.882 -36.9186 170.726 -4.75116 170.108C99.736 168.098 199.858 126.871 293.882 84.6127C332.236 67.3751 369.764 48.4241 405.945 26.9834C429.848 12.8185 464.815 -6.93034 470.666 -37.4376C472.986 -49.5388 454.297 -49.6765 446.895 -47.2256C433.384 -42.7518 420.945 -30.6817 410.839 -21.5571C391.708 -4.28419 373.777 14.3914 357.604 34.4742C323.876 76.3568 289.57 134.721 323.446 186.488C340.733 212.903 367.386 232.181 395.558 245.615C451.74 272.406 514.763 284.357 576.336 289.761C740.774 304.193 905.3 286.3 1059.34 226.139C1139.1 194.991 1217.89 155.6 1283.57 99.8939C1332.13 58.7077 1386.37 3.3457 1394.23 -63.0062C1405.16 -155.193 1300.19 -199.068 1224.94 -211.424C1163.53 -221.508 1101.19 -215.588 1040.87 -201.836C962.608 -183.996 891.864 -154.166 826.629 -107.452C696.627 -14.359 591.679 120.961 554.163 278.375C538.523 344 537.515 416.585 559.656 480.926C581.108 543.264 628.852 591.502 683.704 625.849C748.821 666.623 820.865 687.989 896.543 699.059C997.017 713.755 1099.36 711.292 1199.57 696.062C1375.74 669.29 1552.3 607.631 1704.75 514.985C1807.97 452.26 1904.05 380.835 1984.81 290.56C2002.51 270.767 2016.62 249.685 2028.55 226.039C2172.11 -58.5 2095.5 -145.528 2095.5 -151"
          stroke="#AD28EB"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    );
  }
}
