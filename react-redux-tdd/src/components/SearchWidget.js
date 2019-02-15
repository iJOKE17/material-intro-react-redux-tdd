import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class SearchWidget extends Component {
    render() {
        return (
            <div>
                <input
                type="text"
                className="search-widget"
                value={this.state.keyword}
                onChange={(e) => this.setState({ keyword: e.target.value})} />
            </div>
        )
    }
}