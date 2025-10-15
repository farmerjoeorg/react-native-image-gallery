import React, { PureComponent } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

export class PaddedScrollView extends PureComponent<> {
  constructor (props) {
    super(props);
    this.scrollViewRef = React.createRef();
  }

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
    return <ScrollView ref={this.scrollViewRef} {...restProps} children={wrapper}/>
  }

  scrollTo () {
    return this.scrollViewRef.current.scrollTo.apply(this.scrollViewRef.current, arguments)
  }

  scrollToEnd () {
    return this.scrollViewRef.current.scrollToEnd.apply(this.scrollViewRef.current, arguments)
  }

  scrollWithoutAnimationTo () {
    return this.scrollViewRef.current.scrollWithoutAnimationTo.apply(this.scrollViewRef.current, arguments)
  }

  flashScrollIndicators () {
    return this.scrollViewRef.current.flashScrollIndicators.apply(this.scrollViewRef.current, arguments)
  }

}