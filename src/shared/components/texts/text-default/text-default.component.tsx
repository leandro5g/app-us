import { TextProps } from "react-native";

import { Text, TextType } from "./text-default.styles";

type TextDefaultProps = TextProps & {
  type: TextType;
};

const TextDefault: React.FC<TextDefaultProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { TextDefault };
