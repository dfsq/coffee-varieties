import React, { Component } from 'react'

export function withFilterable (name) {
  return function (BaseComponent) {
    return class WithFilterable extends Component {
      handleChange = (e) => {
        const { target: { value } } = e

        this.props.filterChange({
          name,
          value,
        })
      }

      render () {
        return (
          <BaseComponent
            {...this.props}
            handleChange={this.handleChange}
          />
        )
      }
    }
  }
}
