import { HeaderTitle } from "../../../shared/components/headers/header-title/header-title.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { KeyboardAvoiding } from "../../../shared/components/utils/keyboard-avoiding/keyboard-avoiding.component";
import { KeyboardHandle } from "../../../shared/components/utils/keyboard-handle/keyboard-handle.component";

import { ListComment } from "./components/list-comment/list-comment.component";

const CommentsPost: React.FC = () => {
  return (
    <DefaultBackgorund>
      <HeaderTitle title="Comentários" />
      <KeyboardAvoiding isOffset>
        <KeyboardHandle>
          <ListComment />
        </KeyboardHandle>
      </KeyboardAvoiding>
    </DefaultBackgorund>
  );
};

export { CommentsPost };
