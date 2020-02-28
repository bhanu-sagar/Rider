import React, { Component } from "react";
import { View, Animated, Text } from "react-native";

import { keyframes, stagger } from "popmotion";
import styles from "./styles";

// import { keyframes, stagger } from "react-native-pose";

const COUNT = 5;
const DURATION = 7000;
const initalPhase = { scale: 0, opacity: 1 };
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initalPhase);

export default class RippleEffect extends Component {
  state = {
    animations: constructAnimations()
  };

  componentDidMount() {
    this.animateCircles();
  }

  animateCircles = () => {
    const actions = Array(COUNT).fill(
      keyframes({
        values: [initalPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity
      })
    );

    stagger(actions, DURATION / COUNT).start(animations => {
      this.setState({ animations });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.animations.map(({ opacity, scale }, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{ scale }],
                  opacity
                }
              ]}
            />
          );
        })}
      </View>
    );
  }
}
