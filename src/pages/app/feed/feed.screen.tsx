import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { ButtonFloatModal } from "./components/button-float-modal/button-float-modal.component";
import { HeaderFeed } from "./components/header-feed/header-feed.component";
import { ListPostFeed } from "./components/list-post-feed/list-post-feed.component";

const Feed: React.FC = () => {
  return (
    <DefaultBackgorund>
      <HeaderFeed />

      <ListPostFeed />

      <ButtonFloatModal />
    </DefaultBackgorund>
  );
};

export { Feed };
