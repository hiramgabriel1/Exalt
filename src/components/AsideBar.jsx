import React from "react";
import ButtonShowSideBar from "./ButtonShowSideBar";

function AsideBar() {
  return (
    <div className="main">
      <aside id="main-sidebar" className="main-sidebar dont-show">
        <div className="main-sidebar__logo-brand">
          <div className="main-sidebar__logo">
            <i className="main-sidebar__logo-icon fas fa-fire"></i>
            <span className="main-sidebar__logo-text">Arxis 1.0</span>
            <button data-toggle="main-view" onClick={toggleSidebar}>
              hidde me
            </button>
          </div>
        </div>
        <div className="main-sidebar__wrapper">
          <ul className="nav-main">
            <li className="nav-group-heading">
              <span>listar todos</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-link-icon fas fa-rocket"></i>
                <span className="nav-link-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-link-icon far fa-calendar-check"></i>
                <span className="nav-link-title">To-Do</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-link-icon fas fa-calendar"></i>
                <span className="nav-link-title">Calendar</span>
              </a>
            </li>
            <li className="nav-group-heading">
              <span>Creativos</span>
            </li>
            <li className="nav-item nav-item-mother open nav-has-dropdown">
              <a className="nav-link nav-link-mother" href="#">
                <i className="nav-link-icon fab fa-github"></i>
                <span className="nav-link-title">GitHub</span>
                <i className="nav-link-carrot fas fa-angle-down"></i>
              </a>
              <div className="nav-sub-list-collapse">
                <ul className="nav-sub-list">
                  <li>
                    <a className="nav-link active" href="">
                      <span className="nav-link-title">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      <span className="nav-link-title">Stats</span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      <span className="nav-link-title">Search User</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-item-mother">
              <a className="nav-link nav-link-mother" href="#">
                <i className="nav-link-icon fab fa-twitter"></i>
                <span className="nav-link-title">Twitter</span>
                <i className="nav-link-carrot fas fa-angle-down"></i>
              </a>
              <ul className="nav-sub-list">
                <li>
                  <a className="nav-link" href="#">
                    <span className="nav-link-title">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <span className="nav-link-title">Get tweets</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-group-heading">
              <span>Anime</span>
            </li>
            <li className="nav-item nav-item-mother">
              <a className="nav-link nav-link-mother" href="#">
                <i className="nav-link-icon fab fa-uikit"></i>
                <span className="nav-link-title">UI Elements</span>
                <i className="nav-link-carrot fas fa-angle-down"></i>
              </a>
              <ul className="nav-sub-list">
                <li>
                  <a className="nav-link" href="">
                    <span className="nav-link-title">Typography</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="">
                    <span className="nav-link-title">Buttons</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="">
                    <span className="nav-link-title">Forms</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-group-heading">
              <span>Custom Functions</span>
            </li>
            <li className="nav-item nav-item-mother">
              <a className="nav-link nav-link-mother" href="#">
                <i className="nav-link-icon fas fa-cogs"></i>
                <span className="nav-link-title">Settings</span>
                <i className="nav-link-carrot fas fa-angle-down"></i>
              </a>
              <ul className="nav-sub-list">
                <li>
                  <a className="nav-link" href="">
                    <span className="nav-link-title">General</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="">
                    <span className="nav-link-title">Theme</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
} 
export default AsideBar
