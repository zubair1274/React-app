import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'

class Dashboard extends React.Component {
    state = {
        text: ''
    }
    submitText = () => {
        console.log(this.state.text)
    }
    errorText() {
        return (
            <div class="ui error message"> <h1>Please enter some data in field</h1></div>
        )
    }
    render() {
        console.log(this.state.text.length)
        return (

            <form class="ui form segment">
                <p>Let's go ahead and get you signed up.</p>
                <div class="field">
                    <label>Dog</label>
                    <input placeholder="Dog" name="dog" type="text" onChange={(text) => this.setState({ text })} />
                </div>

                <div class="ui primary submit button" onClick={() => this.submitText()}>
                    <i class="add icon"></i>
                    Add Dog
  </div>
  <div class="ui  message"> <h1>Please enter some data in field</h1></div>

                {/* {
                    this.state.text.length < 1 ?
                      : null
                } */}
            {
                this.errorText()
            }
            </form>
        )
    }
}
export default Dashboard