import { ActivityIndicator } from "./activity-load.styles";

type ActivityLoadProps = {
  isLoading: boolean;
};

const ActivityLoad: React.FC<ActivityLoadProps> = ({ isLoading }) => {
  return <ActivityIndicator size="small" animating={isLoading} />;
};

export { ActivityLoad };
