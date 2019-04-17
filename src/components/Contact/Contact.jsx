import React from 'react';
import { Social } from '../Social/Social';
import './Contact.scss'

export default class Contact extends React.Component {

  state = {
    isLoading: true,
    sended: false,
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const sent = params.get('sent');

    this.setState({
      isLoading: false,
      sent
    });
  }

  render() {
    
    const { sent } = this.state;
    
    return (
      <div className="container fadein">
        <div className="contact">
          <h3 className="page-title">
            <span className="page-title__bars">{`<`}</span>Contact<span className="page-title__bars">{` />`}</span>
          </h3>

          {(sent) && <div className="message"><i className="fas fa-paper-plane" />Your message has been sent!</div>}

          <p>Send me a message. I'll be very glad answering you.</p>

          <form className="form" onSubmit={this.handleSubmit} action="https://formaholic.com/f/cdc3d08b40b9efab" method="POST" acceptCharset="UTF-8">
            <input type="text" name="name" placeholder="Your name" />
            <input type="email" name="email" placeholder="Your email address" />
            <textarea name="message" placeholder="Your message"></textarea>
            <div className="form__toRight">
              <button>Send</button>
            </div>
            <p className="get-in-touch">You can also get in touch with me by social medias: </p>
            <Social />
          </form>
        </div>
      </div>
    )
  }
}