declare module ITBlog {
  interface Blog {
    id: string;
    title: string;
    content: string;
    eyecatch: EyeCatch;
    category: Category;
    tag: Tag[];
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  }

  interface EyeCatch {
    url: string;
    width: number;
    height: number;
  }

  interface Category {
    id: string;
    name: string;
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  }

  interface Tag {
    id: string;
    name: string;
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  }

  interface ContactEvent {
    action: "submit_form";
    category: "contact";
    label: string;
  }

  interface ClickEvent {
    action: "click";
    category: "other";
    label: string;
  }

  type Event = ContactEvent | ClickEvent;
}
