import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as action from "../../store/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Router from "../../router";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styles from "./Layout.module.css";

class Layout extends PureComponent {
  state = {
    openSidebar: true,
  };

  componentDidMount() {
    this.props.initBangumiData();
  }

  siderbarHandler = () => {
    this.setState((prevState) => {
      return { openSidebar: !prevState.openSidebar };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar toggleSidebar={this.siderbarHandler} />
        <Sidebar openSidebar={this.state.openSidebar} />
        <div className={this.state.openSidebar ? styles.contentsArea : styles.contentsAreaFullWidth}>
          <Breadcrumb />
          <Router />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    years: state.bangumiData.years,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initBangumiData: () => dispatch(action.initBangumiData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
