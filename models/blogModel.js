import mongoose from "mongoose";

// model Blog {
//   id       String    @id @default(auto()) @map("_id") @db.ObjectId
//   slug     String    @unique
//   title    String
//   content     String
//   coverImage String?
//   user   User      @relation(fields: [userEmail], references: [email])
//   userEmail String
//   category String
// }

const blogSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
