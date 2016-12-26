import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount()
  {
    var url = "http://localhost:53385/api/contact";
    Request.get(url).then((response) =>
    {
      this.setState({
            contacts: response.body
        });
    });
  }

  render()
  {
    var contacts = _.map(this.state.contacts, (contact) => {
      return <li>{contact.Id}: {contact.Name}</li>
    });
    return <div><input ref="textBox" type="text" />
    <ul>{contacts}</ul>
    </div>
  }
}

 export default App;
