import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Colors from "../theme";
import styles from "./styles";
import { Search, Vector, CloseOutline } from "../../assets/icons";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import products from "../../assets/products";

const { width, height } = Dimensions.get("window");
let sortFilters = [
  "Old to new",
  "New to old",
  "Price hight to low",
  "Price low to High",
];
let brands = [...new Set(products.map((p) => p.brand))];
let models = [...new Set(products.map((p) => p.model))];

const index = ({
  visible,
  closed,
}: {
  visible: boolean;
  closed: (filterData) => void;
}) => {
  const [filterData, setFilterData] = useState({
    sortBy: 0,
    brand: "",
    model: "",
  });
  useEffect(() => {
    console.log("filterData: ", filterData);
  }, [filterData]);
  return (
    <Modal animationType="slide" hardwareAccelerated={true} visible={visible}>
      <View style={{ height: height, paddingTop: 50 }}>
        <View style={styles.titleView}>
          <TouchableOpacity
            onPress={() => closed(null)}
            style={{ flex: 1, alignItems: "flex-start" }}
          >
            <CloseOutline
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={Colors.grey}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.titleText}>Filter</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <ScrollView style={{ paddingHorizontal: 15 }}>
          <View style={styles.viewFilterCol}>
            <Text style={styles.textFilterSubTitle}>Sort By</Text>
            <View style={{ marginLeft: 10 }}>
              {sortFilters.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setFilterData({ ...filterData, sortBy: index })
                  }
                  style={styles.sortOption}
                >
                  <View>
                    <View
                      style={[
                        styles.rbContainer,
                        filterData.sortBy === index && {
                          backgroundColor: Colors.white,
                        },
                      ]}
                    >
                      {filterData.sortBy === index && (
                        <View style={styles.rbChild} />
                      )}
                    </View>
                  </View>
                  <View style={styles.optionTextView}>
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.viewFilterCol}>
            <Text style={styles.textFilterSubTitle}>Brand</Text>
            <View style={{ marginLeft: 10 }}>
              <View style={styles.searchInputView}>
                <Search
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={Colors.grey}
                />
                <TextInput
                  style={{
                    marginLeft: 5,
                    fontSize: 14,
                    marginRight: 5,
                    width: "88%",
                  }}
                  placeholder="Search"
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              <FlatList
                style={{ height: height * 0.1 }}
                data={brands}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      setFilterData({ ...filterData, brand: item })
                    }
                    style={styles.sortOption}
                  >
                    <View>
                      <View
                        style={[
                          styles.rectContainer,
                          filterData.brand === item && {
                            backgroundColor: Colors.main,
                          },
                        ]}
                      >
                        {filterData.brand === item && (
                          <Vector
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={Colors.grey}
                          />
                        )}
                      </View>
                    </View>
                    <View style={styles.optionTextView}>
                      <Text style={styles.optionText}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={[styles.viewFilterCol, { borderBottomWidth: 0 }]}>
            <Text style={styles.textFilterSubTitle}>Model</Text>
            <View style={{ marginLeft: 10 }}>
              <View style={styles.searchInputView}>
                <Search
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={Colors.grey}
                />
                <TextInput
                  style={{
                    marginLeft: 5,
                    fontSize: 14,
                    marginRight: 5,
                    width: "88%",
                  }}
                  placeholder="Search"
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              <FlatList
                style={{ height: height * 0.1 }}
                data={models}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      setFilterData({ ...filterData, model: item })
                    }
                    style={styles.sortOption}
                  >
                    <View>
                      <View
                        style={[
                          styles.rectContainer,
                          filterData.model === item && {
                            backgroundColor: Colors.main,
                          },
                        ]}
                      >
                        {filterData.model === item && (
                          <Vector
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={Colors.grey}
                          />
                        )}
                      </View>
                    </View>
                    <View style={styles.optionTextView}>
                      <Text style={styles.optionText}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            borderTopWidth: 1,
            backgroundColor: Colors.white,
            borderTopColor: Colors.grey,
            paddingVertical: 15,
            paddingHorizontal: 20,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 300,
          }}
        >
          <TouchableOpacity
            onPress={() => closed(filterData)}
            style={styles.filterButton}
          >
            <Text style={styles.buttonText}>Primary</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default index;
