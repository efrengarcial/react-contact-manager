// src/pages/contact-list-page

import React, { Component} from 'react';
import ContactList from '../components/contact-list';
import { fetchContacts } from '../actions/contact-actions';
import ReduxContainerHOC from '../buildReduxContainer'

class ContactListPage extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contacts}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts
  }
}

//export default connect(mapStateToProps, {fetchContacts})(ContactListPage);

export default ReduxContainerHOC(ContactListPage, mapStateToProps, {fetchContacts})