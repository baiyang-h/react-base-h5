import React from 'react'
import {Grid, NavBar, Icon} from 'antd-mobile';
import './index.scss'
import { SceneRouter } from 'router'
import { useHistory } from "react-router-dom";
import {Switch, Route,} from "react-router-dom";

const data = SceneRouter.map(route => ({
  icon: route.icon,
  text: route.title,
  path: route.path
}))

function Scene() {

  const history = useHistory()

  const onGridClick = (row, index) => {
    history.push(row.path)
  }

  return <div className="scene">

    <NavBar
      mode="dark"
      icon={<Icon size="lg" type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" size="lg" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" size="lg" type="ellipsis" />,
      ]}
    >NavBar</NavBar>

    <Switch>
      <Route exact path='/scene'>
        <Grid
          data={data}
          activeClassName="active"
          hasLine={false}
          onClick={onGridClick}
        />
      </Route>
      {
        SceneRouter.map(route => {
          return <Route
            exact
            key={route.path}
            path={route.path}
          >
            <React.Suspense fallback={<div>Loading</div>}>
              <route.component/>
            </React.Suspense>
          </Route>
        })
      }
    </Switch>
  </div>
}

export default Scene