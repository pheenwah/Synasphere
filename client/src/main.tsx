import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AppShell from "./layouts/AppShell.tsx";
import PageLayout from "./layouts/PageLayout.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { AuthContextProvider } from "./context/authContext/AuthContextProvider.tsx";

import LandingPage from "./pages/LandingPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ConnectionsPage from "./pages/ConnectionsPage.tsx";
import OtherUserProfilePage from "./pages/OtherUserProfilePage.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: (
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    ),
    children: [
      {
        element: (
          <AppShell>
            <PageLayout>
              <Outlet />
            </PageLayout>
          </AppShell>
        ),
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "/auth",
            element: <AuthPage />,
          },
          {
            path: "/profile",
            element: (
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/connections",
            element: <ConnectionsPage />,
          },
          {
            path: "/user/:id",
            element: <OtherUserProfilePage />,
          },
          {
            path: "/community",
            element: <CommunityPage />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
