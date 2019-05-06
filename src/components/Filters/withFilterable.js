import React, { Component } from 'react'

export function withFilterable (BaseComponent) {
    return class WithFilterable extends Component {
      handleChange = (e) => {
        const { target: { value, name } } = e

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
