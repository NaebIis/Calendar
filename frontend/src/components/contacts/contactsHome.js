import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ContactsHome extends React.Component {
  render() {
    return (
      <div className="contactNames">
        {this.props.contacts.map(contact => {
          return <p>{contact.name}</p>;
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsHome);
