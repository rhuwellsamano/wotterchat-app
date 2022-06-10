export default {
  name: "splash",
  title: "Splash",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in Splash",
      type: "string",
    },
    {
      name: "blockSplash",
      title: "Block Splash",
      description: "ADMIN Controls: Toggle if Splash is deemed inappropriate",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
      to: { type: "author" },
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Images",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
