import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Search } from '../../../assets/icons'
import styles from './styles'
import Colors from '../../theme'

type SearchInputProps = {
    searchProduct: (key: string) => void
}

const index = ({ searchProduct }: SearchInputProps) => {
  const [text, setText] = useState<string>("");
  return (
    <View style={styles.searchInputView}>
    <TouchableOpacity onPress={() => searchProduct(text)}>
      <Search
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={Colors.grey}
      />
    </TouchableOpacity>
    <TextInput
      value={text}
      onChangeText={setText}
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
  )
}

export default index;