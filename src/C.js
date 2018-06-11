import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';

import A from './A';
import B from './B';
import App from './App';

class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            pathname : props.location.pathname
        };

    }

    // 这一步是重点
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.props.location.pathname === '/ina'}
                        badge={1}
                        onPress={() => {
                            this.context.router.history.push("/ina");
                        }}
                        data-seed="logId"
                    >
                        {<A/>}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.props.location.pathname === '/inb'}
                        onPress={() => {
                            this.context.router.history.push("/inb");
                        }}
                        data-seed="logId1"
                    >
                        {<B/>}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export {C as default}