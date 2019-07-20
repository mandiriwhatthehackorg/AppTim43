import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageStyle, TextStyle, ViewStyle, Dimensions, Platform  } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
}

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(275);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const slideInnerContainer: ViewStyle = {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
}
const shadow: ViewStyle = {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
}
const imageContainer: ImageStyle = {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'green',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
}
const imageContainerEven: ViewStyle = {
    backgroundColor: colors.black
}
const image: ImageStyle = {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
}
// image's border radius is buggy on iOS; let's hack it!
const radiusMask: ViewStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
}
const radiusMaskEven: ViewStyle = {
    backgroundColor: colors.black
}
const textContainer: ViewStyle = {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
}
const textContainerEven: ViewStyle = {
    backgroundColor: colors.black
}
const title: TextStyle = {
    color: colors.black,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5
}
const titleEven: TextStyle = {
    color: 'white'
}
const subtitle: TextStyle = {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
}
const subtitleEven: TextStyle = {
    color: 'rgba(255, 255, 255, 0.7)'
}

// const safeArea: ViewStyle = {
//   flex: 1,
//   backgroundColor: colors.black
// }
// const container: ViewStyle = {
//   flex: 1,
//   backgroundColor: colors.background1
// }
// const gradient: ViewStyle = {
//   ...StyleSheet.absoluteFillObject
// }
// const scrollview: ViewStyle = {
//   flex: 1
// }
// const exampleContainer: ViewStyle = {
//   paddingVertical: 30
// }
// const exampleContainerDark: ViewStyle = {
//   backgroundColor: colors.black
// }
// const exampleContainerLight: ViewStyle = {
//   backgroundColor: 'white'
// }
// const title: TextStyle = {
//   paddingHorizontal: 30,
//   backgroundColor: 'transparent',
//   color: 'rgba(255, 255, 255, 0.9)',
//   fontSize: 20,
//   fontWeight: 'bold',
//   textAlign: 'center'
// }
// const titleDark: TextStyle = {
//   color: colors.black
// }
// const subtitle: TextStyle = {
//   marginTop: 5,
//   paddingHorizontal: 30,
//   backgroundColor: 'transparent',
//   color: 'rgba(255, 255, 255, 0.75)',
//   fontSize: 13,
//   fontStyle: 'italic',
//   textAlign: 'center'
// }
// const slider: ViewStyle = {
//   marginTop: 15,
//   overflow: 'visible' // for custom animations
// }
// const sliderContentContainer: ViewStyle = {
//   paddingVertical: 10 // for custom animation
// }
// const paginationContainer: ViewStyle = {
//   paddingVertical: 8
// }
// const paginationDot: ViewStyle = {
//   width: 8,
//   height: 8,
//   borderRadius: 4,
//   marginHorizontal: 8
// }

export default class SliderEntry extends React.Component<any, any> {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image () {
    const { data: { illustration }, parallax, parallaxProps, even } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[imageContainer, even ? imageContainerEven : {}]}
        style={image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image
        source={{ uri: illustration }}
        style={image}
      />
    );
  }

  render () {
    const { data: { title, subtitle }, even } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[title, even ? titleEven : {}]}
        numberOfLines={2}
      >
          { title.toUpperCase() }
      </Text>
    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={slideInnerContainer}
        onPress={() => { alert(`You've clicked '${title}'`); }}
      >
        <View style={shadow} />
        <View style={[imageContainer, even ? imageContainerEven : {}]}>
          { this.image }
          <View style={[radiusMask, even ? radiusMaskEven : {}]} />
        </View>
        <View style={[textContainer, even ? textContainerEven : {}]}>
          { uppercaseTitle }
          <Text
            style={[subtitle, even ? subtitleEven : {}]}
            numberOfLines={2}
          >
            { subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}