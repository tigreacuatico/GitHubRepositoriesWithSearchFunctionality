Welcome to Github With Search!
This is a project that implements repository search by name and language with the GitHub REST API.

## This project:

- Is written in Next.js, a React framework
- Uses TypeScript
- Uses git
- Is responsive
- Has unit tests (Jest, react-testing-library)
- Has storybook
- Is deployed in Netlify: https://githubwithsearch.netlify.app
- Is documented with JSDoc

## Instructions on how to run the project:

## To run the development server:

Type npm run dev in a terminal, and go to http://localhost:3000/

## To run the test suite:

Type npm run test

## To run the Storybook:

Type npm run storybook, it will automatically open a new window

## Future improvements:

- Use the Graph API instead of REST for cleaner and more efficient calls.
- Don't repeat the code for the call in searchbar and in the page of the user.
- More tests!
- More stories!
- Calculate Organizations and Stars in the Profile of the user.
- Implement functionality to Type dropdown.
- Improve tablet responsive design.
- Properly calculate the "Updated x days ago" on each repository.
- Make icons render in stories that use them.
