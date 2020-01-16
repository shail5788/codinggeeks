import React, { useState, Fragment } from "react";
import CreatePost from "./../createPost";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setOverLay, removeOverlay } from "../../../actions/overLayAction";
const PostTool = ({ setOverLay, removeOverlay }) => {
  const [active, setActive] = useState("inactive");
  const [isOpen, setIsOpen] = useState(false);
  const openPopUp = () => {
    setActive("active");
    setIsOpen(true);
    setOverLay("overlay");
  };
  return (
    <Fragment>
      <div className="post-topbar">
        <div className="user-picy">
          <img src="images/resources/user-pic.png" alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <button className="post_project" onClick={openPopUp}>
                Create Post
              </button>
            </li>
            {/* <li><button className="post-jb active">Post a Job</button></li> */}
          </ul>
        </div>
      </div>

      {isOpen ? (
        <CreatePost
          active={active}
          onHide={() => {
            setActive(false);
            removeOverlay();
          }}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};
PostTool.propTypes = {
  setOverLay: PropTypes.func.isRequired,
  removeOverlay: PropTypes.func.isRequired
};
// const mapStateToProps = state => ({
//   post: state
// });
export default connect(
  null,
  { setOverLay, removeOverlay }
)(PostTool);
