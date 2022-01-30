import React from "react";
// import { mount } from '@cypress/react' // or @cypress/vue
import { mount } from 'cypress-react-unit-test'
import LoginModal from './loginModal'

describe('loginModal', () => {

  it('renders loginModal', () => {
    mount(<LoginModal 
    />)
  })

//   it('contains the correct number of todos', () => {
//     const todos = [
//       { text: 'Buy milk', id: 1 },
//       { text: 'Learn Component Testing', id: 2 },
//     ]

//     mount(<TodoList todos={todos} />)

//     cy.get('[data-testid=todos]').should('have.length', todos.length)
//   })
})