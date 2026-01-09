export type ContentType = "quote" | "meditation" | "breathwork" | "music";

export type ContentItem = {
  id: string;
  type: ContentType;
  title: string;
  subtitle?: string;
  body?: string;
};
