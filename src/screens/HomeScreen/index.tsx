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
import SearchInput from "../../components/SearchInput";
import { Search } from "../../../assets/icons";
import Colors from "../../theme";
import styles from "./styles";
import FilterModal from "../../modals/FilterModal";
import axios from "axios";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");
type filterModel = {
  sortBy: number;
  brand: string;
  model: string;
};
const index = () => {
  const [products, setProducts] = useState<Product[]>();
  const [allProducts, setAllProducts] = useState<Product[]>();
  const [showFilter, setShowFilter] = useState(false);

  const getPostsFromServer = async () => {
    await axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((response) => {
        setAllProducts(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostsFromServer();
  }, []);

  const searchProduct = (text: string) => {
    console.log("text: ", text, allProducts);
    if (text !== "") {
      const filteredProducts = allProducts.filter((p) => {
        return p.name.toLowerCase().includes(text.toLowerCase());
      });
      setProducts(filteredProducts);
      console.log("filtered: ", filteredProducts, text);
    }
    else setProducts(allProducts);
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
        <SearchInput searchProduct={searchProduct} />
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
