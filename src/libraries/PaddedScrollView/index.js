import React, { PureComponent } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

export class PaddedScrollView extends PureComponent<> {
  render () {
    const {children, leftPadding, offset, ...restProps} = this.props

    // console.log('paddingLeft', paddingLeft)
    //
    // let childPositions = []
    // const log = (i, x) => {
    //   childPositions.push(x)
    //   if (i === children.length - 1 && children.length > 1) {
    //     console.log(childPositions.slice(1).reduce((a, pos, j) => {
    //       a.push(pos - childPositions[j])
    //       return a
    //     }, []))
    //   }
    // }

    const wrapper = <View
      style={{
        minWidth:      leftPadding,
        paddingLeft:   offset,
        flexDirection: 'row'
      }}
    >
      {children}
      {/*{React.Children.map(children, (child, i) => React.cloneElement(child, {*/}
      {/*onLayout: (e) => {*/}
      {/*log(i, e.nativeEvent.layout.x)*/}

      {/*if (child.props.onLayout) {*/}
      {/*child.props.onLayout(e)*/}
      {/*}*/}
      {/*}*/}
      {/*}))}*/}
    </View>
    return <ScrollView ref="scrollView" {...restProps} children={wrapper}/>
  }

  scrollTo () {
    return this.refs.scrollView.scrollTo.apply(this.refs.scrollView, arguments)
  }

  scrollToEnd () {
    return this.refs.scrollView.scrollToEnd.apply(this.refs.scrollView, arguments)
  }

  scrollWithoutAnimationTo () {
    return this.refs.scrollView.scrollWithoutAnimationTo.apply(this.refs.scrollView, arguments)
  }

  flashScrollIndicators () {
    return this.refs.scrollView.flashScrollIndicators.apply(this.refs.scrollView, arguments)
  }

}