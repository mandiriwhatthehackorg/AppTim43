import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageStyle, TextStyle, ViewStyle, Dimensions, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import { spacing } from "../../theme"

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
const slideWidth = wp(75);
const itemHorizontalMargin = wp(1);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const slideInnerContainer: ViewStyle = {
    width: 220,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1
    }
}
const SHADOW: ViewStyle = {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    // shadowColor: colors.black,
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: entryBorderRadius,
    backgroundColor: "white"
}
const imageContainer: ImageStyle = {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    overflow: "hidden",
}
const IMAGE: ImageStyle = {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    width: "100%"
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
const textContainer: ViewStyle = {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
}
const TITLE: TextStyle = {
    color: "#1f5285",
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: spacing[2]
}
const titleEven: TextStyle = {
    color: 'white'
}
const SUBTITLE: TextStyle = {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
}
const subtitleEven: TextStyle = {
    color: 'rgba(255, 255, 255, 0.7)'
}

export default class SliderEntry extends React.Component<any, any> {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  }

  render () {
    const { data: { title, subtitle, illustration } } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={slideInnerContainer}
        onPress={() => { alert(`Anda memilih '${title}'`); }}
      >
        <View style={SHADOW} />
        <View style={imageContainer}>
          <Image
            source={ illustration }
            style={IMAGE}
          />
          <View style={radiusMask} />
        </View>
        <View style={textContainer}>
          <Text
            style={TITLE}
            numberOfLines={2}
          >
            { title.toUpperCase() }
          </Text>
          <Text style={SUBTITLE} numberOfLines={2}>
            { subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}