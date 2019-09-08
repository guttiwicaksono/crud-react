import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
 const data = {
  id: new Date(),
  title,
  message,
  editing: false
 }
 console.log(data);
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
}
render() {
return (
<div className="post-container">
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Title" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Note" /><br /><br />
   <button>Simpan</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);