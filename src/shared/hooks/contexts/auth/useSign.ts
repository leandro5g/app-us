import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useSign() {
  const signIn = useContextSelector(
    AuthContext,
    (authContext) => authContext.signIn
  );

  const signOut = useContextSelector(
    AuthContext,
    (authContext) => authContext.signOut
  );

  const isLoadingInitial = useContextSelector(
    AuthContext,
    (authContext) => authContext.isLoadingInitial
  );
  const countNewNotifications = useContextSelector(
    AuthContext,
    (authContext) => authContext.countNewNotifications
  );

  return {
    signIn,
    signOut,
    isLoadingInitial,
    countNewNotifications,
  };
}
