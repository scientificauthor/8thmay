 // The main navigation structure based on the Figma designs
  const mainNavigation = [
    {
      title: "Courses",
      items: [
        {
          title: "Mendeley Ref. Man.",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms buying offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
        {
          title: "Zetero desk.",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms sign-up offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
        {
          title: "EndNote21 desk.",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms sign-up offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
      ],
    },
    {
      title: "Online live courses",
      items: [
        {
          title: "Mendeley Ref. Man.",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
        {
          title: "Zetero desk.",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
        {
          title: "EndNote21 desk.",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
      ],
    },
    {
      title: "Training events",
      items: [
        {
          title: "March 2025",
          items: Array.from({ length: 31 }, (_, i) => ({
            title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
          })),
        },
      ],
    },
    {
      title: "Other web pages",
      items: [
        {
          title: "About Reference Managers",
          items: [
            { title: "Comparisons" },
            { title: "Developments" },
            { title: "Literature" },
          ],
        },
        { title: "About Us" },
        { title: "Agreements" },
        { title: "Affiliate Program" },
        { title: "Consultation Topics" },
        { title: "Help" },
        {
          title: "Homepage",
          items: [
            { title: "Homepage" },
            { title: "Cookie Settings" },
            { title: "Pop-up Book Window" },
            { title: "Contact Form" },
          ],
        },
        { title: "News" },
        { title: "Online Live Courses" },
        { title: "Our Crew" },
        { title: "Overview" },
        { title: "Pricing" },
        { title: "Privacy Policy" },
        { title: "References" },
        { title: "Request a refund" },
        { title: "Sitemap" },
        { title: "Shopping Cart Items" },
        { title: "Terms & Conditions" },
        { title: "Training Events List" },
        { title: "Underconstruction" },
        { title: "Why citehub" },
      ],
    },
  ];

  export default mainNavigation;