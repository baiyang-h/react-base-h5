import React from 'react'
import './index.scss'
import { TabBar } from 'antd-mobile';
import Home from 'pages/home'
import Scene from "layout/scene"

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'scene',
            hidden: false,
            fullScreen: false,
        };
    }

    render() {
      const { history } = this.props;
        return (
            <div className="layout" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div></div>}
                        selectedIcon={<div></div>}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                          history.push('/home')
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                        data-seed="home"
                    >
                        <Home />
                    </TabBar.Item>
                    <TabBar.Item
                        title="场景"
                        key="scene"
                        icon={<div></div>}
                        selectedIcon={<div></div>}
                        selected={this.state.selectedTab === 'scene'}
                        onPress={() => {
                          history.push('/scene')
                          this.setState({
                                selectedTab: 'scene',
                            });
                        }}
                        data-seed="scene"
                    >
                        <Scene />
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Layout