import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MainProducts from "../../components/MainProducts";
import { Search } from "../../../assets/icons";
import Colors from "../../theme";
import styles from "./styles";
import FilterModal from "../../modals/FilterModal";
import axios from "axios";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");
const index = () => {
  const [products, setProducts] = useState<Product[]>();
  const [showFilter, setShowFilter] = useState(false);
  const [text, setText] = useState<string>("");

  type filterModel = {
    sortBy: number;
    brand: string;
    model: string;
  };

  const getPostsFromServer = async () => {
    await axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostsFromServer();
  }, []);

  const searchProduct = () => {
    if (products && text !== "") {
      const filteredProducts = products.filter((p) => {
        return p.name.toLowerCase() === text.toLowerCase();
      });
      setProducts(filteredProducts);
      console.log("filtered: ", filteredProducts, text);
    }
  };

  const setFilter = (filterData: filterModel) => {
    let filteredData = [];
    if (filterData.brand) {
      filteredData.push(
        products.filter((p) => {
          return p.brand === filterData.brand;
        })
      );
    }
    if (filterData.model) {
      filteredData.push(
        products.filter((p) => {
          return p.model === filterData.model;
        })
      );
    }
    console.log("filteredData", filteredData);
    setProducts(filteredData);
  };

  return (
    <View>
      <View style={styles.filterView}>
        <View style={styles.searchInputView}>
          <TouchableOpacity onPress={() => searchProduct()}>
            <Search
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={Colors.grey}
            />
          </TouchableOpacity>
          <TextInput
            value={text}
            onChangeText={(value) => setText(value)}
            style={{
              marginLeft: 5,
              fontSize: 18,
              marginRight: 5,
              width: "88%",
            }}
            placeholder="Search"
            placeholderTextColor={Colors.darkGrey}
          />
        </View>
        <View style={styles.filterActionView}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textFilters}>Filters:</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => setShowFilter(true)}
              style={styles.buttonFilter}
            >
              <Text style={styles.buttonText}>Select Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginBottom: height * 0.13 }}>
        <MainProducts products={products} />
      </ScrollView>
      <FilterModal
        visible={showFilter}
        closed={(filterData: filterModel) => {
          {
            setShowFilter(false);
            if (filterData) setFilter(filterData);
          }
        }}
      />
    </View>
  );
};

export default index;
