import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const Tab = createBottomTabNavigator();

/* ================= HEADER ================= */

const HomeHeader = () => (
  <View style={styles.topBar}>
    <Text style={styles.logo}>Instagram</Text>
    <View style={{ flexDirection: "row", gap: 15 }}>
      <Ionicons name="heart-outline" size={24} />
      <Ionicons name="chatbubble-outline" size={24} />
    </View>
  </View>
);

/* ================= POST ================= */

const Post = ({ item }) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <View style={styles.row}>
        <Image source={{ uri: item.pfp }} style={styles.avatarSmall} />
        <Text style={styles.username}>{item.user}</Text>
      </View>
      <Ionicons name="ellipsis-horizontal" size={18} />
    </View>

    <Image source={{ uri: item.image }} style={styles.postImage} />

    <View style={styles.actions}>
      <View style={styles.row}>
        <Ionicons name="heart-outline" size={26} />
        <Ionicons name="chatbubble-outline" size={24} style={{ marginLeft: 10 }} />
        <Ionicons name="paper-plane-outline" size={24} style={{ marginLeft: 10 }} />
      </View>
      <Ionicons name="bookmark-outline" size={24} />
    </View>

    <Text style={styles.caption}>
      <Text style={{ fontWeight: "bold" }}>{item.user} </Text>
      {item.caption}
    </Text>
  </View>
);

/* ================= HOME SCREEN ================= */

function HomeScreen() {
  const posts = [
    {
      id: "1",
      user: "alishbah",
      pfp:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80",
      image:
        "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=612x612&w=0&k=20&c=IduORJUs1c1s0m2SXQANsK8IUhtlz8QApsLxNYOYrXQ=",
      caption: "Enjoying React Native 🚀",
    },
    {
      id: "2",
      user: "haneen",
      pfp:
        "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg?w=768",
      image:
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      caption: "UI practice 🎨",
    },
  ];

  const stories = [
    {
      name: "ALISHBA",
      pfp:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80",
    },
    {
      name: "HANEEN",
      pfp:
        "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg?w=768",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      {/* STORIES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyBar}
          contentContainerStyle={{
    paddingHorizontal: 10,
    paddingBottom: 20,
  }}
      >
        {stories.map((item, i) => (
          <View key={i} style={styles.story}>
            <View style={styles.storyRing}>
              <Image source={{ uri: item.pfp }} style={styles.storyImage} />
            </View>
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        ))}
        
      </ScrollView>

      {/* POSTS */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post item={item} />}
      />
    </SafeAreaView>
  );
}

/* ================= SEARCH SCREEN ================= */

function SearchScreen() {
  const images = [
    { id: "1", img: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { id: "2", img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" },
    { id: "3", img: "https://www.w3schools.com/w3css/img_mountains.jpg" },
    { id: "4", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { id: "5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQec72PVsuS1oPwkD6r4VEcAta2tzrFp2NORA&s" },
    { id: "6", img: "https://burst.shopifycdn.com/photos/beach-sunset-thailand.jpg?width=1000&format=pjpg&exif=0&iptc=0" },
    { id: "7", img: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { id: "8", img: "https://thumbs.dreamstime.com/b/old-house-beautiful-alpine-surroundings-tall-mountains-slovenia-scenic-countryside-landscape-selective-focus-450598814.jpg" },
    { id: "9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQG91yBsrQHD23Y_QQ6bSh6ioZ3Gm3P4268g&s" },
    { id: "10", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQec72PVsuS1oPwkD6r4VEcAta2tzrFp2NORA&s" },
    { id: "11", img: "https://www.w3schools.com/w3css/img_mountains.jpg" },
    { id: "12", img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-fall-nature-free-wallpaper-download-autumn-lake-evening-free-image.jpeg?w=600&quality=80" },
    { id: "13", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { id: "14", img: "https://t3.ftcdn.net/jpg/07/94/93/06/360_F_794930659_piZR378W6GaXrVG5k7pxhGxp072KHyUL.jpg" },
    { id: "15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQec72PVsuS1oPwkD6r4VEcAta2tzrFp2NORA&s" },
    { id: "16", img: "https://www.w3schools.com/w3css/img_snowtops.jpg" },
    { id: "17", img: "https://www.w3schools.com/w3css/img_mountains.jpg" },
    { id: "18", img: "https://www.w3schools.com/w3css/img_lights.jpg" },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.searchHeader}>
        <Text style={styles.headerTitle}>Search</Text>

        {/* SEARCH BAR */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="gray" />
          <Text style={styles.searchText}>Search users, posts...</Text>
        </View>
      </View>

      {/* GRID */}
      <View style={styles.grid}>
        {images.map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.img }}
            style={styles.gridImg}
          />
        ))}
      </View>

    </SafeAreaView>
  );
}

/* ================= PROFILE SCREEN ================= */

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileTopBar}>
        <Text style={styles.headerTitle}>alishbah</Text>
        <Ionicons name="menu" size={26} />
      </View>

      <View style={styles.profileInfo}>
        <Image
  source={{
    uri: "https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80",
  }}
  style={styles.avatarBig}
/>

        <View style={styles.stats}>
          <Text style={styles.statNum}>12</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statNum}>1.2K</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statNum}>180</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.bio}>Hello World!</Text>

      <View style={styles.grid}>
        {Array.from({ length: 1 }, (_, i) => (
          <Image
            key={i}
            source={{
              uri:
                "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=612x612&w=0&k=20&c=IduORJUs1c1s0m2SXQANsK8IUhtlz8QApsLxNYOYrXQ=",
            }}
            style={styles.gridImg}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

/* ================= NAVIGATION ================= */

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            let icon = "home";

            if (route.name === "Home") icon = "home";
            if (route.name === "Search") icon = "search";
            if (route.name === "Profile") icon = "person";

            return <Ionicons name={icon} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  logo: { fontSize: 22, fontWeight: "bold" },

  storyBar: { paddingHorizontal: 10, paddingVertical: 10 },
  story: { alignItems: "center", marginRight: 15, width: 70 ,height: 100, overflow: "visible"},
  storyRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff3b6b",
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: { width: 62, height: 62, borderRadius: 31 },

storyText: {
  fontSize: 12,
  marginTop: 6,
  textAlign: "center",
  color: "#262626",
  width: 70,
},
  post: { marginBottom: 20 },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  row: { flexDirection: "row", alignItems: "center" },
  avatarSmall: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
  username: { fontWeight: "bold" },
  postImage: { width: "100%", height: 350 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  caption: { paddingHorizontal: 10 },
searchBar: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 10,
  marginTop: 10,
},

searchText: {
  marginLeft: 8,
  color: "gray",
},
  searchHeader: { padding: 15 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  gridImg: { width: "33.3%", height: 120 },

  profileTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
  },
  avatarBig: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#ddd" },
  stats: { alignItems: "center" },
  statNum: { fontWeight: "bold" },
  bio: { paddingHorizontal: 15, marginBottom: 10 },
});