import { TouchableOpacityProps } from "react-native";

import { Container } from "./button-void.styles";

type ButtonVoidProps = TouchableOpacityProps;

const ButtonVoid: React.FC<ButtonVoidProps> = ({ ...rest }) => {
  return <Container activeOpacity={0.9} {...rest} />;
};

export { ButtonVoid };
