module.exports = {
  docs: [
    "docs/getting-started",
    "docs/tutorials",
    {
      type: "category",
      label: "User Interface",
      items: [
        "docs/user-interface/dashboard",
        {
          type: "category",
          label: "Settings",
          items: [
            "docs/user-interface/settings/api-tokens",
            "docs/user-interface/settings/webhooks",
            "docs/user-interface/settings/secrets",
            "docs/user-interface/settings/users",
            "docs/user-interface/settings/teams",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "docs/stubs",
        {
          type: "category",
          label: "Roles and permissions",
          items: [
            "docs/permissions/predefined-roles",
            "docs/permissions/permissions",
            "docs/permissions/api-tokens",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Account",
      items: ["docs/saml", "docs/billing"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: ["docs/login-help", "docs/webhooks-help", "docs/powershell-guide"],
    },
    {
      type: "category",
      label: "API Reference",
      items: ["docs/api"],
    },
  ],
  university: [
    {
      type: "category",
      label: "Pactflow University",
      items: [
        "docs/workshops/index",
        {
          type: "category",
          label: "Introduction to Pact",
          items: [
            "docs/workshops/introduction/index",
            "docs/workshops/introduction/learning",
            "docs/workshops/introduction/readme",
            "docs/workshops/introduction/further",
          ],
        },
        {
          type: "category",
          label: "CI/CD Workshop",
          items: [
            "docs/workshops/ci-cd/index",
            {
              "Set up CI": [
                "docs/workshops/ci-cd/set-up-ci/index",
                "docs/workshops/ci-cd/set-up-ci/prerequisites",
                "docs/workshops/ci-cd/set-up-ci/fork-and-clone-the-repositories",
                "docs/workshops/ci-cd/set-up-ci/configure-the-builds-in-travis-ci",
                "docs/workshops/ci-cd/set-up-ci/configure-consumer-and-provider-pipelines",
                "docs/workshops/ci-cd/set-up-ci/configure-webhook",
                "docs/workshops/ci-cd/set-up-ci/conclusion",
              ],
              "Setup Local Development": [
                "docs/workshops/ci-cd/set-up-local-development/index",
                "docs/workshops/ci-cd/set-up-local-development/prerequisites",
                "docs/workshops/ci-cd/set-up-local-development/install-dependencies",
                "docs/workshops/ci-cd/set-up-local-development/run-the-applications",
                "docs/workshops/ci-cd/set-up-local-development/run-the-consumer-tests",
                "docs/workshops/ci-cd/set-up-local-development/run-the-provider-tests",
              ],
              Workshop: [
                "docs/workshops/ci-cd/workshop/index",
                "docs/workshops/ci-cd/workshop/prerequisites",
                "docs/workshops/ci-cd/workshop/how-to-break-everything",
                "docs/workshops/ci-cd/workshop/protecting-the-provider",
                "docs/workshops/ci-cd/workshop/how-not-to-break-everything",
                "docs/workshops/ci-cd/workshop/implementing-the-provider-changes",
                "docs/workshops/ci-cd/workshop/verifying-feature-pacts",
                "docs/workshops/ci-cd/workshop/releasing-the-consumer-code",
                "docs/workshops/ci-cd/workshop/conclusion",
              ],
            },
          ],
        },
        "docs/workshops/advanced/index",
        "docs/workshops/tutorials/index",
      ],
    },
  ],
  examples: [
    {
      type: "category",
      label: "Examples",
      items: [
        "docs/examples/index",
        {
          Cypress: ["docs/examples/cypress/readme"],
          JS: [
            "docs/examples/js/consumer/readme",
            "docs/examples/js/provider/readme",
          ],
          ".NET": [
            "docs/examples/dotnet/consumer/readme",
            "docs/examples/dotnet/provider/readme",
          ],
          Java: ["docs/examples/java/provider-springboot/readme"],
          Kafka: [
            "docs/examples/kafka/js/consumer",
            "docs/examples/kafka/java/consumer",
            "docs/examples/kafka/java/provider",
          ],
          Python: [
            "docs/examples/python/consumer/readme",
            "docs/examples/python/provider/readme",
          ],
          "SOAP/XML": [
            "docs/examples/soap/java/consumer",
            "docs/examples/soap/java/provider",
          ],
        },
      ],
    },
  ],
  onprem: [
    {
      type: "category",
      label: "On-Premises",
      items: [
        {
          type: "category",
          label: "Installation",
          items: [
            "docs/on-premises/index",
            "docs/on-premises/system-requirements",
            "docs/on-premises/docker-image-registry",
            "docs/on-premises/network-configuration",
            "docs/on-premises/database",
            "docs/on-premises/logging",
            {
              type: "category",
              label: "Authentication",
              items: ["docs/on-premises/authentication/saml"],
            },
            {
              type: "category",
              label: "Application configuration",
              items: [
                "docs/on-premises/environment-variables/index",
                "docs/on-premises/environment-variables/templates",
                "docs/on-premises/environment-variables/timezones",
              ],
            },
            "docs/on-premises/docker-compose-example",
            "docs/on-premises/installation/checklist",
          ],
        },
        {
          type: "category",
          label: "Upgrading",
          items: ["docs/on-premises/upgrading/database-migrations"],
        },
        {
          type: "category",
          label: "Operation",
          items: ["docs/on-premises/authentication"],
        },
        {
          type: "category",
          label: "Troubleshooting",
          items: ["docs/on-premises/troubleshooting"],
        },
        {
          type: "category",
          label: "Releases",
          items: [
            "docs/on-premises/releases/1.4.0",
            "docs/on-premises/releases/1.4.1",
            "docs/on-premises/releases/1.5.0",
          ],
        },
      ],
    },
  ],
};
