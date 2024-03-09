import React from 'react';

interface IProps {
    children?: JSX.Element
}

interface IState {
    hasError: boolean
}

class ErrorBoundry extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // componentDidCatch(error, info)
    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1> Ooops! That is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;