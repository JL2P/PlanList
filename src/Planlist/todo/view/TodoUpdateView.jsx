import React, { Component } from 'react';
import "./TodoView.scss";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Label,
    Grid,
    Container,
    GridColumn
  } from 'semantic-ui-react'
import TodoView from './TodoView';
  /* 카테고리 */
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
class TodoUpdateView extends Component {
    state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
     <Container fluid>
      <div className="todo__updatePage">
        <div className="todo__content">
      <Form>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
          <aside>
           <label>글제목</label>
          </aside>
          </Grid.Column>
          <Grid.Column>
          <Form.Field
            control={Input}
        
            placeholder='글 제목'
          />
          </Grid.Column >
          </Grid.Row>
          <Grid.Row columns={2}>
          <Grid.Column width={1}>
          <aside>
           <label>카테고리</label>
          </aside>
          </Grid.Column>
          <Grid.Column>
          
          <Form.Field
            control={Select}
     
            options={options}
            placeholder='카테고리'
          />
       </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
          <aside>
           <label>무슨일할까 </label>
          </aside>
          </Grid.Column>
          <Grid.Column>
        <Form.Field
          control={TextArea}
          placeholder='할 일 작성..'
        />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
          <aside>
           <label></label>
          </aside>
          </Grid.Column>
          <Grid.Column>
        <div className="todo__checkbox_success">  
        <Form.Field
          control={Checkbox}
          label='완료'
        />
        </div> 
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
          <Grid.Column>
          </Grid.Column>
          <div className="todo__button_save">
        <Form.Field 
          control={Button}>저장
        </Form.Field>
         </div>
        </Grid.Column>
        </Grid.Row>
        </Grid>  
      </Form>
      </div>
      </div>
      </Container>
    )
  }
}

export default TodoUpdateView;