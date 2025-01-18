### Survey App ⭐

The project demonstrates a dynamic survey system that navigates between questions based on user responses and saves the answers.

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Running the Production Environment](#run-the-production-environment)

## Getting Started


First, clone the repository:
```bash
git clone https://github.com/StanislavFedyna/survey-app.git
cd survey-app
```

Install dependencies
```bash
npm install
```
*Make sure you have the required tools and dependencies installed ([Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)).

After run one of the following commands:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run the production Environment


To run the production environment, follow these steps:
1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Technologies Used

- **Languages**: CSS, JavaScript, TypeScript
- **Frameworks**: [Next.js](https://nextjs.org)
- **Libraries**:
  - [React](https://reactjs.org)
  - [Redux](https://redux.js.org)
  - [React-Redux](https://react-redux.js.org)
  - [Framer Motion](https://www.framer.com/motion/)
  - [clsx](https://github.com/lukeed/clsx)
- **Tools**:
  - [ESLint](https://eslint.org)
  - [Prettier](https://prettier.io)
  - [Turbopack](https://turbopack.dev)

## File Structure

```plaintext
├── app
│   ├── page.tsx           # Main page component
│   ├── [question].tsx     # Dynamic routes for questions
├── components
│   ├── QuestionScreen.tsx # Component for rendering question screens
│   ├── AnswerList.tsx     # Component for displaying a list of answers
├── redux
│   ├── store.ts           # Redux store configuration
│   ├── slices
│       ├── answersSlice.ts # Redux slice for managing answers
├── public
│   ├── images             # Static images
├── styles
│   ├── globals.css        # Global styles
├── data
│   ├── questionnaire.json # JSON configuration for the questionnaire
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
