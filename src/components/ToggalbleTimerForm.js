import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
class ToggalbleTimerForm extends Component {
    render() {
        return (
            <div className='toggleTimer'>
                <Icon name='plus square outline' size='big'  />
            </div>
        );
    }
}

export default ToggalbleTimerForm;