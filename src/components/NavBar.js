import React, { Component } from "react";
import { Link } from "react-router-dom";

// export class NavBar extends Component {

//   render() {
//     return (
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">NewsMonkey</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link" to="/business">Business</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/general">General</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/health">Health</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/science">Science</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/sports">Sports</Link> </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/technology">Technology</Link> </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       </div>
//     )
//   }
// }

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className='row justify-content-center mb-3' style={{marginTop: '100px'}}>
      <div className="col-md-12" >
        <div className="card shadow-0 border rounded-3" >
          <div className="card-body" >
            <div className="row" >
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0" >
                <div className="bg-image hover-zoom ripple rounded ripple-surface" >
                  <img src={props.imageUrl} className="w-100" />
                  <a href="#!">
                    <div className="hover-overlay" >
                      <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }} ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="" bis_skin_checked="1">
                <h5 className='m'>{props.title}</h5>
                <div className="mt-1 mb-0 text-muted small" bis_skin_checked="1">
                  {props.badges}
                  <br />
                </div>
                <div className="mb-2 text-muted small" bis_skin_checked="1">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>Casual<br /></span>
                </div>
                <p className="mb-4 mb-md-0">
                  {props.description}
                </p>
              </div>
              <div className="border-sm-start-none border-start" >
                <div className="d-flex flex-column mt-4 align-items-end">
                  <button className="btn btn-primary btn-sm" style={{width: '20%'}} type="button">Make Offer</button>
                  <button className="btn btn-outline-primary btn-sm mt-2" style={{width: '20%'}} type="button">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    </div>

    
  );
};

export default NavBar;
