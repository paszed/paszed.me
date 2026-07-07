/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      from: {},
      to: {
        circular: true,
      },
    },

    {
      name: "no-feature-to-app",
      severity: "error",
      from: {
        path: "^src/features",
      },
      to: {
        path: "^src/app",
      },
    },

    {
      name: "no-components-to-app",
      severity: "error",
      from: {
        path: "^src/components",
      },
      to: {
        path: "^src/app",
      },
    },
  ],

  options: {
    tsConfig: {
      fileName: "tsconfig.json",
    },

    doNotFollow: {
      path: "node_modules",
    },

    exclude: {
      path: [
        "\\.test\\.tsx?$",
        "\\.spec\\.tsx?$",
      ],
    },
  },
};
