# Contributing to {{ PROJECT_NAME }}

First off, thanks for taking the time to contribute! :tada:

## Code of Conduct
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Getting Started
    git clone https://github.com/{{ ORG_NAME }}/{{ REPO_NAME }}.git
    cd {{ REPO_NAME }}
    {{ PACKAGE_MANAGER }} install
    {{ PACKAGE_MANAGER }} run dev

## Pull Request Process
1. Fork → `feat/awesome-feature` branch.  
2. Add tests & ensure lint passes: `{{ PACKAGE_MANAGER }} run test`.  
3. Commit using [Conventional Commits](https://www.conventionalcommits.org).  
4. Open a PR and fill in the template.  

## Coding Guidelines
- Lint: **{{ LINT_TOOL }}** (`{{ PACKAGE_MANAGER }} run lint`)  
- Format: **{{ FORMATTER }}**  
- Target **{{ MIN_COVERAGE }} %** test coverage  

## Release
`main` merges trigger semantic-release via CI.