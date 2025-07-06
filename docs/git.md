# Branching Strategy

This project follows a structured branching model to maintain a clean, organized workflow. Below is an explanation of how to create and manage branches for features, bug fixes, and releases.

## Main Branches

### `main`

- **Description**: This branch contains the production-ready code.
- **Rules**:
  - Direct commits are not allowed.
  - Only pull requests from the `dev` branch are merged into `main`.

## Feature Branches

### `feat/<feature-name>`

- **Description**: This branch is created for each new feature or enhancement.
- **Branching From**: `dev`
- **Naming Convention**:
  - Use the format `feat/<feature-name>`.
  - Replace `<feature-name>` with a descriptive name of the feature being developed.
- **Rules**:
  - Use **rebasing** frequently to keep your feature branch up to date with `dev`. This helps maintain a clean history and avoid complex merge conflicts.
  - After feature completion, create a pull request to merge into `dev`.
