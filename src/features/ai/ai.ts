/* eslint-disable @typescript-eslint/no-explicit-any */
import { aiApi } from "../api";
import { PostAiTestRequest, PostAiTestResponse } from "./types";

export const AIExtendedEndpoints = aiApi.injectEndpoints({
  endpoints: (build) => ({
    postAiTest: build.mutation<PostAiTestResponse, PostAiTestRequest>({
      query: () => ({
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

export const { usePostAiTestMutation } = AIExtendedEndpoints;
