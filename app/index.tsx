import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Swiper from "react-native-swiper";



const HomeScreen = () => {
  const slides = [
    {
      title: "Fiinafas",
      description:
        "Lorem ipsum dolor sit t.",
      background: require("../assets/images/welcom_screen/home_screen_01.png"),
      icon: require("../assets/images/logos/fiinafas_logo_gray.png"),
    },
    {
      title: "Fiinafas",
      description:
        "Lorem re magna aliquam erat volutpat.",
      background: require("../assets/images/welcom_screen/home_screen_02.png"),
      icon: require("../assets/images/logos/fiinafas_logo_gray.png"),
    },
    {
      title: "Fiinafas",
      description:
        "reet dolore magna aliquam erat volutpat.",
      background: require("../assets/images/welcom_screen/home_screen_03.png"),
      icon: require("../assets/images/logos/fiinafas_logo_pink.png"),
    },
    {
      title: "Fiinafas",
      description:
        "Lorem volutpat.",
      background: require("../assets/images/welcom_screen/home_screen_04.png"),
      icon: require("../assets/images/logos/fiinafas_logo_pink.png"),
    },
    {
      title: "Fiinafas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscitpat.",
      background: require("../assets/images/welcom_screen/home_screen_01.png"),
      icon: require("../assets/images/logos/fiinafas_logo_gray.png"),
    },
  ];

  return (
    <Swiper
      style={styles.wrapper}
      loop={true} // Désactiver le swipe infini
      showsPagination={true} // Indique les points pour la navigation
      activeDotColor="#FFFFFF"
      autoplay={false} // Garde le swipe manuel
      showsButtons={true}
    >

    {/*<ImageBackground
        source={slides[0].background}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.iconContainer}>
          <Image source={slides[0].icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{slides[0].title}</Text>
        <Text style={styles.description}>{slides[0].description}</Text>
      </ImageBackground>

    <ImageBackground
        source={slides[1].background}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.iconContainer}>
          <Image source={slides[1].icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{slides[1].title}</Text>
        <Text style={styles.description}>{slides[1].description}</Text>
      </ImageBackground>

    <ImageBackground
        source={slides[2].background}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.iconContainer}>
          <Image source={slides[2].icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{slides[2].title}</Text>
        <Text style={styles.description}>{slides[2].description}</Text>
      </ImageBackground>

    <ImageBackground
        source={slides[3].background}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.iconContainer}>
          <Image source={slides[3].icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{slides[3].title}</Text>
        <Text style={styles.description}>{slides[3].description}</Text>
      </ImageBackground> */}

      {/* <View>

        {slides.map((slide, index) => (
        <ImageBackground
          key={index}
          source={slide.background}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay} />
          <View style={styles.iconContainer}>
            <Image source={slide.icon} style={styles.icon} />
          </View>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </ImageBackground>
        ))}

      </View> */}

      {slides.map((slide, index) => (
        <ImageBackground
          key={index}
          source={slide.background}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay} />
          <View style={styles.iconContainer}>
            <Image source={slide.icon} style={styles.icon} />
          </View>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </ImageBackground>
        ))}

    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 250,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(231, 76, 60, 0.6)",
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  description: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 30,
  },
});

export default HomeScreen;
