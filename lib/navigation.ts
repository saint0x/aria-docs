export const navGroups = [
  {
    title: "Introduction",
    items: [
      { name: "Getting Started", href: "/getting-started" },
      { name: "Core Concepts", href: "/core-concepts" },
    ],
  },
  {
    title: "Reference",
    items: [
      { name: "Syntax Reference", href: "/syntax-reference" },
      { name: "API Reference", href: "/api-reference" },
      { name: "Aria Compiler", href: "/aria-compiler" },
      { name: "Standard Tools", href: "/standard-tools" },
    ],
  },
  {
    title: "Guides",
    items: [
      { name: "Architecture", href: "/architecture" },
      { name: "Examples", href: "/examples" },
    ],
  },
]

export const flatNavItems = navGroups.flatMap((group) => group.items)