import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Card,
  CardHeader,
  CardText,
  TextField,
  Checkbox,
  RaisedButton
} from "material-ui";
import { connect } from "react-redux";

import { save } from "./actionSave";

import "./App.css";

class App extends Component {
  state = {
    local: false
  };

  _changeSave() {
    this.setState(old => {
      return {
        local: !old.local
      };
    });
  }

  _saveData() {
    const {
      company_name,
      company_city,
      company_address,
      employee_email,
      employee_name,
      employee_phone_number,
      local
    } = this.state;

    this.props.dispatch(save({
      company_name,
      company_city,
      company_address,
      employee_name,
      employee_email,
      employee_phone_number,
      local
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Card>
            <CardHeader title="Workplace info" />
            <CardText>
              <div>
                <TextField
                  name="company_name"
                  floatingLabelText="Company name"
                  fullWidth={true}
                  defaultValue={this.props.company_name}
                  onChange={e =>
                    this.setState({ company_name: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  name="company_city"
                  floatingLabelText="City"
                  fullWidth={true}
                  onChange={e =>
                    this.setState({ company_city: e.target.value })
                  }
                  defaultValue={this.props.company_city}
                />
              </div>
              <div>
                <TextField
                  name="company_address"
                  floatingLabelText="Address"
                  fullWidth={true}
                  onChange={e =>
                    this.setState({ company_address: e.target.value })
                  }
                  defaultValue={this.props.company_address}
                />
              </div>
            </CardText>
          </Card>
          <br />
          <Card>
            <CardHeader title="Employee info" />
            <CardText>
              <div>
                <TextField
                  name="employee_name"
                  floatingLabelText="Name"
                  fullWidth={true}
                  onChange={e =>
                    this.setState({ employee_name: e.target.value })
                  }
                  defaultValue={this.props.employee_name}
                />
              </div>
              <div>
                <TextField
                  name="employee_email"
                  floatingLabelText="Email"
                  fullWidth={true}
                  onChange={e =>
                    this.setState({ employee_email: e.target.value })
                  }
                  defaultValue={this.props.employee_email}
                />
              </div>
              <div>
                <TextField
                  name="employee_phone_number"
                  floatingLabelText="Phone number"
                  fullWidth={true}
                  defaultValue={this.props.employee_phone_number}
                  onChange={e =>
                    this.setState({ employee_phone_number: e.target.value })
                  }
                />
              </div>
            </CardText>
          </Card>
          <div className="actions">
            <div>
              <Checkbox
                label="Save to local storage"
                checked={this.state.local}
                onCheck={() => this._changeSave()}
              />
            </div>
            <RaisedButton
              label="Save"
              primary
              onClick={() => this._saveData()}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

App = connect(mapStateToProps)(App);

export default App;
