import { RFValue } from "../../../libs/responsive-fontsize";

import {
  Container,
  ContentTextLoading,
  HeaderLoading,
  SkeletonView,
  Wrapper,
  Content,
} from "./loading-comments.styles";

type LoadingCommentsProps = {
  isLarge?: boolean;
};

const LoadingComments: React.FC<LoadingCommentsProps> = ({
  isLarge = true,
}) => {
  const aux = isLarge ? [1, 2, 3] : [1, 2];

  return (
    <Container>
      {aux.map((item) => (
        <Content key={`key-${item}`}>
          <HeaderLoading>
            <SkeletonView
              width={RFValue(60)}
              height={RFValue(60)}
              radius="round"
            />

            <ContentTextLoading>
              <SkeletonView width={"90%"} />
              <Wrapper />
              <SkeletonView width={"20%"} />
            </ContentTextLoading>
          </HeaderLoading>

          <SkeletonView width={"100%"} />
        </Content>
      ))}
    </Container>
  );
};

export { LoadingComments };
