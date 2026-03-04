declare module "*.mdx" {
  import * as React from "react";
  export const meta: Record<string, any>;
  const MDXComponent: React.FC;
  export default MDXComponent;
}
