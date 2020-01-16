import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NabBar from "./navbar";
import SideBar from "./sidebar/sidebar";
import MainSection from "./main-section/mainSection";
import RightSideBar from "./right-sidebar/RightSideBar";

const DashbaordPage = ({ overlayData: { overlay } }) => {
  useEffect(() => {
    console.log(overlay);
  });
  return (
    <div>
      <NabBar />
      <main>
        <div className={`main-section ${overlay}`}>
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                  <SideBar />
                </div>
                <div className="col-lg-6 col-md-8 no-pd">
                  <MainSection />
                </div>
                <div className="col-lg-3 pd-right-none no-pd">
                  <RightSideBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
DashbaordPage.propTypes = {
  overlayData: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  overlayData: state.overlayReducer
});
export default connect(
  mapStateToProps,
  {}
)(DashbaordPage);
