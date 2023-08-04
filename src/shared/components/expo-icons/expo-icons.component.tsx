import { ComponentProps, useCallback } from "react";

import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

import { Container } from "./expo-icons.styles";

type ExpoIconsProps = {
  name:
    | ComponentProps<typeof AntDesign>["name"]
    | ComponentProps<typeof Feather>["name"]
    | ComponentProps<typeof Ionicons>["name"]
    | ComponentProps<typeof FontAwesome>["name"];
  size: number;
  color: string;
  type: "AntDesign" | "Feather" | "Ionicons" | "FontAwesome";
};

const ExpoIcons: React.FC<ExpoIconsProps> = ({ type, name, ...rest }) => {
  const ICONS = useCallback(() => {
    if (type === "AntDesign") {
      return (
        <AntDesign
          name={name as ComponentProps<typeof AntDesign>["name"]}
          {...rest}
        />
      );
    }

    if (type === "Feather") {
      return (
        <Feather
          name={name as ComponentProps<typeof Feather>["name"]}
          {...rest}
        />
      );
    }

    if (type === "Ionicons") {
      return (
        <Ionicons
          name={name as ComponentProps<typeof Ionicons>["name"]}
          {...rest}
        />
      );
    }

    if (type === "FontAwesome") {
      return (
        <FontAwesome
          name={name as ComponentProps<typeof FontAwesome>["name"]}
          {...rest}
        />
      );
    }
  }, [type]);

  return <Container>{ICONS()}</Container>;
};

export { ExpoIcons };
