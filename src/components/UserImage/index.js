import React, { Component } from 'react';
import { connect } from 'react-redux';
import addUserImage from './ace-0.jpg';
import './UserImage.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBase64: props.photo,
      isLoading: false,
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    let that = this;
    const file = event.target.files[0];

    var reader = new FileReader();
    that.setState(Object.assign({}, that.state, {isLoading: true}));
		reader.onload = function(upload){
      const imageBase64 = upload.target.result;
			that.setState(Object.assign({
          imageBase64: imageBase64,
          isLoading: false,
      }));
      that.props.onChange(imageBase64);
		};
		reader.readAsDataURL(file);
  }

  render() {
    const transitionOptions = {
      transitionName:"UserImage",
      transitionAppear:true,
      transitionEnter:false,
      transitionLeave:false,
      transitionAppearTimeout:3000,
      transitionLeaveTimeout:2500,
      transitionEnterTimeout:2500,
  };
    const isEditing = this.props.isEditing;
    
    let image;
    if (this.state.imageBase64) {
      image = (
        <div className="user-image__wrapper">
          <img src={this.state.imageBase64} alt="" />
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup {...transitionOptions}>
      <div className="user-image" style={{backgroundImage: `url('https://mohamed0group.github.io/acegroup/avatar.jpg')`}}>

        {image}

        {isEditing &&
          <form encType="multipart-formdata"
            onSubmit={this._handleSubmit}
            onDragEnter={()=>console.log('drag enter')}
            onDrop={()=>console.log('drop')} >

            <input title="Change Photo"
              className="user-image__input-file"
              type="file"
              accept="image/*"
              onChange={this._handleSubmit} />

          </form>
        }

      </div>
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const UserImageConnected = connect(
  mapStateToProps
)(UserImage);

export default UserImageConnected;
