import { Routes, useLocation } from "react-router-dom";
import { AppRouter } from "./router";
import { ROUTES } from "./routes";
import { useLazyGetUserQuery } from "./features/user";
import { useHandleRequest } from "./hooks";
import { useEffect } from "react";
import { useGetAllJobsQuery, useGetSaveJobIdsQuery } from "./features/jobs";
import { useStorage } from "./utils/storage";
import { Toaster } from "./components/ui/toaster";
import { MainLayout } from "./components/layouts";
import { PageLoader } from "./components/page-loader";

export const App = () => {
  const [getUser, { isError, isLoading = true }] = useLazyGetUserQuery();
  const { isLoading: isLoadingJobs } = useGetAllJobsQuery({});
  const { isLoading: isLoadingSavedJobs } = useGetSaveJobIdsQuery("");
  const { pathname } = useLocation();
  const handleRequest = useHandleRequest();

  const fetchUser = async () => {
    await handleRequest({
      request: async () => {
        const result = await getUser("");
        return result;
      },
    });
  };

  useEffect(() => {
    if (isError) {
      useStorage.removeCredentials();
      return;
    }

    const token = useStorage.getTokens().accessToken?.split(" ")[1];
    if (token) {
      fetchUser();
    }
  }, [pathname, isError]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading || isLoadingJobs || isLoadingSavedJobs ? (
        <PageLoader />
      ) : (
        <MainLayout>
          <Routes>{AppRouter(ROUTES)}</Routes>
          <Toaster />
        </MainLayout>
      )}
    </>
  );
};
