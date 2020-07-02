import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as action from "../../store/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Router from "../../router";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Loading from "../../pages/Loading/Loading";
import styles from "./Layout.module.css";

class Layout extends PureComponent {
  state = {
    openSidebar: true,
  };

  componentDidMount() {
    this.props.initialization();
  }

  siderbarHandler = () => {
    this.setState((prevState) => {
      return { openSidebar: !prevState.openSidebar };
    });
  };
  render() {
    return this.props.initialized ? (
      <React.Fragment>
        <Topbar toggleSidebar={this.siderbarHandler} />
        <Sidebar openSidebar={this.state.openSidebar} />
        <div
          className={
            this.state.openSidebar
              ? styles.contentsArea
              : styles.contentsAreaFullWidth
          }
        >
          <Breadcrumb />
          <Router />
        </div>
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.bangumiData.initialized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialization: () => dispatch(action.initialization()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
