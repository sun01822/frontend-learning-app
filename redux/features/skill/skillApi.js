import { apiSlice } from "../api/apiSlice";

export const skillApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSkillOfUser: builder.query({
      query: ({ userId }) => ({
        url: `/skill/user/${userId}`
      }),
      providesTags: ['Skill'],
    }),
    addSkill: builder.mutation({
      query: ({ skillData }) => ({
        url: `/skill`,
        method: "POST",
        body: skillData,
      }),
      invalidatesTags: ["Skill"],
    }),
    deleteSkillById: builder.mutation({
      query: ({ userId, id }) => ({
        url: `/skill/${userId}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Skill'],
    }),
  }),
});

export const { useGetSkillOfUserQuery, useAddSkillMutation, useDeleteSkillByIdMutation } = skillApi;
