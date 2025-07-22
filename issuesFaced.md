# Bug Fixes and Issues During Stripe Integration in Omniplex AI Project

## Overview
While integrating Stripe into the Omniplex AI project, several technical challenges were encountered. This report outlines the main issues faced and the solutions implemented to resolve them.

## Main Issues and Solutions

### 1. Peer Dependency Errors
- **Problem**: Encountered peer dependency errors due to outdated dependencies when installing packages.
- **Fix**: Resolved the issue by running:
```bash

    
yarn install --ignore-engines --force --legacy-peer-deps



### 2. Missing Firebase Credentials
- **Problem**: The application failed to start as it tried to initialize a Firebase app without valid credentials.
- **Fix**: Generated and supplied custom Firebase credentials to ensure the Firebase app could be created and initialized properly at runtime.



### 3. Environment Variable for OpenAI Routing
- **Problem**: The build process was failing because of a missing `OPEN_AI_ROUTER_KEY` environment variable.
- **Fix**: Acquired the required key from [openrouter.ai](https://openrouter.ai) and added it to the environment configuration, enabling successful builds.

---

### 4. Stripe Key Error During AWS Deployment
- **Problem**: Deployment to AWS failed as a public (publishable) Stripe key was mistakenly used instead of a secret key, which Stripe does not allow for production server operations.
- **Fix**: Switched to using the appropriate Stripe **secret key** for server-side processes.


### 5. Environment Variables and AWS Amplify
- **Problem**: AWS Amplify was not injecting environment variables correctly during deployment, causing runtime issues.
- **Fix**: Added the `NEXT_PUBLIC_` prefix to all required environment variable names to ensure they were properly exposed and usable during both build and deployment.




| Issue                                       | Solution/Workaround                                            |
| ------------------------------------------- | -------------------------------------------------------------- |
| Peer dependency error                       | Used advanced Yarn install options to bypass version conflicts |
| Missing Firebase credentials                | Generated and provided custom Firebase credentials             |
| Missing OpenAI router environment variable  | Retrieved key from openrouter.ai and added to env config        |
| Stripe key error (public vs secret)         | Used Stripe secret key for server-side integration              |
| AWS Amplify not injecting env vars properly | Added `NEXT_PUBLIC_` prefix to env variables                    |
