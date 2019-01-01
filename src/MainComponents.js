import React, {Component} from 'react';
import Navigation from './Navigation.js'
import PerformanceGraph from './PerformanceGraph'

class MainComponents extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:this.props.user
        }
    }
    render()
    {
        return(
            <>
            <Navigation user={this.state.user}/>
            <PerformanceGraph user={this.state.user}/>
            </>
        )
    }
}
export default MainComponents