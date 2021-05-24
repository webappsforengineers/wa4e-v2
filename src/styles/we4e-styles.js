import { css } from 'lit-element';

export const we4eStyles = css`

  .centred {
    margin-left: auto;
    margin-right: auto;
    display: table;
  }

  .container {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .menu-item h2 {
    size: 0.8em;
  }

  .header {
    width: auto;
    height: 60px;
    background: #03a9f4;
    color: white;
    justify-content: space-between;
    padding: 16px;
    display: flex;
  }

  .header-font {
    font-family: 'RobotoDraft', sans-serif;
    color: white;
    font-size: 20px;
    justify-content: right;
  }
  .title-font {
    font-family: 'RobotoDraft', sans-serif;
    color: white;
    font-size: 30px;
    justify-content: center;
  }

  .footer {
    margin-top: 16px;
    color: rgb(100, 100, 100);
    margin-bottom: 16px;
    justify-content: left;
    padding: 16px;
    display: flex;
  }

  .footer-hr {
    border: 0 none;
    height: 1px;
    background-color: rgb(150, 150, 150);
  }

  .footer-text {
    margin-left: 16px;
    margin-right: 16px;
    font-family: 'RobotoDraft', sans-serif;
  }

  .main-menu-figure {
    width: auto;
    height: 65px;
  }

  .main-menu-card-container {
    overflow: auto;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
  }

  .main-menu-ncv {
    background-color: #a6d686;
  }

  .main-menu-vhm {
    background-color: #75dff4;
  }

  .main-menu-drag-anchor {
    background-color: #ffae75;
  }

  .main-menu-caisson {
    background-color: #f4e786;
  }

  .main-menu-consolidated-ncv {
    background-color: #9a76c1;
  }

  .main-menu-vh2m2t {
    background-color: #c1476a;
  }

  .main-menu-pipe {
    background-color: #6fb072;
  }

  .main-menu-mcc-su {
    background-color: #f1c04c;
  }

  .main-menu-zti {
    background-color: #ed5151;
  }

  .main-menu-pinpiles {
    background-color: #698ef1;
  }

  .main-menu-lap {
    background-color: #f492e3;
  }

  .main-menu-papers {
    background-color: #c1b899;
  }

  .main-menu-card-title {
    margin-top: 16px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    height: 45px;
  }

  .main-menu-card-description {
    margin-top: 16px;
    font-size: 14px;
  }

  /*general card style*/
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }

  /*app card style*/
  .app-card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px; /* 5px rounded corners */
  }

  /* General button style */
  .btn {
    border: none;
    border-radius: 5px; /* 5px rounded corners */
    font-family: 'Lato',serif;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 10px 10px;
    display: inline-block;
    margin: 2px 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;

  }

  .btn:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  /* Pseudo elements for icons */
  .btn:before {
    font-family: 'FontAwesome',serif;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }


  /* Icon separator */
  .btn-sep {
    padding: 25px 60px 25px 120px;
  }

  .btn-sep:before {
    background: rgba(0,0,0,0.15);
  }

  /* Button 1 */
  .btn-1 {
    background: #3498db;
    color: #fff;
  }

  .btn-1:hover {
    background: #2980b9;
  }

  .btn-1:active {
    background: #2980b9;
    top: 2px;
  }

  .btn-1:before {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 3;
    font-size: 140%;
    width: 60px;
  }

  /* Button 2 */
  .btn-2 {
    background: #2ecc71;
    color: #fff;
  }

  .btn-2:hover {
    background: #27ae60;
  }

  .btn-2:active {
    background: #27ae60;
    top: 2px;
  }

  .btn-2:before {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 3;
    font-size: 140%;
    width: 60px;
  }
`;

export const we4eGrids = css`
  .grid-container {
    display: grid;
    grid-column: var(--x);
    grid-row: var(--y);
    background-color: rgb(100, 100, 100);
    padding: 10px;
  }
  .grid-item {
    background-color: white;
    grid-column-start: var(--xstart);
    grid-row-start: var(--ystart);
    grid-column-end: var(--xend);
    grid-row-end: var(--yend);
  }
`;
