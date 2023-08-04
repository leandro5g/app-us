import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useUser() {
  const user = useContextSelector(
    AuthContext,
    (authContext) => authContext.user
  );

  const updateUser = useContextSelector(
    AuthContext,
    (authContext) => authContext.updateUser
  );

  return {
    user,
    updateUser,
  };
}
