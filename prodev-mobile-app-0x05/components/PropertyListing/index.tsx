// components/PropertyListing/index.tsx
import React from "react";
import { FlatList, View } from "react-native";
import { Property } from "@/interfaces";
import { PropertyListingCard } from "@/components/common/PropertyListingCard";

interface PropertyListingProps {
  properties: Property[];
}

export const PropertyListing: React.FC<PropertyListingProps> = ({ properties }) => {
  return (
    <View className="flex-1 p-4">
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyListingCard property={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
