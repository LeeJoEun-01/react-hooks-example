import React from "react"

// props를 넣어주는 hoc
export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };

    render() {
      const { hasMounted } = this.state; //상태를 만들고 
      return <Component {...this.props } hasMounted={hasMounted} /> //props로 보내진다. 
    }
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`;

  return NewComponent;
}