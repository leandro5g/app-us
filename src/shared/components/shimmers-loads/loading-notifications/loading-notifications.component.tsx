import { RFValue } from "../../../libs/responsive-fontsize";
import {
  Container,
  Content,
  SkeletonView,
  ContentTextLoading,
  Wrapper,
} from "./loading-notifications.styles";

const LoadingNotifications: React.FC = () => {
  return (
    <Container>
      <Content>
        <SkeletonView width={RFValue(40)} height={RFValue(40)} radius="round" />

        <ContentTextLoading>
          <SkeletonView width="90%" height={RFValue(26)} />

          <Wrapper />

          <SkeletonView width="30%" height={RFValue(18)} />
        </ContentTextLoading>
      </Content>

      <Content>
        <SkeletonView width={RFValue(40)} height={RFValue(40)} radius="round" />

        <ContentTextLoading>
          <SkeletonView width="90%" height={RFValue(26)} />

          <Wrapper />

          <SkeletonView width="30%" height={RFValue(18)} />
        </ContentTextLoading>
      </Content>

      <Content>
        <SkeletonView width={RFValue(40)} height={RFValue(40)} radius="round" />

        <ContentTextLoading>
          <SkeletonView width="90%" height={RFValue(26)} />

          <Wrapper />

          <SkeletonView width="30%" height={RFValue(18)} />
        </ContentTextLoading>
      </Content>

      <Content>
        <SkeletonView width={RFValue(40)} height={RFValue(40)} radius="round" />

        <ContentTextLoading>
          <SkeletonView width="90%" height={RFValue(26)} />

          <Wrapper />

          <SkeletonView width="30%" height={RFValue(18)} />
        </ContentTextLoading>
      </Content>
      <Content>
        <SkeletonView width={RFValue(40)} height={RFValue(40)} radius="round" />

        <ContentTextLoading>
          <SkeletonView width="90%" height={RFValue(26)} />

          <Wrapper />

          <SkeletonView width="30%" height={RFValue(18)} />
        </ContentTextLoading>
      </Content>
    </Container>
  );
};

export { LoadingNotifications };
