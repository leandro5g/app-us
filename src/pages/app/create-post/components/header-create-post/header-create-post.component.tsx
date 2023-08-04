import { HeaderTitle } from "../../../../../shared/components/headers/header-title/header-title.component";
import { SwitchAnonymous } from "../../../../../shared/components/switch-anonymous/switch-anonymous.component";

type HeaderCreatePostProps = {
  onClose(): void;
};

const HeaderCreatePost: React.FC<HeaderCreatePostProps> = ({ onClose }) => {
  return (
    <HeaderTitle onClose={onClose} title="Criar desabafo">
      <SwitchAnonymous isLarge />
    </HeaderTitle>
  );
};

export { HeaderCreatePost };
